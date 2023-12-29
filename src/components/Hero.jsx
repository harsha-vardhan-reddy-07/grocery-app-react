import React from 'react'
import '../styles/Hero.css'
import Hero1 from '../images/hero1.png'
import Hero2 from '../images/hero2.png'
import Hero3 from '../images/hero3.png'
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom'

const Hero = () => {

  const navigate = useNavigate();


  return (
    <div className='hero-component'>
        <div className="hero-card-big">

            <div className="hero-card-text">
              <div className="hero-card-discount">
                  <h4>up to 50% off</h4>
                  <span>
                    
                    <div className="card-line"/>
                    <p>Sale</p>

                  </span>
              </div>
              <h3>Chilled.. Drinks for the Hottestt Summer</h3>
              <button onClick={()=> navigate('/category/drink')} >Shop now <FaArrowRightLong /> </button>
            </div>

            <img src={Hero1} alt="" />

        </div>
        <div className="hero-cards-small">
            <div className="hero-card-small">

                <div className="hero-card-text">
                  <div className="hero-card-discount">
                      <h4>up to 55% off</h4>
                  </div>
                  <h3>Crisp and vibrant veggies to freshen up your plate</h3>
                  <button onClick={()=> navigate('/category/vegetables')} >Shop now <FaArrowRightLong /></button>
                </div>

                <img src={Hero2} alt="" />
            </div>
            <div className="hero-card-small">

                <div className="hero-card-text">
                  <div className="hero-card-discount">
                      <h4>up to 30% off</h4>
                  </div>
                  <h3>Sizzling meats to elevate your dining experience...</h3>
                  <button onClick={()=> navigate('/category/meat')} >Shop now <FaArrowRightLong /></button>
                </div>

                <img src={Hero3} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero