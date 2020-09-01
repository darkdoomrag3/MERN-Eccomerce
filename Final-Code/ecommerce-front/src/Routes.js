import React from 'react'
import { BrowserRouter, Switch, Route, } from 'react-router-dom'
import Signin from './user/Signin'
import Signup from './user/Signup'
import Home from './core/Home'
import Menu from './core/Menu'


const Routes = () => {
    return (
        <BrowserRouter>


            <Switch>

                <Route exact path="/" component={Home} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/signin" component={Signin} />

            </Switch>

        </BrowserRouter>
    )
}

export default Routes