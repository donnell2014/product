import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

export default props => {
    const { removeFromDom, refresh, setRefresh } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                setRefresh(!refresh)
            })
    }
    return(
        <div>
            {props.product.map((product, index) => {
                return (
                <div>
                <p key={index}><Link to={"/product/" + product._id}>{product.title}</Link></p>
                <button onClick={(e) => {deleteProduct(product._id)}}>Delete</button>
                </div>
                )
            })}
            
        </div>
    )
}