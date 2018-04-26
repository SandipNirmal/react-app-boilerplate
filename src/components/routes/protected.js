import React from "react";
import { Route, Switch, Router } from "react-router-dom";

import history from "./../../utils/history";
import Dashboard from "./../dashboard/dashboard";

const protectedRoutes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default protectedRoutes;
