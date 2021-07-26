import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';

export default () => {

const [product, setProduct] = useState([]);
const [loaded, setLoaded] = useState(false);
const [refresh, setRefresh] = useState(true);
useEffect(() => {
    axios.get('http://localhost:8000/api/product/all')
    .then(res => {
        setProduct(res.data);
        setLoaded(true);
    })
    .catch (err => console.log("Error: ", err))
}, [refresh])



    return (
        <>
        <ProductForm/>
        <hr/>
        <div>
            <h1>All Products</h1>
        </div>
        {loaded && <ProductList product ={product} setRefresh={setRefresh} refresh={refresh}/>}
        </>
    )
}