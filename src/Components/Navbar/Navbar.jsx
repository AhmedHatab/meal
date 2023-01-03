import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { mealContext } from '../Context/Store'
import './Navbar.css'

function Navbar() {
  let {counterRecipe} =useContext(mealContext)
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top btn_color container rounded-5 px-2 ">
        <div className="container">
          <Link className="navbar-brand fw-bold" to='home'> <i className="fa-solid fa-burger"></i> Meal</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='home' >Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="menu">Menu</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="chefs">Chefs</Link>
              </li>
            </ul>
            <ul className='cart_list'>
            <li className="nav-item">
                <Link className="nav-link active d-flex flex-column-reverse align-items-end  " aria-current="page" to="cart"> 
               <div>Cart <i className="fa-solid fa-cart-plus "></i></div>  
                 <span id='badge' className=" text-bg-primary ">{counterRecipe}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>

  )
}

export default Navbar