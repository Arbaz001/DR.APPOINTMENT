import React from 'react'
import {assets} from '../assets/assets'

const About = () => {
  return (
    <div>
        <div className='text-center text-2xl pt-10 text-gray-500 font-extrabold'>
          <p>ABOUT US</p>
        </div>
        <div className='my-10 flex flex-col md:flex-row gap-12'>
          <img className='w-full md:max-w-[360px] rounded-3xl shadow-lg shadow-primary' src={assets.about_image} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text:sm text-gray-600 font-semibold'>
            <p>Welcome to Dr.Appointment, your trusted partner in managing your healthcare needs conveniently and efficiently. At Dr.appointment , we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
            <p>Dr.Appointment is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Dr.Appointment is here to support you every step of the way.</p>
            <b className='text=gray-800'>Our Vision</b>
            <p>Our vision at Dr.Appointment is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
          </div>
        </div>

        <div className='text-center text-xl mt-8 mb-8 font-extrabold text-gray-500'>
          <p>WHY CHOOSE US</p>
        </div>

        <div className='flex flex-col md:flex-row mb-20 gap-4'>

          <div className='border-2 border-primary px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-200 text-gray-600 cursor-pointer rounded-xl hover:shadow-2xl hover:shadow-primary '>
            <b className='font-extrabold'>EFFICIENCY:</b>
            <p className='font-bold'>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
          </div>
          
          <div className='border-2 border-primary px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-200 text-gray-600 cursor-pointer rounded-xl hover:shadow-2xl hover:shadow-primary'>
            <b className='font-extrabold'>CONVENIENCE:</b>
            <p className='font-bold'>Access to a network of trusted healthcare professionals in your area.</p>
          </div>

          <div className='border-2 border-primary px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-200 text-gray-600 cursor-pointer rounded-xl hover:shadow-2xl hover:shadow-primary'>
            <b className='font-extrabold'>PERSONALIZATION:</b>
            <p className='font-bold'>Tailored recommendations and reminders to help you stay on top of your health.</p>
          </div>

        </div>
    </div>
  )
}

export default About