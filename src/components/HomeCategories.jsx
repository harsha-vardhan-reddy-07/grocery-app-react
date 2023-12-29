import React, { useState } from 'react'
import { GiSlicedBread, GiChocolateBar, GiFruitBowl } from "react-icons/gi";
import { TbMeat } from "react-icons/tb";
import { LuVegan } from "react-icons/lu";
import { BiSolidDrink } from "react-icons/bi";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { TbToolsKitchen } from "react-icons/tb";
import '../styles/HomeCategories.css'
import { useNavigate } from 'react-router-dom';

const HomeCategories = () => {

  const navigate = useNavigate();

  const [viewAll, setViewAll] = useState(false);


  return (
    <div className='home-categories-component' >
          <div className="home-categories-head">
            <h2>Categories</h2>
            {viewAll ?
              <p onClick={() => setViewAll(false)} >View less</p>
            :
              <p onClick={() => setViewAll(true)} >View all categories</p>
            }
          </div>

          <div className="home-categories">

            <div className="home-categories-row">
                <div className="home-category" onClick={()=> navigate("/category/bread")} >
                    <GiSlicedBread className='home-category-icon' />
                    <p>Bread</p>
                </div>

                <div className="home-category" onClick={()=> navigate("/category/meat")}>
                    <TbMeat className='home-category-icon' />
                    <p>Meat</p>
                </div>

                <div className="home-category" onClick={()=> navigate("/category/vegetables")}>
                    <LuVegan className='home-category-icon' />
                    <p>Vegetables</p>
                </div>

                <div className="home-category" onClick={()=> navigate("/category/drink")}>
                    <BiSolidDrink className='home-category-icon' />
                    <p>Drinks</p>
                </div>
            </div>

            {viewAll && (
              <div className="home-categories-row">
                <div className="home-category" onClick={()=> navigate("/category/chocolates")}>
                    <GiChocolateBar className='home-category-icon' />
                    <p>Chocolates</p>
                </div>

                <div className="home-category" onClick={()=> navigate("/category/fruits")}>
                    <GiFruitBowl className='home-category-icon' />
                    <p>Fruits</p>
                </div>

                <div className="home-category" onClick={()=> navigate("/category/kitchen")}>
                    <TbToolsKitchen className='home-category-icon' />
                    <p>Kitchen</p>
                </div>

                <div className="home-category" onClick={()=> navigate("/category/body-care")}>
                    <MdOutlineHealthAndSafety className='home-category-icon' />
                    <p>Body care</p>
                </div>
              </div>
            )}


            
          </div>
    </div>
  )
}

export default HomeCategories