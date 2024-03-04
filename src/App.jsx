import axios from "axios";
import React, { useState } from 'react'
import { Link, } from 'react-router-dom';function App() {
  const[datas,setdata]=useState('')
  let handlechange=(event)=>{
    setdata({...datas,[event.target.name]:event.target.value})
      console.log(datas);

  }
  let callingsubmit=async(event)=>{
    event.preventDefault()
    console.log(datas,"afterSubmit");
  
    let response=await axios.post('http://localhost:4000/insert',datas)
    console.log(response);
  }



  return (
    <div>
      <h1>signup</h1>
      <form onSubmit={callingsubmit}>
        <input type="text" onChange={handlechange} name='username' />
        <input type=" text"onChange={handlechange} name='password' />
        <input type="submit" />
        </form>
        <Link to= {'/'}>login</Link>

    </div>
  )
}

export default App