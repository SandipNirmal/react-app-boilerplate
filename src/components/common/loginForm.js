import React, { Component } from "react";
import { Button, CircularProgress } from "react-md";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import { notifyError } from "./../../services/toastService";
import { renderTextField, renderCheckBox } from "./formElements";
import { loginUser } from "./../../actions/index";

class Login extends Component {
  onSubmit = values => {
    this.props.loginUser(values);
  };

  // specifying verify callback function
  verifyCallback = response => {
    console.log(response);
    this.setState({
      captchaValidated: true
    });
  };

  render() {
    const {
      handleSubmit,
      invalid,
      pristine,
      auth: { fetching, error }
    } = this.props;

    error && notifyError(error);

    return (
      <div>
        <div className="col-sm-12 col-md-12">
          <h2>Log In to your Account</h2>
        </div>
        <form className="form-style" onSubmit={handleSubmit(this.onSubmit)}>
          {error && (
            <div>
              <h5 className="md-text--error">{error}</h5>
            </div>
          )}
          <div className="form-line">
            <div className="form-group">
              <label>User Name</label>

              <Field
                id="email"
                type="email"
                name="username"
                component={renderTextField}
                required
                placeholder="Enter Username"
                errorText="This field is required."
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <Field
                id="password"
                type="password"
                name="password"
                component={renderTextField}
                required
                placeholder="Enter Password"
                errorText="This field is required."
              />
            </div>

            <div className="form-group">
              {fetching ? (
                <CircularProgress id="login-progress" />
              ) : (
                <Button
                  raised
                  primary
                  type="submit"
                  className="search-button login-button"
                  disabled={
                    pristine ||
                    invalid ||
                    fetching ||
                    !this.state.captchaValidated
                  }
                >
                  Log In
                </Button>
              )}
            </div>

            <div className="checkbox">
              <Field
                id="keepLoggedIn"
                type="checkbox"
                name="keepLoggedIn"
                component={renderCheckBox}
                label="Keep me logged in"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.username) {
    errors.username = "Email is required!";
  }

  if (!values.password) {
    errors.password = "Password is required!";
  }

  return errors;
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps, { loginUser })(
  reduxForm({
    form: "loginForm",
    validate
  })(Login)
);
