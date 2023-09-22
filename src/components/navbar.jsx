import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import '../styles/navbar.css'

const Navbar = ({size,setShow}) => {
  return (
    <nav>
        <div className="nav_box">
            <span className='shop_name' onClick={()=>setShow(true)}>  
            {/* shop name     */}
                DxO Shop 
            </span>
            <div className="cart" onClick={()=>setShow(false)}>
              {/* carticon */}
                <span>
                <FontAwesomeIcon icon={faCartShopping} />
                </span>
                <span>{size}</span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
