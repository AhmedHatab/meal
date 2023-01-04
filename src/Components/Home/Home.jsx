import React from "react";
import './Home.css';

function Home() {
  return (
    <>
    <section id="home_sec1">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators ">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner ">
          <div className="carousel-item active " data-bs-interval="2000">
            <img src={require('../../images/img03.png')} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block   ">
              <h2>We Serve The Test You Love &#128525;</h2>
              <p>  This is a of restaurant which typically serves food and
              drinks,in addition to light refreshment such as baked goods or
              snacks.The term comes from the word meaning food.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src= {require('../../images/img02.png')} className=" d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block ">
              <h2>We Serve The Test You Love &#128525;</h2>
              <p>  This is a of restaurant which typically serves food and
              drinks,in addition to light refreshment such as baked goods or
              snacks.The term comes from the word meaning food.</p>
            </div>
          </div>
          <div className="carousel-item" >
            <img src={require('../../images/img01.png')} className=" d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h2>We Serve The Test You Love &#128525;</h2>
              <p>  This is a of restaurant which typically serves food and
              drinks,in addition to light refreshment such as baked goods or
              snacks.The term comes from the word meaning food.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
    <section id="home_sec2" className="container py-5">
      <div className="row g-5 w-100">
        <div className="col-md-6">
          <div>
            <h2 className="fs-1 fw-bold  ">Do You Have Any Dinner Plan Today? Reserve Your Table</h2>
            <p className="py-3 ">Make online reservation, read restaurant reviews from diners, and earn points towards free meals Open Table is a real-time online reservation.</p>
            <button className="btn btn_color rounded-pill">Make Reservation</button>
          </div>
        </div>
        <div className="col-md-6">
          <img className="card-img img-fluid rounded-3" src={require('../../images/img04.png')} alt="" />
        </div>
      </div>


    </section>
    <section id="home_sec3" className="container ">
      <h2 className="py-3 pb-4">What Our Customer Says?</h2>
      <div className="row g-3">
        <div className="col-md-4">
        <div className="card">
          <div className="card-body">
              <p className="card-text">&#65282;This place is great! Atmosphere is chill and cool but the staff is also really friendly. They know what they are doing and what they are talking about, and you can tell making the customers happy is their main priority.&#65282;</p>
              </div>
              <img src={require('../../images/say1.png')} className=" card-img-top" alt="..."/>
              <h4 className="ps-3 pt-1">Dave Robert</h4>
          </div>
        </div>
        <div className="col-md-4">
        <div className="card">
          <div className="card-body">
              <p className="card-text">&#65282;This place is great! Atmosphere is chill and cool but the staff is also really friendly. They know what they are doing and what they are talking about, and you can tell making the customers happy is their main priority.&#65282;</p>
              </div>
              <img src={require('../../images/say2.png')} className=" card-img-top" alt="..."/>
              <h4 className="ps-3 pt-1">William Theodore</h4>
          </div>
        </div>
        <div className="col-md-4">
        <div className="card">
          <div className="card-body">
              <p className="card-text">&#65282;This place is great! Atmosphere is chill and cool but the staff is also really friendly. They know what they are doing and what they are talking about, and you can tell making the customers happy is their main priority.&#65282;</p>
              </div>
              <img src={require('../../images/say3.png')} className="card-img-top" alt="..."/>
              <h4 className="ps-3 pt-1">Oliver Henry</h4>
          </div>
        </div>
      </div>
    </section>
    
    </>
  );
}

export default Home;

