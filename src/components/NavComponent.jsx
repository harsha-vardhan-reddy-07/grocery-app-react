import React, { useContext, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { GrCart } from "react-icons/gr";
import '../styles/Navbar.css'
import { GeneralContext } from "../context/GeneralContext";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const NavComponent = () => {

  const navigate = useNavigate();
  const {cartOpen, setCartOpen} = useContext(GeneralContext);
  const [search, setSearch] = React.useState('');

  const handleSearch = () => {
      if (search !== ''){
          navigate(`/category/${search}`);
          setSearch('');
      }
  }

  const products = useSelector(state => state.cartItems);

  console.log(products);

  const keys = Object.keys(products);

  const [cartCount, setCartCount] = React.useState(0);

  useEffect(() => {

    let count = 0;
    keys.forEach((key) => {
        count += products[key].quantity;
    })
    setCartCount(count);
  }, [products])


  return (
   <>

   <div className="navbar">

        <div className="nav__title">
          <h3 onClick={()=> navigate('/')} >SB Grocery..</h3>
        </div>

        <div className="nav__content">

            <div className="nav__search">
              <input type="text" placeholder="Search.." onChange={(e)=> setSearch(e.target.value)} value={search} />
              <IoSearch className="search_icon" onClick={handleSearch} />
            </div>

            <div className="nav__cart" onClick={()=> setCartOpen(true)} >
              <div className="cart_icon_div">
                <GrCart className="cart_icon" />
                <p className="cart__price__title">Cart</p>
                <span className="cart_count">{cartCount}</span>
              </div>
              
            </div>

        </div>




   </div>
   </>
  );
}

export default NavComponent