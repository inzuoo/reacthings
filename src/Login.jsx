import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Login() {

   const navigate=useNavigate()
    const[datas,setdata]=useState('')
    let handlechange=(event)=>{
        setdata({...datas,[event.target.name]:event.target.value})
        console.log(datas);
    }
    let handlesubmit=async (e)=>{
        e.preventDefault()
        let response= await axios.post('http://localhost:4000/login',datas)
      console.log(response.data.status);
      if(response.data.status){
        navigate('/home')
       
      }
      else{
     console.log('login error');
      }
    }
  return (
    <div>
<h1>Login</h1>
     
        <form onSubmit={handlesubmit}>
        <input type="text" name='username' onChange={handlechange} />
        <input type="password" name="password" onChange={handlechange} />
        <input type="submit"  />
        </form>
        <Link to= {'/signup'}>Signup</Link>
    </div>

  )
}

export default Login