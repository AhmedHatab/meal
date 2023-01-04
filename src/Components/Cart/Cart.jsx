import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { mealContext } from '../Context/Store'
import Swal from 'sweetalert2'
function Cart() {
  let {cartData} =useContext(mealContext)
  let {decCounter} =useContext(mealContext)
  let Navigate =useNavigate()

  let  [dataMeals ,setDataMeals] =useState(localStorage.getItem('dataBuy') === null ? []:[...JSON.parse(localStorage.getItem('dataBuy'))])
  let [totalPrice,setTotalPrice] =useState(Number(localStorage.getItem('price')))

      // get recipe cart counter 
   let incMeal = (e)=>{
      if(localStorage.getItem(`countMeal${e.target.name}`) === null){
        localStorage.setItem(`countMeal${e.target.name}`,1)  
      }
      let countMeal = Number(localStorage.getItem(`countMeal${e.target.name}`))
       countMeal ++;
       localStorage.setItem(`countMeal${e.target.name}`,countMeal)  
       document.getElementById(e.target.name).innerHTML= localStorage.getItem(`countMeal${e.target.name}`)
     
   }

   let decMeal = (e)=>{
      if(localStorage.getItem(`countMeal${e.target.name}`) === null){
        localStorage.setItem(`countMeal${e.target.name}`,1)  
      }
      if(Number(localStorage.getItem(`countMeal${e.target.name}`)) >1){
      let countMeal = Number(localStorage.getItem(`countMeal${e.target.name}`))
       countMeal --
       localStorage.setItem(`countMeal${e.target.name}`,countMeal) 
      document.getElementById(e.target.name).innerHTML= localStorage.getItem(`countMeal${e.target.name}`)
    
      }
   }


    //delete meal from cart
  let deleteMeal =async(e ,id)=>{
    if (cartData.length === 0 ) {
      cartData = [...JSON.parse(localStorage.getItem('dataBuy'))]  
    }
    localStorage.setItem('price',Number(localStorage.getItem('price')) - Number(e.target.name) * Number(localStorage.getItem(`countMeal${id}`)=== null?1:localStorage.getItem(`countMeal${id}`)))  
    setTotalPrice(localStorage.getItem('price') )
    localStorage.removeItem(`countMeal${id}`)
    cartData.splice(e.target.value , 1);
    localStorage.setItem('dataBuy',JSON.stringify(cartData))
    setDataMeals(JSON.parse(localStorage.getItem('dataBuy'))) 
    function a() { Navigate('/home') }
    function b() { Navigate('/cart')}
     await a()
     b()
  }
   // edit  total price  in cart
  let incPrice =(e)=>{
     localStorage.setItem('price',Number(localStorage.getItem('price')) + Number(e.target.value))  
     setTotalPrice(localStorage.getItem('price') )
  }
  let decPrice =(e)=>{
    if(Number(localStorage.getItem(`countMeal${e.target.name}`)) >1){
      localStorage.setItem('price',Number(localStorage.getItem('price')) - Number(e.target.value))  
      setTotalPrice(localStorage.getItem('price') )
    }

  }

  let confirmOrder =()=>{
    Swal.fire({
      title: 'Your Order is Successfully',
      confirmButtonText: 'continue shopping',
    
    }).then((result) => {
      if (result.isConfirmed) {
        Swal(Navigate('/menu'))
      } 
    })

  }

  return (
    <>
   {dataMeals == null ? dataMeals =[]: true}
        <div className="container  mt-5 pt-5">
        
          { dataMeals.length !==0 ?   
              <>
            
             { dataMeals.map((meal ,index)=>{
                return (
                  <>
                 <div key={index} className="card  mb-3 mx-auto " style={{maxWidth: '540px'}}>
                  <div className="row gap-2  justify-content-center text-center">
                      <div className="col-md-4 py-2">
                        <img src={meal.img} className="img-fluid rounded-3" width={'70px'} alt="..." />
                        <div>
                          <h3 className='fs-6 py-1'>{meal.title}</h3>
                          <p className="text-danger">price ${meal.price}</p>
                        </div>
                      </div>
                      <div className="col-6 col-md-3 d-flex justify-content-center">
                        <div className="d-flex justify-content-center align-items-center gap-1 ">
                          <button name={meal.id} value={meal.price} onClick={(e)=>{decPrice(e) ;decMeal(e)}} className='btn bg-info fas fa-minus'></button>
                          <p id={meal.id} className="card-text btn btn-info m-0"> {localStorage.getItem(`countMeal${meal.id}`)!== null?localStorage.getItem(`countMeal${meal.id}`):1}</p>
                          <button name={meal.id} value={meal.price}  onClick={(e)=>{incPrice(e); incMeal(e)}}  className='btn bg-info fas fa-plus'></button>
                        </div>
                      </div>
                      <div className=" my-3 my-md-0  col-md-3">
                        <div className="d-flex justify-content-center align-items-center h-100">
                          <button value={index} name={meal.price} onClick={(e)=> {deleteMeal(e ,meal.id); decCounter()} } className='btn btn-danger'>Delete</button>
                        </div>
                      </div>
                  </div>
                </div> 
                  
                  </>
                )     
              })}
              <div className='text-center p-3 d-md-flex justify-content-between align-items-center mx-auto ' style={{maxWidth: '540px'}}>
                <div className='text-danger h5'> Total Price : <span className='text-black'>$ {totalPrice}</span></div>
                <button onClick={()=>confirmOrder()} className='btn btn-success my-3 rounded-pill' >Confirm Order</button>
              </div>
              </>
                :          
                <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h5>Cart</h5>
                    </div>
                    <div className="card-body cart">
                      <div className="col-sm-12  text-center">
                        <img src={require('../../images/emptycart.png')} height={'170px'} />
                        <h3 className='h2 '>Your Cart is Empty</h3>
                        <h4>Add something to make me happy :)</h4>
                        <a  onClick={(e)=>{Navigate('/menu')}} className="btn btn-success  m-3" >continue shopping</a>
                      </div>
                    </div>
                  </div>
                </div>
                </div> 
                          
        } 
      </div>

    </>
    
  )
}

export default Cart