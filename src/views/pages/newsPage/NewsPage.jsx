import React, { useEffect } from 'react'
import "./NewsPage.scss"
import { useNavigate } from 'react-router-dom'

// Image
import HeaderPhotos from "../../../assets/car-header.jpeg"

// Component
import Navbar from '../../component/navbar/Navbar'
import NavigationBar from '../../component/navigationBar/NavigationBar'
import MainBuble from '../../component/bubles/MainBuble'
import PostButton from '../../component/buttons/PostButton'
import LeftBuble from '../../component/bubles/LeftBuble'
import RightBuble from '../../component/bubles/RightBuble'


const ChatPage = () => {
  const navigate  = useNavigate();
  
  useEffect(()=> {
    const userAuth = sessionStorage.getItem("userAuth");
    if(!userAuth) {
      navigate("/login")
    }
  }, [navigate]);

  return (
    <div className='container'>
      <Navbar />
      <NavigationBar />
      <div className="button-post">
          <PostButton />
      </div>
      <div className="news-inner-content">
          <h1 className='news-theme'>City News</h1>  

          <div className="news-content">
            <img src={HeaderPhotos} alt="headerimage" />
            <MainBuble />

            <div className="news-buble-container">
              <LeftBuble />
              <RightBuble />
              <LeftBuble />
              <RightBuble />
              <LeftBuble />
              <RightBuble />
            </div>
          </div>
      </div>
    </div>
  )
}

export default ChatPage