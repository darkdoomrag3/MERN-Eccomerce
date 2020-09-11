import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { createProduct } from "./apiAdmin";


const AddProduct = () => {

    const [values, setValue] = useState({
        name: '',
        description: '',
        price: '',
        photo: '',
        formData: '',
        categories: [],
        category: '',
        loading: false,
        error: '',
        shiping: '',
        quantity: '',
        createdProduct: '',
        rediretToProfile: false
    })


    const { name, description, photo, price, formData, categories, category, createdProduct, shiping, error, quantity, rediretToProfile, loading, } = values

    const { user, token } = isAuthenticated()

    useEffect(() => {
        setValue({ ...values, formData: new FormData() })
    }, [])

    const handleChange = name => event => {
        const value = name === 'photo' ? event.target.file[0] : event.target.value
        formData.set(name, value)
        setValue({ ...value, [name]: value })

    }

    const clickSubmit = (event) => {
        event.preventDefault()
        setValue({ ...values, error: "", loading: true })
        createProduct(user._id, token)
            .then(data => {
                if (data.error) {
                    setValue({ ...values, error: data.error })
                } else {
                    setValue({
                        ...values, name: "", description: "", photo: "", price: "", quantity: "", loading: false, createdProduct: data.name

                    })
                }
            })


    }

    const newPostForm = () => (
        <form className="mb-3" onSubmit={clickSubmit}>
            <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input type="text" class="form-control" value={name} onChange={handleChange('name')} />

            </div>
            <div class="form-group">
                <label >category</label>
                <select class="form-control" onChange={handleChange('category')} value="5f5b3095deb74e0a04953bb4" >
                    <option>Javascript </option>
                </select>
            </div>

            <div class="form-group">
                <label >Description</label>
                <textarea class="form-control" rows="3" onChange={handleChange('description')} value={description}></textarea>
            </div>

            <div class="form-group">
                <label for="exampleInputEmail1">price</label>
                <input type="number" class="form-control" value={price} onChange={handleChange('name')} />

            </div>

            <div class="form-group">
                <label for="exampleInputEmail1">Quantity</label>
                <input type="number" class="form-control" value={quantity} onChange={handleChange('quantity')} />

            </div>


            <div class="form-group">
                <label >Shiping</label>
                <select class="form-control" onChange={handleChange('shiping')} >
                    <option value="0"> No</option>
                    <option value="1"> Yes</option>
                </select>
            </div>


            <div class="form-group">
                <label className="btn btn-secondary">
                    <input type="file" name="photo" accept="image/*" onChange={handleChange('photo')} />
                </label>

            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>

    )




    return (
        <Layout
            title="Add a new product"
            description={`G'day ${user.name}, ready to add a new category?`}
        >
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    {newPostForm()}
                </div>
            </div>

        </Layout>
    )
}

export default AddProduct
