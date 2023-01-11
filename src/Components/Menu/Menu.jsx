import React, { useContext, useEffect } from 'react'
import { mealContext } from '../Context/Store';
import Swal from 'sweetalert2'
import './Menu.css'

function Menu() {
  
  let {getRecipe} =useContext(mealContext);
  let {recipes} =useContext(mealContext);
  let {incCounter} =useContext(mealContext);
  let {cartItem} =useContext(mealContext);
  let {foodAPI} =useContext(mealContext);
  let {recipeName} =useContext(mealContext);


      //use effect to call API
      useEffect(() => {
        foodAPI()
        if (localStorage.getItem('price') == null){
          localStorage.setItem('price',0)
         }
    },[recipeName])
// get total price
 let countMeal =(p)=>{
  localStorage.setItem('price',Number(localStorage.getItem('price')) + p )
 }
 
  const doConfirm = ()=>{
    Swal.fire({ 
      icon: 'success',
      timer: 1900,
      position: 'top-end',
      showConfirmButton: false,
      showClass: {
      popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })

  }
  

  return (
    <>
        <section id='menu' className='container pb-5 position-relative'>
          <div>
            <nav>
              <div className="nav nav-tabs mb-3 " id="nav-tab" role="tablist">
                <button  onClick={(e)=>{getRecipe(e)}} className="nav-link " id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">chicken</button>
                <button  onClick={(e)=>{getRecipe(e)}} className="nav-link "  data-bs-toggle="tab" type="button" role="tab" aria-controls="nav-pizza" aria-selected="false">pizza</button>
                <button  onClick={(e)=>{getRecipe(e)}} className="nav-link "  data-bs-toggle="tab" type="button" role="tab" aria-controls="nav-fish" aria-selected="false">fish</button>
                <button  onClick={(e)=>{getRecipe(e)}} className="nav-link "  data-bs-toggle="tab" type="button" role="tab" aria-controls="nav-fries" aria-selected="false">fries</button>
                <button  onClick={(e)=>{getRecipe(e)}} className="nav-link "  data-bs-toggle="tab" type="button" role="tab" aria-controls="nav-chocolate" aria-selected="false">chocolate</button>
              </div>
            </nav>
        </div>
       
            <div className="row ">
            {recipes.length !==0 ?
              <>
                {recipes.map((recipe,id)=>{
                  return (
                    <div className='col-md-4 mb-3  '>
                      <div key={id}  className="card p-2 mealCard shadow">
                          <img  className='img-fluid card-img-top' src={recipe.image_url} alt="" />
                          <h4 className="text-center">{recipe.title}</h4>
                          <div className='d-flex justify-content-between container '>
                            <div className='btn_color rounded-3 p-2 mb-3'>{`Price ${id+9}$`}</div>
                            <button id={id} className='bg-transparent border-0'onClick={(e)=>{incCounter() ;cartItem(e); countMeal(id+9); doConfirm() }}> <i id={id} className=" fs-4 fa-solid fa-cart-plus "></i></button>
                          </div>
                      </div>
                    </div>
                    )       
                })}
              </>
                :                 
            <div className='reload'>
            <span className='loader'></span>
            </div>
       }
            </div>
        </section>
    
    </>    
  )
}

export default Menu


