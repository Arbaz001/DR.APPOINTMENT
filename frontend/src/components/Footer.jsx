import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate =useNavigate();
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm font-normal'>
        {/* left */}
        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6 font-bold'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>

        {/* center */}
        <div>
          <p className='text-xl font-extrabold mb-5  text-gray-700'>COMPANY</p>
           <ul className='flex flex-col gap-2 text-gray-600 font-bold'>
             <li onClick={() => {navigate("/");scrollTo(0, 0);}} className='hover:text-primary transition-all duration-200 cursor-pointer'>Home</li>
             <li onClick={() => {navigate("/about");scrollTo(0, 0);}} className='hover:text-primary transition-all duration-200 cursor-pointer'>About Us</li>
             <li onClick={() => {navigate("/contact");scrollTo(0, 0);}} className='hover:text-primary transition-all duration-200 cursor-pointer'>Contact</li>
             <li>Privacy Policy</li>
           </ul>
        </div>

        {/* right */}
        <div>
          <p className='text-xl font-extrabold mb-5  text-gray-700'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600 font-bold'>
            <li>+1-212-456-7890</li>
            <li>arbazalisgl@gmail.com</li>
          </ul> 
        </div>
      </div>

      {/* copyright */}
      <div>
        <hr />
        <p className='text-gray-600 font-bold text-center my-4'>Copyright © 2024-All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer