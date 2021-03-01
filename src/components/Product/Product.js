import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    // console.log(props);
    const {img , name,seller, price, stock} = props.products;
    return (
        <div className='product'>
            <div>
                <img src={img} alt=""/>
            </div>
            <div  className='product-name' >
                <h4 className= 'title-text'>{name}</h4>
                <br/>
                <p><small>By: {seller}</small></p>
                <p>$ {price}</p>
                <p><small>Only  {stock} left in stock - Order soon</small></p>
                <button className = 'main-button'
                onClick ={()=> props.handleAddProduct(props.products)}
                > 
                <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
            </div>
            
        </div>
    );
};

export default Product;