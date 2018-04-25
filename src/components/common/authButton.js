import React from 'react';
import { Button } from 'react-md';
import { connect } from 'react-redux';

import { removeAuthInfo } from './../../services/authService';
import history from './../../utils/history';

const logoutUser = () => {
  removeAuthInfo();
  window.location = '/';
};

const signIn = () => {
  history.push('/login');
};

const AuthButton = props => {
  return props.isLoggedIn ? (
    <Button primary flat onClick={logoutUser}>
      Logout
    </Button>
  ) : (
    <Button primary flat onClick={signIn}>
      Log In
    </Button>
  );
};

const mapStateToProps = ({ auth: { isLoggedIn } }) => {
  return {
    isLoggedIn
  };
};

export default connect(mapStateToProps)(AuthButton);
