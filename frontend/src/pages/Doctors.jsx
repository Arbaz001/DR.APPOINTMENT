import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { AppContext } from "../context/AppContext"
import { useContext } from "react"

const Doctors = () => {
  const { speciality } = useParams()
  const [filterDoc, setFilterDoc] = useState([])
  const { doctors } = useContext(AppContext)
  const navigate = useNavigate()

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
  }

  useEffect(() => {
    if (doctors && Array.isArray(doctors)) {
      applyFilter()
    }
  }, [doctors, speciality])

  return (
    <div>
      <p className="text-gray-600 font-extrabold">Browse through the doctors specialist.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <div className="flex flex-col gap-4 text-sm text-gray-600">
          <p onClick={()=> speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician') } className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300  rounded-xl font-bold transtion-all cursor-pointer ${speciality === "General physician" ? "bg-primary text-white": ""} hover:bg-primary hover:text-white hover:transition-all hover:duration-210 hover:shadow-lg hover:shadow-primary`}>General physician</p>
          <p onClick={()=> speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist') } className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300  rounded-xl font-bold transtion-all cursor-pointer ${speciality === "Gynecologist" ? "bg-primary text-white": ""} hover:bg-primary hover:text-white hover:transition-all hover:duration-210 hover:shadow-lg hover:shadow-primary`}>Gynecologist</p>
          <p onClick={()=> speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist') } className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300  rounded-xl font-bold transtion-all cursor-pointer ${speciality === "Dermatologist" ? "bg-primary text-white": ""} hover:bg-primary hover:text-white hover:transition-all hover:duration-210 hover:shadow-lg hover:shadow-primary`}>Dermatologist</p>
          <p onClick={()=> speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians') } className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300  rounded-xl font-bold transtion-all cursor-pointer ${speciality === "Pediatricians" ? "bg-primary text-white": ""} hover:bg-primary hover:text-white hover:transition-all hover:duration-210 hover:shadow-lg hover:shadow-primary`}>Pediatricians</p>
          <p onClick={()=> speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist') } className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300  rounded-xl font-bold transtion-all cursor-pointer ${speciality === "Neurologist" ? "bg-primary text-white": ""} hover:bg-primary hover:text-white hover:transition-all hover:duration-210 hover:shadow-lg hover:shadow-primary`}>Neurologist</p>
          <p onClick={()=> speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist') } className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300  rounded-xl font-bold transtion-all cursor-pointer ${speciality === "Gastroenterologist" ? "bg-primary text-white": ""} hover:bg-primary hover:text-white hover:transition-all hover:duration-210 hover:shadow-lg hover:shadow-primary`}>Gastroenterologist</p>
        </div>
      <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
        {
        filterDoc.map((item, index) => (
          <div
            onClick={() => item._id && navigate(`/appointment/${item._id}`)}
            className="border border-blue-200 rounded-3xl overflow-hidden cursor-pointer transition-transform duration-200 hover:shadow-2xl hover:-translate-y-2"
            key={item._id || index}
          >
            <img className="bg-blue-50" src={item.image || "default-image.jpg"} alt={item.name || "Doctor"} />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center text-green-500">
                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-bold">{item.name || "Unknown Doctor"}</p>
              <p className="text-gray-600 text-sm">{item.speciality || "General"}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Doctors
