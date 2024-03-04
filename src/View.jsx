import axios from 'axios'
import React, { useEffect, useState } from 'react'

function View() {
    const[datas,setdata]=useState('')
    useEffect(()=>{
     let  fetchdata=async()=>{
        let response=await axios.get('http://localhost:4000/find')
        console.log(response);
        setdata(response.data)
     }
       fetchdata()
    },[])
  return (
    <div>
      {
        datas.map((item)=>(
          <>
          <h1>{item.username}</h1>
          <h1>{item.password}</h1>
          </>
        ))       
      }
    </div>
  )
}

export default View