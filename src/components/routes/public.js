import React from 'react';
import { Route, Switch, Router, Redirect } from 'react-router-dom';

import Login from './../loginComponent/login';
// import UserRegistration from './../registration/register';
import history from './../../utils/history';

const publicRoutes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        {/* <Route path="/register" component={UserRegistration} /> */}
        <Redirect to={{ pathname: '/' }} />
        <Route component={Login} />
      </Switch>
    </Router>
  );
};

export default publicRoutes;
