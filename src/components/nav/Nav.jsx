import React, { useState, useEffect, useRef } from 'react';
import Logo from '../logo/Logo';
import { GrAppsRounded } from "react-icons/gr";
import { NavLink } from 'react-router-dom';
import NavMenu from './NavMenu';

const Nav = () => {
  const [reveal, setReveal] = useState(false);
  const menuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target) && event.target.id!=="nav-hamburger") {
      setReveal(false);
    }
  };

  useEffect(() => {
    if (reveal) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [reveal]);

  return (
    <div className="nav-container w-full fixed z-[999] bottom-[5px] left-0 flex justify-center">
      <div className='navbar w-[95vw] flex justify-between items-center py-3 px-5 bg-[#000000e7] backdrop-blur-xl rounded-full'>
        <div className="logo">
          <NavLink to="/">
            <Logo color="white" />
          </NavLink>
        </div>
        <div className="right-nav w-fit h-fit text-[1.5rem] text-white relative">
          <span onClick={() => setReveal(prev => !prev)} className="block absolute h-full w-full top-0 left-0 on-menu" id='nav-hamburger'></span>
          <GrAppsRounded />
        </div>
      </div>
      <div ref={menuRef} className={`nav-menu-container on-menu absolute w-[94.7vw] h-[166px] ${reveal ? "top-[-170px]" : "top-[-115px] opacity-0"} left-[50%] -translate-x-[50%] bg-[#000000e7] backdrop-blur-xl z-[-1] rounded-2xl transition-all duration-500`}>
        <NavMenu revealSetter={setReveal} />
      </div>
    </div>
  )
}

export default Nav;