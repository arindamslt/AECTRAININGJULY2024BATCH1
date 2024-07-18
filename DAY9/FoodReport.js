import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react';
function FoodReport() {
    let[user,setUser]=useState([]);
    //let[data,setData]=useState([]);
   
  
   useEffect(()=>{
    axios.get("http://localhost:1004/food/fetch")
        .then((res)=>{
            console.log(res.data);
            setUser(res.data);
            
        })
        .catch((error)=>{
            console.log(error);
            alert("SOMETHING WRONG ON FETCHING DATA");
        })
   },[])
  return (
    <div>
      <h2>FOOD DETAILS</h2>
      
     
       
      
      {
        user.length>0 ?
        <div>
            <table style={{margin:"20px auto"}}>
            <thead cellpadding={10} style={{backgroundColor:"black",color:"white"}}>
                <tr>
                <td>FOOD ID</td>
                <td>FOOD NAME</td>
                <td>PRICE</td>
                
                </tr>
            </thead>
            <tbody>
                
                {
                    user.map((element,index)=>{
                        return(
                            <tr>
                              
                               <td>{element.fid}</td>
                               <td>{element.fname}</td>
                               <td>{element.fprice}</td>
                              
                            </tr>
                        )
                    })
                }
            </tbody>
            </table>
        </div>:<h2>NO DATA FOUND</h2>
    }
    </div>
    
  )
}

export default FoodReport
