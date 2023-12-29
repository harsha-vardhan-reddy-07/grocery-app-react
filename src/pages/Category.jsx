import React, { useEffect, useState } from 'react'
import { CiSquareMinus, CiSquarePlus } from 'react-icons/ci'
import '../styles/CategoryPage.css'
import {products} from '../Data'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import {addToCart, increaseQuantity, reduceQuantity} from '../DataStore/cartSlice'

const Category = () => {

const {id} = useParams();

const cartProducts = useSelector(state => state.cartItems);

const [keys, setKeys] = useState(Object.keys(cartProducts));

  useEffect(() => {
    console.log(keys.includes('4'));
    setKeys(Object.keys(cartProducts));
  }, [cartProducts])


const dispatch = useDispatch();

const addToCartHandler = (input) =>{
    dispatch(addToCart(input));
} 

const [displayProducts, setDisplayProducts] = useState(products.filter((product)=> product.category.includes(id)));

const handleFilter = (value) =>{
  if (value === "popularity") {
    setDisplayProducts(products.filter((product)=> product.category.includes(id)))
  } else if (value === "price") {
    setDisplayProducts(products.filter((product)=> product.category.includes(id)).sort((a,b)=> a.price - b.price))
  }
}

  return (
    <div className='category-page'>
        <div className="category-head">
          <h2>{id}</h2>
          <div className="category-filters">
            <label htmlFor="sort">Sort by:</label>
            <select name="sort" id="sort" onChange={(e)=> handleFilter(e.target.value)} >
              <option value="popularity">Popularity</option>
              <option value="price">Price</option>
            </select>
          </div>
        </div>

        <div className="category-products">

              {displayProducts.map((product) => (

                  <div className="product">
                    
                    <div className="product-image">
                      <img src={product.imageSrc} alt="product" />
                    </div>

                    <div className="product-details">
                      <h4>{product.name}</h4>
                      <p className="price">&#8377;{product.price}</p>
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
              ))}

        </div>

    </div>
  )
}

export default Category