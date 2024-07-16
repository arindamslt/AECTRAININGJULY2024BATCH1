import React from 'react'

function Register({setState}) {
    const changeSt=()=>{
        setState(false);
    }
  return (
    <div style={{width:"30%",margin:"50px auto"}}>
      <h2>REGISTRATION PROCESS</h2>
      <input type="box" className='form-control' placeholder='ENTER THE USERNAME'/>
      <input type="box" className='form-control' placeholder='ENTER THE PASSWORD'/>
      <input type="box" className='form-control'placeholder='ENTER THE NAME'/>
      <input type="box" className='form-control' placeholder='ENTER THE PHONE NUMBER'/>
      <input type="box" className='form-control' placeholder='ENTER THE EMAIL'/>
      <button className='btn btn-outline-dark' style={{marginTop:"10px"}} onClick={changeSt}>REGISTER</button>
    </div>
  )
}

export default Register
