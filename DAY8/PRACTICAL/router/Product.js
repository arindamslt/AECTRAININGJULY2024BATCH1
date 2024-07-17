import React from 'react'
import "./Product.css"
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
function Product() {
  return (
    <div className='prdMContainer'>
        <div className='prdLContainer'>
         <Link to="elec">ELECTRONICS</Link>
         <Link to="jwe">JEWELLERY</Link>
         <Link to="gr">GARMENTS</Link>
         <Link to="rtl">RETAILS</Link>
        </div>
        <div className='prdRContainer'>
        <Outlet/>
        </div>
      
    </div>
  )
}

export default Product
