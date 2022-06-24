import React from 'react'
import "./Navbar.scss"

// Component
import Clock from 'react-live-clock';
import {IoMdBatteryFull} from "react-icons/io"
import {MdSignalCellular4Bar,MdSignalWifi4Bar} from "react-icons/md"


const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className="navbar-inner-content">
        <MdSignalWifi4Bar />
        <MdSignalCellular4Bar />
        <IoMdBatteryFull />
         <Clock 
            style={{'color': "white"}} 
            className='clock' 
            format={'HH:mm'} 
            ticking={true} 
            timezone={'Asia/Jakarta'} 
        />
        </div>
    </div>
  )
}

export default Navbar