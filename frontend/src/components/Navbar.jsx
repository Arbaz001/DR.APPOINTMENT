import React, { useState } from 'react'
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate =useNavigate();

    const [showMenu, setShowMenu] = useState(false)
    const [token,setToken] = useState(true)



  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
        <img className='w-44 cursor-pointer' src={assets.logo} alt="" />
        <ul className='hidden md:flex items-start gap-5 font-extrabold'>
            <NavLink to='/'>
                <li className='py-1'>HOME</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink to='/doctors'>
                <li className='py-1'>ALL DOCTORS</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink to='/about'>
                <li className='py-1'>ABOUT</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink to='/contact'>
                <li className='py-1'>CONTACT</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </NavLink>
        </ul>
        <div className='flex items-center gap-4'>
            {
                token
                ? <div className='flex items-center gap-2 cursor-pointer group relative'>
                    <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
                    <img className='w-2.5' src={assets.dropdown_icon} alt="" />
                    <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                        <div className='min-w-48 bg-primary text-gray-900 font-semibold rounded-2xl flex flex-col gap-4 p-4'>
                            <p onClick={()=>navigate('my-appointments')} className='hover:text-white hover:transition-all duration-150 cursor-pointer'>My Appointment</p>
                            <p onClick={()=>navigate('my-profile')} className='hover:text-white hover:transition-all duration-150 cursor-pointer'>My Profile</p>
                            <p onClick={()=>setToken(false) }  className='hover:text-white hover:transition-all duration-150 cursor-pointer'>Logout</p>
                        </div>
                    </div>
                </div>
                :<button onClick={()=>navigate('/login')} className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold rounded-full text-sm px-8 py-3 text-center me-2 mb-2'>Create Account</button>
            }
        </div>
    </div>
  )
}

export default Navbar