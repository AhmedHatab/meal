import React from 'react'
import './About.css'

function About() {
  return (
    <>
      <section id='about'className='container mt-5'>
        <div className="row ">
          <div className="col-md-6 text-center py-4">
            <img className='img-fluid rounded-2  ' src={require('../../images/about.png')} alt="" />
          </div>
          <div className="col-md-6">
            <div>
              <h2>We Are More Than Multiple Service</h2>
              <p>This is a type of restaurant which typically serves and drinks, in addition to light refreshments such as baked goods or snacks.The term comes from the word meaning food.</p>
              <div className='row'>
                <div className="col-6">
                  <ul className="fa-ul">
                    <li><span className="fa-li"><i className="fa-solid fa-check-circle">  </i></span>Online Order</li>
                    <li><span className="fa-li"><i className="fa-solid fa-check-circle" /></span>24/7 Service</li>
                    <li><span className="fa-li"><i className="fa-solid fa-check-circle" /></span>Clean Kitchen</li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul className="fa-ul">
                    <li><span className="fa-li"><i className="fa-solid fa-check-circle">  </i></span>Pre-Reservation</li>
                    <li><span className="fa-li"><i className="fa-solid fa-check-circle" /></span>Organized Foodie Place</li>
                    <li><span className="fa-li"><i className="fa-solid fa-check-circle" /></span>Super Chefs </li>
                  </ul>
                </div>
              </div>
              <button className='btn btn_color rounded-pill'>About Us</button>
            </div>
          </div>
        </div>

      </section>
        
    </>
    
  )
}

export default About