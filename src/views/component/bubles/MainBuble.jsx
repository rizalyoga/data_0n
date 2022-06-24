import React from 'react'
import "./MainBuble.scss"

//buttons
import { BsShare } from "react-icons/bs"
import { MdOutlineInsertComment } from "react-icons/md"
import { AiOutlineHeart } from "react-icons/ai"

//image
import userImage from "../../../assets/user/user1.jpg"

const MainBuble = () => {
  return (
    <div className="main-buble-container">
        <div className="main-buble-inner-content">
            <div className="user-profile">
                <div className="pp-user">
                    <img src={userImage} alt="userPP" />
                </div>
                <div className="user-info">
                    <p className='username'>Andre An Laburance</p>
                    <p className='time'>18 Nov</p>
                </div>
            </div>

            <div className="body-status">
                <p className='status-user'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae blanditiis.
                </p>
            </div>

            <div className="button-controls">
                <div className="share-button">
                    <BsShare />
                </div>
                <div className="action-user-buttons">
                    <MdOutlineInsertComment />
                    <AiOutlineHeart />
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainBuble