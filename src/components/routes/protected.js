import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';

import history from './../../utils/history';

// import NotFound from './../404';

const protectedRoutes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Profile} />
      </Switch>
    </Router>
  );
};

export default protectedRoutes;
