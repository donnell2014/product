import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link,navigate } from '@reach/router';
export default props => {
    const [product, setProduct] = useState({})
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + props.id)
            .then(res => setProduct(res.data))
    }, [])

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                navigate('/')
            })
    }
    return (
        <div>
            <h1>Title: {product.title}</h1>
            <h1>Price: {product.price}</h1>
            <h1>Description: {product.description}</h1>
            <Link to={"/product/" + product._id + "/edit"}>Edit</Link>
            <button onClick={(e) => deleteProduct(product._id)}>Delete</button>
        </div>
        
    
    )
}

