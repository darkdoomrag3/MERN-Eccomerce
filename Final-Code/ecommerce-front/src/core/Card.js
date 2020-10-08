import React from 'react'
import { Link } from 'react-router-dom'
import ShowImage from './ShowImage'
import moment from 'moment'

const Card = ({ product, showViewProductButton = true, showAddToCartButton }) => {

    const showViewButton = showViewProductButton => {
        return (
            showViewProductButton && (
                <Link to={`/product/${product._id}`} className="mr-2">
                    <button className="btn btn-outline-primary mt-2 mb-2 card-btn-1">View Product</button>
                </Link>
            )
        );
    };



    const showAddToCartBtn = showAddToCartButton => {
        return (
            showAddToCartButton && (
                <button className="btn btn-outline-warning mt-2 mb-2 card-btn-1  ">
                    Add to cart
                </button>
            )
        );
    };


    const showStock = quantity => {
        return quantity > 0 ? (
            <span className="badge badge-primary badge-pill">In Stock </span>
        ) : (
                <span className="badge badge-primary badge-pill">Out of Stock </span>
            );
    };

    return (

        <div className="card">
            <div className="card-header name">
                {product.name}
            </div>

            <div className="card-body">
                <ShowImage item={product} url="product" />
                <p className="lead mt-2">
                    {product.description.substring(0, 100)}
                </p>


                <p className="black-9">${product.price}</p>
                <p className="black-8"> Category : {product.category && product.category.name} </p>

                <p className="black-8"> Added on {moment(product.createdAt).fromNow()}  </p>

            </div>


            {showStock(product.quantity)}

            {showViewButton(showViewProductButton)}

            {showAddToCartBtn()}


        </div>


    )
}

export default Card
