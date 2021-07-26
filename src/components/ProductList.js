import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

export default props => {
    const { removeFromDom } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
    }
    return(
        <div>
            {props.product.map((product, index) => {
                return <p key={index}><Link to={"/product/" + product._id}>{product.title}</Link></p>
            })}
            <button onClick={(e) => {deleteProduct(props.product.id)}}>Delete</button>
        </div>
    )
}