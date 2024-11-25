import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import BookingSlots from '../components/slots'

const Appointment = () => {

  const{docId} = useParams()
  const {doctors} = useContext(AppContext)

  const [docInfo,setDocInfo] = useState(null)

  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)
  }

  useEffect(()=>{
    fetchDocInfo()
  },[doctors,docId])

  return docInfo && (
    <div>
        <div className='flex flex-col sm:flex-row gap-4'>
          <div>
            <img className='bg-primary w-full sm:max-w-72 rounded-lg shadow-lg shadow-primary ' src={docInfo.image} alt="" />
          </div>

          <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0 shadow-lg shadow-primary '>
            {/* doctor infofor */}
            <p className='flex items-center gap-2 text-2xl font-bold text-gray-900'>
              {docInfo.name} 
              <img src={assets.verified_icon} alt="" /> 
            </p>
            <div className='flex items-center gap-2 text-sm font-semibold mt-1 text-gray-600'>
              <p>{docInfo.degree} - {docInfo.speciality}</p>
              <button className='py-0.5 px-2 border text.xs rounded-full bg-primary font-semibold text-white cursor-default shadow-lg'>{docInfo.experience}</button>
            </div>

            {/* Doctor About */}
            <div>
              <p className='flex items-center gap-1 text-sm font-semibold text-gray-900 mt-3 '>About <img src={assets.info_icon} alt="" /></p>
              <p className='text-sm text-gray-500 max-w-[700px] mt-1 font-semibold'>{docInfo.about}</p>
            </div>
            <p className='flex items-center gap-2 text-sm font-bold mt-1 text-gray-900'>
              Appointment fee :<span>${docInfo.fees}</span>
            </p>

          </div>
        </div>
        <BookingSlots />
    </div>
  )
}

export default Appointment