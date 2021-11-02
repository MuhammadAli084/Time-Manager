import React from "react";
import { Route, Redirect } from "react-router";
import AppLayout from "../Components/appLayout/AppLayout";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuth = localStorage.getItem("token");
  return isAuth
   ? (
    <Route {...rest} render={(props) =><AppLayout> <Component {...props} /></AppLayout> } />
  ) : (
    <Redirect to="/" />
  );
};

export default ProtectedRoute;