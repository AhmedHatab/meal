import React from 'react'

function Chefs() {
  return (
    <>
     <section className="container  pt-5 mt-5">
      <h2 className="py-3 pb-4">Meet Our Chefs</h2>
      <div className="row g-3">
        <div className="col-md-4">
        <div className="card">
              <img src={require('../../images/chef1.png')} className=" card-img-top" alt="..."/>
              <h4 className="ps-3 pt-1 text-center">Dave Robert</h4>
          </div>
        </div>
        <div className="col-md-4">
        <div className="card">
              <img src={require('../../images/chef2.png')} className=" card-img-top" alt="..."/>
              <h4 className="ps-3 pt-1 text-center">William Theodore</h4>
          </div>
        </div>
        <div className="col-md-4">
        <div className="card">
              <img src={require('../../images/chef3.png')} className="card-img-top" alt="..."/>
              <h4 className="ps-3 pt-1 text-center">Oliver Henry</h4>
          </div>
        </div>
      </div>
    </section>
    </>
    
  )
}

export default Chefs