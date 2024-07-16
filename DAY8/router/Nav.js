import React from 'react'
import "./Nav.css"
function Nav() {
  return (
    <div className="navMContainer">
       
      <div className='navLConatiner'>
       <h2>MYAPP</h2>
      </div>
      <div className='navRContainer'>
       <a href="/profile">PROFILE</a>
       <a href="/props">PROPS</a>
       <a href="/pdrd">PDRILLING</a>
       <a href="/user">USER</a>
       <a href="/userinfo">USERINFO</a>
       <a href="/conrnd">CRENDERING</a>
       <a href="/product">PRODUCT</a>
       <a href="/contact">CONTACT US</a>
      </div>
    </div>
  )
}

export default Nav
