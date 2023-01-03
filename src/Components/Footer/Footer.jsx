import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
        <footer className='container py-5'>
        <h3> <i className="fa-solid fa-burger"></i>Meal</h3>
          <div className="row py-5">
            <div className="col-md-3">
                <div>
                  <h3 className='w-50'>Subscribe Our Newsletter</h3>
                  <div className='py-4'>
                    <input placeholder="Enter Your Email" type="email" />
                    <button> <i className='fas fa-arrow-right'></i> </button>
                  </div>
                  <div className='d-flex gap-2'> 
                    <a href="#a"> <i className='fab fa-facebook-f'></i> </a>
                    <a href="#a"> <i className='fab fa-twitter'></i> </a>
                    <a href="#a"> <i className='fab fa-instagram'></i> </a>
                    <a href="#a"> <i className='fab fa-youtube'></i> </a>
                  </div>
                </div>

            </div>
            <div className="col-md">
              <div>
                <h3 className='pt-4 pb-2'>Service</h3>
                <ul>
                  <li> <a href="#a">Online Order</a> </li>
                  <li> <a href="#a">Pre-Reservation</a> </li>
                  <li> <a href="#a">24/7 Services</a> </li>
                  <li> <a href="#a">Foodie Place</a> </li>
                  <li> <a href="#a">Super Chefs</a> </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div>
                  <h3 className='pt-4 pb-2'>Quick Links</h3>
                  <ul>
                    <li> <a href="#a">Menu</a> </li>
                    <li> <a href="#a">Reviews</a> </li>
                    <li> <a href="#a">Blogs</a> </li>
                    <li> <a href="#a">Reserve Table</a> </li>
                    <li> <a href="#a">Order Food</a> </li>
                  </ul>
                </div>
            </div>
            <div className="col-md">
              <div>
                    <h3 className='pt-4 pb-2'>About</h3>
                    <ul>
                      <li> <a href="#a">Oue Story</a> </li>
                      <li> <a href="#a">Benefits</a> </li>
                      <li> <a href="#a">Career</a> </li>
                      <li> <a href="#a">Foodie Place</a> </li>
                      <li> <a href="#a">Our Chefs</a> </li>
                    </ul>
                  </div>
            </div>
            <div className="col-md">
              <div>
                      <h3 className='pt-4 pb-2'>Help</h3>
                      <ul>
                        <li> <a href="#a">Contact</a> </li>
                        <li> <a href="#a">Support</a> </li>
                        <li> <a href="#a">FAQ</a> </li>
                      </ul>
              </div>
            </div>


          </div>
        </footer>
    </>
  )
}

export default Footer