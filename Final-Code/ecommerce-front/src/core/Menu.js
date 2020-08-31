import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#ff9900" };
    } else {
        return { color: "#ffffff" };
    }
};

const Menu = ({ history }) => {
    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-primary">


            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">

                    <li class="nav-item">
                        <Link class="nav-link" to="/" style={isActive(history, '/')} >Home</Link>
                    </li>

                    <li class="nav-item">
                        <Link class="nav-link" to="/signin" style={isActive(history, '/signin')} >Signin</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/signup" style={isActive(history, '/signup')} >Signup</Link>
                    </li>

                </ul>
            </div>
        </nav>


    )
}

export default withRouter(Menu)
