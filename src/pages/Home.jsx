import React from 'react'
import Hero from '../components/Hero'
import HomeCategories from '../components/HomeCategories'
import HomeProducts from '../components/HomeProducts'
import '../styles/Home.css'

const Home = () => {
  return (
    <div className='home-page'>
        <Hero />
        <HomeCategories />
        <HomeProducts />
    </div>
  )
}

export default Home