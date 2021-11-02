import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Login from "../pages/Login";
import Dashboard from "../Components/dashboard/Dashboard";
import User from "../Components/User"

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <ProtectedRoute path="/Dashboard" component={Dashboard} />
      <ProtectedRoute path="/" component={User} />
      <Redirect to="/" />   
    </Switch>
  );
};

export default Routes;
