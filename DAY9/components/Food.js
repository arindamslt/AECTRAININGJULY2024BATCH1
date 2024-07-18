import React from 'react'
import "./Food.css"
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
function Food() {
  return (
    <div className='prdMContainer'>
        <div className='prdLContainer'>
         <Link to="addf">ADD FOOD</Link>
         <Link to="fr">FOOD REPORT</Link>
         <Link to="delf">DELETE FOOD</Link>
         <Link to="updf">UPDATE FOOD</Link>
         <Link to="serf">SEARCH FOOD</Link>
        </div>
        <div className='prdRContainer'>
        <Outlet/>
        </div>
      
    </div>
  )
}

export default Food
