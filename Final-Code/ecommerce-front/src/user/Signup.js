import React, { useState, useEffect } from 'react'
import Layout from '../core/Layout'
import { signup } from '../auth/index'
import { Link } from 'react-router-dom'


const Signup = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    })

    const { name, email, password, error, success } = values

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value, error: false })

    }


    const clickSubmit = (event) => {
        event.preventDefault()
        setValues({ ...values, error: false })
        signup({ name, email, password })
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error, success: false })
                } else {
                    setValues({
                        ...values,
                        name: '',
                        email: '',
                        password: '',
                        error: '',
                        success: true
                    })
                }
            })


    }


    const signupForm = () => (



        <form>

            <div class="form-group">
                <label for="exampleInputEmail1">name</label>
                <input type="text" class="form-control" value={name} placeholder="Enter name" onChange={handleChange('name')} />

            </div>


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


    const showSuccess = () => {
        return (
            <div className='alert alert-success' style={{ display: success ? '' : 'none' }}>
                New account is created please <Link to='/signin'>Signin</Link>

            </div>
        )
    }




    return (


        <div>
            <Layout title="Sigup Page" description="Users can signup " className="container col-md-6 offset-md-2" >

                {showSuccess()}
                {showError()}
                {signupForm()}


            </Layout>

        </div>


    )
}

export default Signup;
