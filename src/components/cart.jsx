import React, { useEffect, useState } from 'react'
import '../styles/cart.css'

const Cart = ({cart,setCart,handleChange}) => {
  const [price,setPrice] = useState(0) 
  // used for changing state of total price in the cart

  const handleRemove=(id)=>{
    const arr = cart.filter((item)=>item.id !== id);
    setCart(arr);
  }
  // Logic for removal of a item from the cart

  const handlePrice =()=>{
    let ans = 0;
    cart.map((item)=>{
      ans+= item.amount*item.price;
    })
    setPrice(ans);
  }
//Logic for calculating the total price

  useEffect(()=>{
    handlePrice();
  })
// this is used for rendering the total price again nd again

  return (
    <article>
      {
        // the cart array recieved is mapped to show all the cart items
        cart.map((item) => (
          <div className="cart_box" key={item.id}>
            <div className="cart_img">
              <img src={item.img} />
              <p>{item.title}</p>
            </div>
            <div>
              {/* logic written in app.js */}
              <button onClick={()=>handleChange(item,+1)}>+</button>      
              <button onClick={()=>handleChange(item,-1)}>-</button>
            </div>
            <div>
              {/* logic written at code no. 8 */}
              <span>Rs.{item.price}</span>
              <button onClick={()=>handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))
      }
      <div className="total">
        <span>Total Price of your cart</span>
        <span> Rs - {price}</span>
      </div>
    </article>
  )
}

export default Cart
