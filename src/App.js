import React, { useState } from 'react'
import Navbar from './components/navbar'
import Shop from './components/shop'
import './App.css'
import Cart from './components/cart'

const App = () => {


  const [cart,setCart] = useState([])                
  // for cartitems

  const [warning,setWarning] = useState(false)
  // setting the warning for not adding more than one item in a cart

  const [show,setShow] = useState(true)
  // used for switching between main page or cart page


  const handleClick=(item)=>{
    let isPresent = false;
    cart.forEach((product)=>{
      if(item.id === product.id){
        isPresent = true;
      }
    })
    if(isPresent){
      setWarning(true)
      setTimeout(()=>{
        setWarning(false)
      },2000)
      return;
    }
    setCart([...cart,item])
  }

  // logic for adding items in the cart but not more than one item

  const handleChange =(item,d)=>{
    let ind = -1;
    cart.forEach((data,index)=>{
      if(data.id == item.id){
        ind = index
      }
    });
    const tempArr = cart;
    tempArr[ind].amount+=d;

    if(tempArr[ind].amount === 0){
      tempArr[ind].amount =1
    }
    setCart([...tempArr])
  }

  // logic for increasing/decreasing the amount of cart items in the cart page

  return (
    <div>
      <Navbar size={cart.length} setShow={setShow}/>        
      {/* navigation bar */}

      {
        show ? <Shop handleClick={handleClick}/> : <Cart cart={cart} setCart={setCart} handleChange={handleChange}/> 
      }
      {
        warning && <div className='warning'>Item is already in your cart</div>
      }
    </div>
  )
}

export default App
