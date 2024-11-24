import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {
  const [userData, setuserData] = useState({
    name: "Arbaz Ali",
    image: assets.profile_pic,
    email: 'arbazalisgl@gmail.com',
    phone: '+1234568766',
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Church Road, London"
    },
    gender: 'Male',
    dob: '2005-01-01'
  })
  const [isEdit, setIsEdit] = useState(false)

  return (
    <div className='max-w-lg flex flex-col gap-2 border border-teal-200 p-3 rounded-xl shadow-lg shadow-primary hover:shadow-2xl hover:shadow-primary hover:transition-all duration-300'>
      <img className='w-36 rounded-lg shadow-md shadow-teal-200' src={userData.image} alt="" />
      {
        isEdit
          ? <input className='bg-gray-50 text-3xl font-extrabold max-w-60 mt-4 border-2 border-gray-500 rounded-lg hover:shadow-lg hover:shadow-primary transition-all duration-210' type="text" value={userData.name} onChange={e => setuserData(prev => ({ ...prev, name: e.target.value }))} />
          : <p className='text-3xl font-extrabold mt-4 text-neutral-800'>{userData.name}</p>
      }

      <hr className='bg-teal-400 h-[3px] border-none shadow-2xl shadow-primary'/>
      <div>
        <p className='text-neutral-500 underline mt-3 font-extrabold'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700 '>
          <p className='font-bold'>Email Id:</p>
          {
            isEdit
              ? <input className='bg-gray-100 max-w-52 font-bold border-2 border-gray-500 rounded-lg hover:shadow-lg hover:shadow-primary transition-all duration-210' type="text" value={userData.email} onChange={e => setuserData(prev => ({ ...prev, email: e.target.value }))} />
              : <p className='text-blue-500 font-bold'>{userData.email}</p>
          }
          <p className='font-bold'>Phone:</p>
          {
            isEdit
              ? <input className='bg-gray-100 max-w-52 font-bold border-2 border-gray-500 rounded-lg hover:shadow-lg hover:shadow-primary transition-all duration-210' type="text" value={userData.phone} onChange={e => setuserData(prev => ({ ...prev, phone: e.target.value }))} />
              : <p className='text-blue-500 font-bold'>{userData.phone}</p>
          }
          <p className='font-bold'>Address:</p>
          {
            isEdit
              ? <p>
                <input className='bg-gray-50 font-bold border-2 border-gray-500 rounded-lg hover:shadow-lg hover:shadow-primary transition-all duration-210 ' type="text" onChange={e => setuserData(prev => ({ ...prev.address, line1: e.target.value }))} value={userData.address.line1} />
                <br />
                <input className='bg-gray-50 font-bold border-2 border-gray-500 rounded-lg hover:shadow-lg hover:shadow-primary transition-all duration-210 ' type="text" onChange={e => setuserData(prev => ({ ...prev.address, line2: e.target.value }))} value={userData.address.line2} />
              </p>
              : <p className='text-gray-500 font-bold'>
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </p>
          }
        </div>
      </div>

      <div>
        <p className='text-neutral-500 underline mt-3 font-extrabold'>BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700 '>
          <p className='font-bold'>Gender:</p>
          {
            isEdit
              ? <select className='bg-gray-100 max-w-20 font-bold border-2 border-gray-500 rounded-lg hover:shadow-lg hover:shadow-primary transition-all duration-210' onChange={(e) => setuserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender}>
                <option className='font-bold ' value="Male">Male</option>
                <option className='font-bold' value="Female">Female</option>
              </select>
              : <p className='text-gray-500 font-bold'>{userData.gender}</p>
          }
          <p className='font-bold'>Birthday:</p>
          {
            isEdit ? <input className='bg-gray-100 max-w-28  font-bold border-2 border-gray-500 rounded-lg hover:shadow-lg hover:shadow-primary transition-all duration-210' type="date" onChange={(e) => setuserData(prev => ({ ...prev, dob: e.target.value }))} value={userData.dob} />
            : <p className='text-gray-500 font-bold'>{userData.dob}</p>
          }
        </div>
      </div>

      <div className='mt-6'>
        {
          isEdit
          ? <button className= 'text-gray-600  px-5 py-2 border-2 border-primary rounded-3xl hover:bg-primary  transition-all duration-210 hover:text-white hover:shadow-2xl hover:shadow-primary font-bold ' onClick={()=>setIsEdit(false)}>Save Information</button>
          : <button className= 'text-gray-600  px-5 py-2 border-2 border-primary rounded-3xl hover:bg-primary  transition-all duration-210 hover:text-white hover:shadow-2xl hover:shadow-primary font-bold ' onClick={()=>setIsEdit(true)}>Edit</button>
        }
      </div>

    </div>
  )
}

export default MyProfile