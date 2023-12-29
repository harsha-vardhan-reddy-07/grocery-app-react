import React from 'react'
import '../styles/Footer.css'
import { CiDeliveryTruck } from "react-icons/ci";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { GiReceiveMoney } from "react-icons/gi";


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-body">

          <div className="footer-title-content">
              <h1>SB Grocery...</h1>
              <p>One stop for all your grocery needs!!</p>
          </div>

          <div className="footer-content">
            <h3> <CiDeliveryTruck /> Fast & Free delivery</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos tenetur facere qui culpa sapiente facilis voluptatem </p>
          </div>

          <div className="footer-content">
            <h3><VscWorkspaceTrusted /> Great Quality Assured</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam libero, vel tenetur beatae doloribus ducimus!</p>
          </div>

          <div className="footer-content">
            <h3><GiReceiveMoney /> Best Prices</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam labore fugiat ex nisi nulla perferendis eveniet alias quaerat.</p>
          </div>

        </div>

        <hr />

        <h5> 2023 - &copy; sb-grocery.com - All Rights Reserved </h5> 
    </div>
  )
}

export default Footer