import React from 'react';
import { ToastContainer } from 'react-toastify';
import { connect } from 'react-redux';

import './App.css';

import AppHeader from './components/common/header';
import NavBar from './components/common/navbar';
// import Spinner from './components/common/spinner';
import Footer from './components/common/footer';

import PublicRoutes from './components/routes/public';
import ProtectedRoutes from './components/routes/protected';

const App = props => (
  <div>
    <AppHeader />
    <NavBar />
    <ToastContainer />
    {props.isLoggedIn ? <ProtectedRoutes /> : <PublicRoutes />}
    <Footer />
  </div>
);

const mapStateToProps = ({ auth: { isLoggedIn } }) => {
  return {
    isLoggedIn
  };
};
export default connect(mapStateToProps)(App);
