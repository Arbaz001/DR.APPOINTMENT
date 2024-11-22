import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const Banner = () => {
    const navigate = useNavigate();
    const { ref, inView } = useInView({
        threshold: 0.1, // Trigger animation when 10% of the component is visible
        triggerOnce: true, // Trigger the animation only once
    });

    return (
        <div
            ref={ref}
            className={`flex bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10 transform transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
            {/* left side */}
            <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
                <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-extrabold text-white'>
                    <p className='mt-4'>Book Appointment</p>
                    <p>With 100+ Trusted Doctors</p>
                </div>
                <button
                    onClick={() => {
                        navigate('/login');
                        scrollTo(0, 0);
                    }}
                    className="relative overflow-hidden bg-white text-blue-500 font-bold py-3 px-8 rounded-full mt-6 border-2 border-blue-500 transition duration-300 ease-in-out group"
                >
                    <span className="absolute inset-0 bg-blue-500 transition-transform duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
                    <span className="relative z-10 group-hover:text-white">Create Account</span>
                </button>
            </div>

            {/* right side */}
            <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
                <img
                    className='w-full absolute bottom-0 right-0 max-w-md'
                    src={assets.appointment_img}
                    alt=""
                />
            </div>
        </div>
    );
};

export default Banner;
