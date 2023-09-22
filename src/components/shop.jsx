import React from 'react'
import list from '../list'
import Card from './card'
import '../styles/shop.css'

const Shop = ({handleClick}) => {
  return (
    <section>
      {list.map((item)=>{         // fetching items from the list imported
        return <Card item={item} key={item.id} handleClick ={handleClick}/>     //sending the props to the another component named card
      })}
    </section>
  )
}

export default Shop
