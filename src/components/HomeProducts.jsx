import React, { useEffect, useState } from 'react'
import '../styles/HomeProducts.css'
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";

import {products} from '../Data'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart,reduceQuantity, increaseQuantity } from '../DataStore/cartSlice';

const HomeProducts = () => {

  const cartProducts = useSelector(state => state.cartItems);

  const [keys, setKeys] = useState(Object.keys(cartProducts));

  const [ displayProducts, setDisplayProducts] = useState(products);

  useEffect(() => {
    setDisplayProducts(products);
    console.log(keys.includes('4'));
    setKeys(Object.keys(cartProducts));
  }, [cartProducts])

  const dispatch = useDispatch();

  const addToCartHandler = (input) =>{
      dispatch(addToCart(input));
  } 

  return (
    <div className='home-products-component' >
          <div className="home-products-head">
            <h2>Trending Products</h2>
          </div>

          

          <div className="home-products">

            {displayProducts && displayProducts.map((product, index) => {
              return index < 10 && (

                <div className="home-product product"  >  
                  <div className="product-image">
                    <img src={product.imageSrc} alt="product" />
                  </div>

                  <div className="product-details">
                    <h4>{product.name}</h4>
                    <p className="price">&#8377; {product.price}</p>
                  </div>

                  <div className="product-buttons">

                    {keys.includes(product.id.toString()) ?
                      <div className="product-cart-count-btns">
                        <CiSquareMinus className="product-cart-count-btn" onClick={()=> dispatch(reduceQuantity({id: product.id}))} />
                        <input type="text" disabled value={ cartProducts[product.id] ? cartProducts[product.id].quantity: 0} />
                        <CiSquarePlus className="product-cart-count-btn" onClick={()=> dispatch(increaseQuantity({id: product.id}))} />
                      </div>
                    :
                      <button className='add-to-cart-btn'  onClick={()=> addToCartHandler(product)} >Add to cart</button>
                    }


                  </div>

                </div>
            )})}



          </div>
    </div>
  )
}

export default HomeProducts