import axios from 'axios';
import React from 'react'
import { createContext ,useState } from 'react';

export let mealContext = createContext({})

function MealContextProvider(props) {


    let [cartData ,setCartData] =useState(localStorage.getItem('dataBuy') === null ? []:[...JSON.parse(localStorage.getItem('dataBuy'))])
  
    
    let cartItem = (e)=>{
        let newOrder ={
            id:Math.random() * 100,
            img:recipes[e.target.id].image_url,
            title:recipes[e.target.id].title,
            price:Number(e.target.id) + 9
        }
       cartData.push(newOrder); 
       localStorage.setItem('dataBuy',JSON.stringify(cartData))
       setCartData(cartData);  
      }


    // get recipe cart counter
    if(localStorage.getItem('counter') === null){
         localStorage.setItem('counter',JSON.stringify(0))  
    }
    
    let [counterRecipe ,setCounterRecipe] =useState(localStorage.getItem('counter'));
    let incCounter = ()=>{
         setCounterRecipe(counterRecipe ++);
         setCounterRecipe(counterRecipe); 
         localStorage.setItem('counter',JSON.stringify(counterRecipe))    
    }

    let decCounter = ()=>{
        setCounterRecipe(counterRecipe --);
        setCounterRecipe(counterRecipe);  
        localStorage.setItem('counter',JSON.stringify(counterRecipe))     
    }
    // get name Type of recipe and path it to url
    let [recipeName ,setRecipeName] =useState('chicken');
    let getRecipe =(e)=>setRecipeName(e.target.innerHTML);
    //--------------
    //get recipes from API
    let [recipes ,setRecipes] =useState([])
    let foodAPI = async()=>{
        let {data} = await axios.get(`https://forkify-api.herokuapp.com/api/search?q=${recipeName}`);
        setRecipes(data.recipes);

    }


  return (
    <>
        <mealContext.Provider value={{recipes ,getRecipe ,counterRecipe ,incCounter ,cartItem,cartData ,decCounter ,foodAPI ,recipeName }}>
            {props.children}
        </mealContext.Provider>
    
    </>
   
  )
}

export default MealContextProvider


