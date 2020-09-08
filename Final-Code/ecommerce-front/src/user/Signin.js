import React, { useState, useEffect } from 'react'
import Layout from '../core/Layout'
import { signin, authenticate } from '../auth/index'
import { Link, Redirect } from 'react-router-dom'


const Signin = () => {
    const [values, setValues] = useState({

        email: 'emad@gmail.com',
        password: 'emad1234',
        error: '',
        loading: false,
        redirectToReferrer: false
    })

    const { email, password, error, loading, redirectToReferrer } = values

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value, error: false })

    }


    const clickSubmit = (event) => {
        event.preventDefault()
        setValues({ ...values, loading: true, error: false })
        signin({ email, password })
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error, loading: false })
                } else {
                    authenticate(data, () => {
                        setValues({
                            ...values,
                            redirectToReferrer: true
                        })
                    })
                }
            })


    }


    const signupForm = () => (



        <form >



            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={handleChange('email')} />
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" value={password} placeholder="Password" onChange={handleChange('password')} />
            </div>

            <button onClick={clickSubmit} type="submit" class="btn btn-primary">Submit</button>
        </form>

    )


    const showError = () => {
        return (
            <div className='alert alert-danger' style={{ display: error ? '' : 'none' }}>
                {error}

            </div>
        )
    }


    const showLoading = () => {
        return (
            loading && (<div className="alert alert-info"><h2>Loading...</h2></div>)
        )
    }


    const redirectUSer = () => {
        if (redirectToReferrer) {
            return <Redirect to="/" />
        }

    }



    return (


        <div>
            <Layout title="Signin" description="Users can signup " className="container col-md-6 offset-md-2" >

                {showLoading()}
                {showError()}
                {signupForm()}
                {redirectUSer()}

            </Layout>

        </div>


    )
}

export default Signin;
