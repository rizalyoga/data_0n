import React from 'react'
import "./LeftBuble.scss"

//image
import userImage from "../../../assets/user/user1.jpg"
import newsImage from "../../../assets/gedung.jpeg"

const Leftbuble = () => {
  return (
    <div className="left-buble-container">
        <div className="left-buble-inner-content">
            <div className="user-profile">
                <div className="pp-user">
                    <img src={userImage} alt="userPP" />
                </div>
                <div className="user-info">
                    <p className='time'>18 Nov</p>
                    <p className='username'>Andre An Laburance</p>
                </div>
            </div>

            <div className="body-status">
                <p className='status-user'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae blanditiis.
                </p>
            </div>
        </div>
        <div className="image-news">
            <img src={newsImage} alt="newsImage" />
        </div>
    </div>
  )
}

export default Leftbuble