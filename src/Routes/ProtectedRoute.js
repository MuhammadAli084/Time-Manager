import React from "react";
import { Route, Redirect } from "react-router";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuth = localStorage.getItem("token");
  return isAuth
   ? (
    <Route {...rest} render={(props) => <Component {...props} />} />
  ) : (
    <Redirect to="/" />
  );
};

export default ProtectedRoute;