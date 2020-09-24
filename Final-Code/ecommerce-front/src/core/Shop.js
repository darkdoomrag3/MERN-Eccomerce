import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import Card from './Card';
import { prices } from './fixedPrices'
import { getCategories, getFilterProducts } from './apiCore'
import Checkbox from './Checkbox'
import Radiobox from './Radiobox'



const Shop = () => {

    const [myfilters, setMyfilters] = useState({
        filters: { categories: [], price: [] }
    })
    const [categories, setCategories] = useState([])
    const [error, setError] = useState(false)
    const [limit, setLimit] = useState(6)
    const [skip, setSkip] = useState(0)
    const [filteredResults, setFilteredResults] = useState([])

    const loadFilteredResults = (newFilters) => {

        getFilterProducts(skip, limit, newFilters).then(data => {
            if (data.error) {
                setError(data.error)
            } else {
                setFilteredResults(data.data)
            }
        })

    }




    const init = () => {
        getCategories().then(data => {
            if (data.error) {
                setError(data.error)
            } else {
                setCategories(data)
            }
        });
    };


    useEffect(() => {

        loadFilteredResults(skip, limit, myfilters.filters)
        init()
    }, [])

    const handleFilters = (filters, filterBy) => {

        const newFilters = { ...myfilters }
        newFilters.filters[filterBy] = filters

        if (filterBy === 'price') {
            let priceValues = handlePrice(filters)
            newFilters.filters[filterBy] = priceValues


        }

        loadFilteredResults(myfilters.filters)
        setMyfilters(newFilters)



    }

    const handlePrice = value => {
        const data = prices
        let array = []
        for (let key in data) {
            if (data[key]._id === parseInt(value)) {
                array = data[key].array
            }
        }

        return array;

    }



    return (
        <Layout title="Shop page"
            description="shop every thing"
            className="container-fluid">

            <div className="row">
                <div div className="col-4">
                    <h4>Filter by categories</h4>
                    <ul>

                        <Checkbox categories={categories} handleFilters={filters => handleFilters(filters, "category")} />

                    </ul>

                    <h4>Filter by price range</h4>
                    <ul>

                        <Radiobox prices={prices} handleFilters={filters => handleFilters(filters, "price")} />

                    </ul>


                </div>

                <div className="col-8">
                    <h2 className="mb-4"> محصولات</h2>
                    <div className="row">
                        {filteredResults.map((product, i) => (

                            <Card key={i} product={product} />



                        ))}

                    </div>


                </div>



            </div>

        </Layout>
    )
}

export default Shop
