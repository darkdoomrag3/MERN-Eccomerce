import React, { Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { signout, isAuthenticated } from '../auth/index'


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



                    {isAuthenticated() && isAuthenticated().user.role === 0 && (
                        <li class="nav-item">
                            <Link class="nav-link" to="/user/dashboard" style={isActive(history, '/')} >Dashboard</Link>
                        </li>
                    )}


                    {isAuthenticated() && isAuthenticated().user.role === 1 && (
                        <li class="nav-item">
                            <Link class="nav-link" to="/admin/dashboard" style={isActive(history, '/')} >Dashboard</Link>
                        </li>
                    )}




                    {!isAuthenticated() && (
                        <Fragment>

                            <li class="nav-item">
                                <Link class="nav-link" to="/signin" style={isActive(history, '/signin')} >Signin</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/signup" style={isActive(history, '/signup')} >Signup</Link>
                            </li>
                        </Fragment>
                    )


                    }

                    {isAuthenticated() && (
                        <li class="nav-item">
                            <span class="nav-link" to="/signup" style={{ cursor: 'pointer', color: '#ffffff' }} onClick={() => signout(() => {
                                history.push("/")
                            })} >Signout</span>
                        </li>
                    )}



                </ul>
            </div>
        </nav>


    )
}

export default withRouter(Menu)
