import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../logo/Logo'
import { IoIosMail } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 pb-[80px]">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
        
        {/* Left Section - Organization Info */}
        <div className='flex flex-col items-center'>
          <Logo color="white" size="w-[180px]" />
          <p className="mt-2 flex items-center gap-1"><FaLocationDot />রঘুনাথপুর, আমবাগান, দুর্গাপুর - ৭১৩২০৪</p>
          <p className="text-sm mt-2 flex items-center gap-1"><MdLocalPhone className='text-[1.2rem]' /> +91 8670912269 / +91 6295743878</p>
          <p className="text-sm mt-2 flex items-center gap-1"><IoIosMail className='text-[1.2rem]' /> nobojagoronsongho@gmail.com</p>
        </div>

        {/* Center Section - Quick Links */}
        <div>
          <h3 className="text-md font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-yellow-400">About Us</Link></li>
            <li><Link to="/signup" className="hover:text-yellow-400">Join Us</Link></li>
            <li><Link to="/gallery" className="hover:text-yellow-400">Gallery</Link></li>
          </ul>
        </div>

      </div>

      {/* Bottom Section - Copyright */}
      <div className="text-center text-sm border-t border-gray-700 mt-6 pt-4">
        © 2025 Nobojagoron Songho. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer