import React from 'react'
import Logo from '../logo/Logo'
import { GrAppsRounded } from "react-icons/gr";
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="nav-container w-full fixed z-[999] bottom-[5px] left-0 flex justify-center">
          <div className='navbar w-[95vw] flex justify-between items-center py-3 px-5 bg-[#000000e7] backdrop-blur-xl rounded-full'>
        <div className="logo">
            <NavLink to="/">
                <Logo color="white"/>
            </NavLink>
        </div>
        <div className="right-nav text-[1.5rem] text-white">
            <GrAppsRounded/>
        </div>
    </div>
    </div>
  )
}

export default Nav