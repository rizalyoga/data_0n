import React from 'react'
import "./RightBuble.scss"

//image
import userImage from "../../../assets/user/user2.jpg"
import newsImage from "../../../assets/gedung.jpeg"

const RightBuble = () => {
  return (
    <div className="right-buble-container">
        <div className="image-news">
            <img src={newsImage} alt="newsImage" />
        </div>
        <div className="right-buble-inner-content">
            <div className="user-profile">
                <div className="user-info">
                    <p className='time'>18 Nov</p>
                    <p className='username'>Andre An Laburance</p>
                </div>
                <div className="pp-user">
                    <img src={userImage} alt="userPP" />
                </div>
            </div>

            <div className="body-status">
                <p className='status-user'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae blanditiis.
                </p>
            </div>
        </div>
    </div>
  )
}

export default RightBuble