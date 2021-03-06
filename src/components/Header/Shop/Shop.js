import React, { useState } from 'react';
import fakeData from '../../../fakeData';
import Product from '../../Product/Product';
import Cart from '../../Cart/Cart'
// import Cart from '../Cart/Cart';

// import {useState} from "react";
import './Shop.css';

const Shop = () => {
    const first10 = fakeData.slice(0,10)
    const [products, setProducts] = useState(first10)
    const [cart , setCart] = useState([]);

   const handleAddProduct = (products) =>{
       console.log('Product  Added',products);
       const newCart =[...cart , products];
       setCart(newCart)
   }
    
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(pd=><Product
                        handleAddProduct = {handleAddProduct}
                         products={pd}>
                         </Product>)
                    
                }
            </div>
            <div className="cart-container">
                <Cart cart ={cart}></Cart>
            </div>
            
           
            
        </div>
    );
};

export default Shop;