import React from 'react'
import { useState } from 'react'
import { useRef } from 'react';
function UseRefDemo() {
    let[state,setState]=useState("USEREF APPLICATION");
    //var city="DELHI";
    var city=useRef("DELHI");
    const updateState=()=>{
        setState("WELCOME TO REACT JS APPLICATION");
    }
    const updateCity=()=>{
        city.current="HYDRABAD";
    }
    const printCity=()=>{
        console.log(city.current);
    }
  return (
    <div>
      <h2>{state}</h2>
      <button onClick={updateState}>UPDATE STATE</button>&nbsp;&nbsp;
      <button onClick={updateCity}>UPDATE CITY</button>&nbsp;&nbsp;
      <button onClick={printCity}>PRINT CITY</button>
    </div>
  )
}

export default UseRefDemo
