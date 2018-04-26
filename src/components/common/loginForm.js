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

  render() {
    const {
      handleSubmit,
      invalid,
      pristine,
      auth: { fetching, error }
    } = this.props;

    error && notifyError(error);

    return (
      <div className="login-form">
        <div>
          <h2>Log In to your Account</h2>
        </div>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          {error && (
            <div>
              <h5>{error}</h5>
            </div>
          )}
          <div>
            <div>
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

            <div>
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

            <div>
              {fetching ? (
                <CircularProgress id="login-progress" />
              ) : (
                <Button
                  raised
                  primary
                  type="submit"
                  disabled={pristine || invalid || fetching}
                >
                  Log In
                </Button>
              )}
            </div>

            <div>
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
