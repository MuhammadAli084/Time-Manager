import React from 'react'
import { Route,Redirect,Switch } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Login from "../pages/Login";
import Dashboard from '../Components/dashboard/Dashboard';
const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Login}/>
            <ProtectedRoute exact path="/Dashboard" component={Dashboard}/>
            <Redirect to="/" />
        </Switch>
    )
}

export default Routes
