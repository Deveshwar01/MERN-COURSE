import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'


function Home() {
    const navigation = useNavigate();

    useEffect(()=>{
        if(!localStorage.getItem('token'))
        {
            navigation('/')
        }
        else{
            navigation('/home')
        }
    },[])


  return (
    <div  style={{backgroundColor:'white'}}>
        <h1>Welcome to Home </h1>
      <p>you will be loged out automatically</p>
    </div>
  )
}

export default Home;