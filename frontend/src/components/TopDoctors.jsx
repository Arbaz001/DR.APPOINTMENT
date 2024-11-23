import React from "react";
import { doctors } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const TopDoctors = () => {
  const navigate = useNavigate();
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger animation when 10% is visible
    triggerOnce: true, // Animate only once
  });

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10 transform transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h1 className="text-3xl font-extrabold">Top Doctors to Book</h1>
      <p className="sm:w-1/3 text-center text-sm font-medium">
        Simply browse through our extensive list of trusted doctors.
      </p>

      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            onClick={() => navigate(`/appointment/${item._id}`)}
            className={`border border-blue-200 rounded-3xl overflow-hidden cursor-pointer transition-transform duration-200 hover:shadow-2xl  hover:transiton-all hover:duration-300 ${
              inView ? "hover:-translate-y-2" : ""
            }`}
            key={index}
          >
            <img className="bg-blue-50" src={item.image} alt="" />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center text-green-500">
                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-bold">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          navigate("/doctors");
          scrollTo(0, 0);
        }}
        className="bg-blue-50 text-gray-600 font-semibold px-12 py-3 rounded-full mt-10 shadow-md hover:bg-blue-100 hover:text-blue-700 transition-all duration-300 ease-in-out flex items-center gap-2"
      >
        {/* Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
        More
      </button>
    </div>
  );
};

export default TopDoctors;
