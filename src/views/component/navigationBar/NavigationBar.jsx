import React from 'react'
import "./Navigation.scss"
import { useNavigate } from 'react-router-dom'

import {BsArrowLeft} from "react-icons/bs"

const NavigationBar = () => {
  const navigate = useNavigate();
  
  const toLogin = ()=>{
    navigate("/login");
  }

  const logout= ()=>{
    sessionStorage.removeItem("userAuth");
    setTimeout(() => {
      navigate("/login")
    }, 400);
  }

  return (
    <div className='navigation-container'>
        <div className="navigation-inner-content">
            <BsArrowLeft className='back-navigation' onClick={toLogin}/>
            <button className='logout-button' onClick={logout}>Logout</button>
        </div>
    </div>
  )
}

export default NavigationBar