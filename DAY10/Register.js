import React from 'react'
import axios from 'axios'
import { useState } from 'react'
function Register() {
  let[register,setRegister]=useState({
    uname:"",
   pass:"",
    nm:""
    
})

let[msg,setMsg]=useState("");
let[errors,setErrors]=useState({
  uname:"",
  pass:"",
  nm:""
})
const validateForm=()=>{
  var isValid=true;
  var newerrors=({
    uname:"",
    pass:"",
    nm:""
  })
  if(register.uname.trim().length<6)
  {
    newerrors.uname="USERNAME MUST BE SIX CHARECTER LONG";
    isValid=false;
  }
  if(register.pass.trim().length<6)
  {
    newerrors.pass="PASWORD MUST BE SIX CHARECTER LONG";
    isValid=false;
  }
  if(register.nm.trim().length<=0)
  {
    newerrors.nm="NAME MUST BE GIVEN "
    isValid=false

  }
  setErrors(newerrors);
  return isValid;
}
const addData=()=>{
  axios.post("http://localhost:1004/reg/add",register)
  .then((res)=>{
      console.log(res.data);
      setMsg(res.data);
  })
  .catch((error)=>{
      console.log(error);
      alert("SOMETHING ERROR IN ADDING DATA");
  })
}
const refreshData=()=>{
    setRegister({
        uname:"",
        pass:"",
        nm:""
        
    })
    setMsg("");
}
  return (
    <div style={{width:"30%",margin:"50px auto"}}>
      <h2>REGISTRATION PROCESS GOING ON</h2>
      <input type="text" className='form-control' placeholder='ENTER USERNAME' 
      value={register.uname} onChange={(event)=>{
        setRegister({
            ...register,
            uname:event.target.value
        })
      }}
      />
      <h4 style={{color:"red"}}>{errors.uname}</h4>
     <input type="password" className='form-control' placeholder='ENTER PASSWORD' 
      value={register.pass} onChange={(event)=>{
        setRegister({
            ...register,
            pass:event.target.value
        })
      }}
      />
      <h4 style={{color:"red"}}>{errors.uname}</h4>
       <input type="text" className='form-control' placeholder='ENTER NAME' 
      value={register.nm} onChange={(event)=>{
        setRegister({
            ...register,
            nm:event.target.value
        })
      }}
      />
      <h4  style={{color:"red"}}>{errors.nm}</h4>
      <button className='btn btn-outline-primary'
      onClick={()=>{
        if(validateForm()===true)
        {
          addData();
        }
      }}>REGISTER</button>
      <button className='btn btn-outline-dark' onClick={refreshData}>REFRESH</button>
      <h2>{msg}</h2>
    </div>
  )
}

export default Register
