import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20">
      {/* Left side */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px] animate-fadeIn">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-extrabold leading-tight lg:leading-tight md:leading-tight animate-slideUp">
          Book Appointment <br /> With Trusted Doctors
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-white text-m font-light">
          <img className="w-28" src={assets.group_profiles} alt="Group Profiles" />
          <p className="font-bold">
            Simply browse through our extensive list of trusted doctors,
            <br className="hidden sm:block" />
            schedule your appointment hassle-free.
          </p>
        </div>
        <a
          href="#speciality"
          className="font-bold flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300"
        >
          Book appointment <img className="w-3" src={assets.arrow_icon} alt="Arrow" />
        </a>
      </div>
      {/* Right side */}
      <div className="md:w-1/2 relative flex items-center justify-center bg-primary rounded-lg overflow-hidden">
        <div className="absolute w-full h-full bg-primary"></div>
        <img
          className="w-full md:absolute bottom-0 h-auto rounded-lg shadow-custom animate-scaleIn z-10"
          src={assets.header_img}
          alt="Header"
        />
      </div>
    </div>
  );
};

export default Header;
