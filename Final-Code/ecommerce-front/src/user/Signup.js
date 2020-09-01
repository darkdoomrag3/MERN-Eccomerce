import React, { useState, useEffect } from 'react'
import Layout from '../core/Layout'
import { API } from '../config'

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

    const signup = (user) => {

        fetch(`${API}signup`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(response => {
                return response.json()
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        signup({ name, email, password })


    }


    const signupForm = () => (



        <form>

            <div class="form-group">
                <label for="exampleInputEmail1">name</label>
                <input type="text" class="form-control" placeholder="Enter name" onChange={handleChange('name')} />

            </div>


            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email" onChange={handleChange('email')} />
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" placeholder="Password" onChange={handleChange('password')} />
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
        </form>

    )





    return (


        <div>
            <Layout title="Sigup Page" description="Users can signup " className="container col-md-6 offset-md-2" >


                {signupForm()}




            </Layout>

        </div>


    )
}

export default Signup;
