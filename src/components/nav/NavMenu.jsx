import React from 'react'
import { TbSmartHome } from "react-icons/tb";
import { GoInfo } from "react-icons/go";
import { TfiGallery } from "react-icons/tfi";
import { TbUsers } from "react-icons/tb";
import { BiDonateHeart } from "react-icons/bi";
import { LuCircleUser } from "react-icons/lu";
import { Link } from 'react-router-dom';

const NavMenu = ({revealSetter}) => {
    const navOptions = [
        {
            label: "home",
            icon: TbSmartHome,
            path: "/"
        },
        {
            label: "about",
            icon: GoInfo,
            path: "/about"
        },
        {
            label: "gallery",
            icon: TfiGallery,
            path: "/gallery"
        },
        {
            label: "member",
            icon: TbUsers,
            path: "/member"
        },
        {
            label: "donate",
            icon: BiDonateHeart,
            path: "/donate"
        }
    ]
  return (
    <div className='nav-menu grid grid-cols-3 place-items-center text-white gap-y-8 p-5'>
        {
            navOptions.map(({label, icon: Icon, path}) => (
                <Link onClick={()=> revealSetter(false)} to={path} key={label} className="w-fit h-fit flex flex-col items-center">
                    <Icon className="text-[1.5rem]" />
                    <p className='text-[0.75rem] capitalize'>{label}</p>
                </Link>
            ))
        }
    </div>
  )
}

export default NavMenu