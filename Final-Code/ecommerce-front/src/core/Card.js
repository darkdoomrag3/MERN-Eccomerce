import React from 'react'
import { Link } from 'react-router-dom'
import ShowImage from './ShowImage'


const Card = ({ product }) => {
    return (
        <div className="col-4 mb-3">
            <div className="card">
                <div className="card-header">
                    {product.name}
                </div>

                <div className="cart-body">

                    <ShowImage item={product} url="product " />
                    {product.description}

                    <p>${product.price}</p>
                </div>

                <Link to='/'>
                    <button className='btn btn-outline-primary mt-2 mb-2 mr-2 '>
                        View Product
                    </button>

                    <button className='btn btn-outline-warning mt-2 mb-2'>
                        Add to card
                    </button>

                </Link>


            </div>

        </div>
    )
}

export default Card
