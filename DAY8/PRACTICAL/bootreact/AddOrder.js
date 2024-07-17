import React from 'react'
import { useState } from 'react'
import axios from 'axios';
function AddOrder() {
    let[order,setOrder]=useState({
        oid:"",
        oqty:"",
        price:"",
        cname:""
    })
    
    let[msg,setMsg]=useState("");
    const refreshData=()=>{
        setOrder({
            oid:"",
            oqty:"",
            price:"",
            cname:""
        })
        setMsg("");
    }
    const addData=()=>{
        axios.post("http://localhost:1004/order/add",order)
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
      <h2>ADDING THE ORDER DATA</h2>
      <input type="text" className='form-control' placeholder='ENTER ORDER ID' 
      value={order.oid} onChange={(event)=>{
        setOrder({
            ...order,
            oid:event.target.value
        })
      }}
      />
    <input type="text" className='form-control' placeholder='ENTER QUANTITY' 
      value={order.oqty} onChange={(event)=>{
        setOrder({
            ...order,
            oqty:event.target.value
        })
      }}
      />
     <input type="text" className='form-control' placeholder='ENTER PRICE' 
      value={order.price} onChange={(event)=>{
        setOrder({
            ...order,
            price:event.target.value
        })
      }}
      />
      <input type="text" className='form-control' placeholder='ENTER CUSTOMER NAME' 
      value={order.cname} onChange={(event)=>{
        setOrder({
            ...order,
            cname:event.target.value
        })
      }}
      />
      <button className='btn btn-outline-primary' onClick={addData}>ADD ORDER</button>
      <button className='btn btn-outline-dark' onClick={refreshData}>REFRESH DATA</button>
      <h2>{msg}</h2>
    </div>
  )
}

export default AddOrder
