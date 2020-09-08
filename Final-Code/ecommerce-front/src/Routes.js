import React from 'react'
import { BrowserRouter, Switch, Route, } from 'react-router-dom'
import Signin from './user/Signin'
import Signup from './user/Signup'
import Home from './core/Home'

import AdminRoute from './auth/AdminRoute'
import PrivateRoute from './auth/PrivateRoute'
import Dashboard from './user/UserDashboard'
import AdminDashboard from './user/AdminDashboard'



const Routes = () => {
    return (
        <BrowserRouter>


            <Switch>

                <Route exact path="/" component={Home} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/signin" component={Signin} />
                <PrivateRoute exact path="/user/dashboard" component={Dashboard} />
                <AdminRoute exact path="/admin/dashboard" component={AdminDashboard} />
            </Switch>

        </BrowserRouter>
    )
}

export default Routes