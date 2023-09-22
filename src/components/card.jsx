import React from 'react'
import '../styles/card.css'

const Card = ({item,handleClick}) => {

    const {title,author,price,img} = item      // destructuring the object "item"
  return (
    // designing a particular card
    <div className="cards">                 
        <div className="image-box">
            <img src={img} alt="image" />
        </div>
        <div className="details">
            <p>{title}</p>
            <p>{author}</p>
            <p>Price -  Rs.{price}</p>
            <button onClick={()=>handleClick(item)}>Add To Cart</button> 
            {/* logic of handleClick written in app.js */}
        </div>
    </div>
  )
}

export default Card
