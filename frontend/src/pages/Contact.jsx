import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className='animate-fadeIn'>
        <div className='text-center text-2xl pt-10 text-gray-500 font-extrabold'>
          <p>CONTACT US</p>
        </div>
        <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
          <img className='w-full md:max-w-[360px] rounded-3xl shadow-lg shadow-primary' src={assets.contact_image} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text:sm text-gray-600 font-semibold'>
            <b className='text=gray-800'>Our OFFICE</b>
            <p>00000 Willms Station <br/> Suite 000, Washington, USA</p>
            <p>Tel: (000) 000-0000<br/>Email: arbazalisgl@gmail.com</p>
            <b className='text=gray-800'>CAREERS AT DR.APPOINTMENT</b>
            <p>Learn more about our teams and job openings.</p>
            <button className= 'text-gray-600  w-[171px] h-[62px] border-2 border-primary rounded-3xl hover:bg-primary  transition-all duration-210 hover:text-white hover:shadow-2xl hover:shadow-primary font-bold '>Expore Jobs</button>
          </div>
        </div>
    </div>
  )
}

export default Contact