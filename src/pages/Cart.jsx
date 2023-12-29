import React, { useContext, useEffect, useState } from 'react'
import '../styles/Cart.css'
import { GeneralContext } from '../context/GeneralContext'
import { useDispatch, useSelector } from 'react-redux'
import { removeAll, removeFromCart } from '../DataStore/cartSlice'



const Cart = () => {

  const products = useSelector(state => state.cartItems);


  const keys = Object.keys(products);

  const [subTotal, setSubTotal] = useState(0);
  const [shipping, setShipping] = useState(0);


  useEffect(() => {
    setSubTotal(0);
    let total = 0;
    if (products){
      keys.forEach((key) => {
          total += products[key].price * products[key].quantity;
      })
    }
    setSubTotal(total);

    if (subTotal > 500) {
      setShipping(0);
    } else {
      setShipping(45);
    }

    if (keys.length === 0) {
      setSubTotal(0);
      setShipping(0);
    }
  }, [products])




  const dispatch = useDispatch();
  
  const {cartOpen, setCartOpen} = useContext(GeneralContext);

  const [styles, setStyles] = useState({
    transform: 'translateX(-40vw)',
    transition: 'all 1s ease-in-out',
    backgroundCOlor: 'red'
  })

  useEffect(() => {

    console.log(cartOpen)

  }, [cartOpen])


  const handleCheckout = () => {
    alert("order placed!!");

    dispatch(removeAll());

    setTimeout(() => {

      setCartOpen(false);

    }, 2000)
  }
  

  return (
    <>
    <div className="cart-component" style={cartOpen ? styles : {}} >
      <div className="cart-body">

        <div className="cart-header">
            <h3>Shoping Cart</h3>
            <button className='close-btn' onClick={() => setCartOpen(false)}>X</button>
        </div>

        {keys.length > 0 && products ? 

          <div className="cart-items">

            {keys.map((key, index) => (


                <div className="cart-item" key={index}>
                  <div className="cart-item-image">
                    <img src={products[key].imageSrc} alt=""/>
                  </div>
                  <div className="cart-item-info">
                    <h4>{products[key].name}</h4>
                    <p>Qty {products[key].quantity}</p>
                  </div>
                  <div className="cart-item-price">
                    <h4>&#8377; {products[key].price}</h4>
                    <button onClick={() => dispatch(removeFromCart({id: products[key].id}))} >remove</button>
                  </div>


                </div>

            ))}


          </div>
        
        :"cart is empty"}

      </div>
      <div className="cart-checkout">

          <div className="cart-checkout-data">
            <span>
              <h4>Subtotal</h4>
              <h4>&#8377; {subTotal}</h4>
            </span>
            <span>
              <p>Shipping</p>
              <p>&#8377; {shipping}</p>
            </span>
            <span>
              <h3>Total</h3>
              <h3>&#8377; {subTotal + shipping}</h3>
            </span>
          </div>

          <button onClick={handleCheckout} >Checkout</button>

      </div>
    </div>
    </>
  )
}

export default Cart