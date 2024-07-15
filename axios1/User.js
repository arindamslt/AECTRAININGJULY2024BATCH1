import React from 'react'
import axios from 'axios'
import { useState } from 'react'
function User() {
    let[user,setUser]=useState([]);
    let[data,setData]=useState([]);
    const filterData=(event)=>{
        if(event.target.value==='male')
        {
            setUser(data.filter((usr)=>usr.gender==='male'));
        }
        else if(event.target.value==='female')
        {
            setUser(data.filter((usr)=>usr.gender==='female'));
        }
        else{
           setUser(data);
        }
    }
    const getData=()=>{
        axios.get("https://randomuser.me/api/?results=20")
        .then((res)=>{
            console.log(res.data.results);
            setUser(res.data.results);
            setData(res.data.results);
        })
        .catch((error)=>{
            console.log(error);
            alert("SOMETHING WRONG ON FETCHING DATA");
        })
    }
  return (
    <div>
      <h2>USER DETAILS</h2>
      <p><b>USER DETAILS INFORMATION WILL GET FROM EXTERNAL SOURCES USING AXIOS</b></p>
      <button onClick={getData}>GET USER</button>
        {
            user.length>0 &&(
                <div>
                    <h2>FITER DATA</h2>
                    <input type="radio" name="gender" value="all" defaultChecked onChange={filterData}/>ALL
                    <input type="radio" name="gender" value="male" onChange={filterData}/>MALE
                    <input type="radio" name="gender" value="female" onChange={filterData}/>FEMALE
                </div>
            )
        }
      
      {
        user.length>0 ?
        <div>
            <table style={{margin:"20px auto"}}>
            <thead cellpadding={10} style={{backgroundColor:"black",color:"white"}}>
                <tr>
                <td>ID</td>
                <td>IMAGE</td>
                <td>NAME</td>
                <td>GENDER</td>
                <td>EMAIL</td>
                <td>CITY</td>
                </tr>
            </thead>
            <tbody>
                
                {
                    user.map((element,index)=>{
                        return(
                            <tr>
                               <td>{index+1}</td> 
                               <td><img src={element.picture.medium} height={80} width={80}/></td>
                               <td>{element.name.first}</td>
                               <td>{element.gender}</td>
                               <td>{element.email}</td>
                               <td>{element.location.city}</td>
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

export default User
