import React from 'react';
import { Button, CircularProgress, TextField, Checkbox } from 'react-md';
import { withFormik, Form } from 'formik';
import Yup from 'yup';
import { connect } from 'react-redux';

// import { notifyError } from './../../services/toastService';
import { loginUser } from './../../actions/index';

const Login = props => {
  const {
    values,
    // errors,
    // touched,
    handleBlur,
    // handleChange,
    handleSubmit,
    isSubmitting,
    isValid
  } = props;

  // errors && notifyError(errors.username || errors.password);

  return (
    <div className="login-form">
      <div>
        <h2>Log In to your Account</h2>
      </div>
      <Form onSubmit={handleSubmit}>
        {/* {error && (
            <div>
              <h5>{error}</h5>
            </div>
          )} */}
        <div>
          <div>
            <label>User Name</label>

            <TextField
              id="email"
              type="email"
              name="username"
              value={values.username}
              onChange={text => props.setFieldValue('username', text)}
              onBlur={handleBlur}
              required
              placeholder="Enter Username"
              errorText="This field is required."
            />
          </div>

          <div>
            <label>Password</label>
            <TextField
              id="password"
              type="password"
              name="password"
              value={values.password}
              onChange={text => props.setFieldValue('password', text)}
              onBlur={handleBlur}
              required
              placeholder="Enter Password"
              errorText="This field is required."
            />
          </div>

          <div>
            {isSubmitting ? (
              <CircularProgress id="login-progress" />
            ) : (
              <Button
                raised
                primary
                type="submit"
                disabled={!isValid || isSubmitting}
              >
                Log In
              </Button>
            )}
          </div>

          <div>
            <Checkbox
              id="keepLoggedIn"
              type="checkbox"
              name="keepLoggedIn"
              label="Keep me logged in"
            />
          </div>
        </div>
      </Form>
    </div>
  );
};

const loginForm = withFormik({
  mapPropsToValues: props => ({ username: '', password: '' }),
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),
    password: Yup.string().required('Password is required!')
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    props.loginUser(values);
  },
  displayName: 'LoginForm'
})(Login);

export default connect(null, { loginUser })(loginForm);
