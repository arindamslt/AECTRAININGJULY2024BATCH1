import React from 'react'
import { useState } from 'react'
import axios from 'axios';
function DeleteFood() {
    let[food,setFood]=useState({
        fid:"",
       fname:"",
        fprice:""
        
    })
    
    let[msg,setMsg]=useState("");
    const refreshData=()=>{
        setFood({
            fid:"",
            fname:"",
            fprice:""
            
        })
        setMsg("");
    }
    const deleteData=(fid)=>{
        axios.delete(`http://localhost:1004/food/del/${fid}`)
        .then((res)=>{
            console.log(res.data);
            setMsg(res.data);
        })
        .catch((error)=>{
            console.log(error);
            alert("SOMETHING ERROR IN ADDING DATA");
        })
    }
  return (
    <div style={{width:"30%",margin:"50px auto"}}>
       <h2>DELETE FOOD </h2>
       <input type="text" className='form-control' placeholder='ENTER FOOD ID' 
      value={food.fid} onChange={(event)=>{
        setFood({
            ...food,
            fid:event.target.value
        })
      }}
      />
          <button className='btn btn-outline-primary' 
          onClick={()=>{
            deleteData(food.fid)
          }}>DELETE FOOD</button>&nbsp;&nbsp;
      <button className='btn btn-outline-success' onClick={refreshData}>REFRESH</button>
      <h2>{msg}</h2>
    </div>
  )
}

export default DeleteFood
