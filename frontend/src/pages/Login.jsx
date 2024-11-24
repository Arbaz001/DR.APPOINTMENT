import React, { useState } from 'react'

const Login = () => {

  const [state, setState] = useState('Sign Up')

  // store the value
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  // on submit handle
  const onSubmitHandler = async (event) => {
    event.preventDefault()
  }
  

  return (
    <form className='min-h-[80vh] flex items-center '>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg shadow-primary hover:shadow-2xl hover:shadow-primary hover:transition-all duration-300'>
        <p className='text-2xl font-extrabold'>{state === 'Sign Up' ? "Create Account" : "Login"}</p>
        <p className='font-bold'>Please {state === 'Sign Up' ? "signup" : "login"} to book appointment</p>
        {
          state === 'Sign Up'
          && <div className='w-full'>
            <p className='font-semibold'>Full Name</p>
            <input className='border-2 border-zinc-500 rounded w-full p-2 mt-1 font-semibold' type="text" onChange={(e) => setName(e.target.value)} value={name} required />
          </div>
        }
        <div className='w-full'>
          <p className='font-semibold'>Email</p>
          <input className='border-2 border-zinc-500 rounded w-full p-2 mt-1 font-semibold' type="text" onChange={(e) => setEmail(e.target.value)} value={email} required />
        </div>
        <div className='w-full'>
          <p className='font-semibold'>Password</p>
          <input className='border-2 border-zinc-500 rounded w-full p-2 mt-1 font-semibold' type="text" onChange={(e) => setPassword(e.target.value)} value={password} required />
        </div>
        <button className='font-bold bg-primary text-white w-full py-2 rounded-xl text-base hover:shadow-2xl hover:shadow-primary'>{state === 'Sign Up' ? "Create Account" : "Login"}</button>
        {
          state === 'Sign Up'
            ? <p className='font-semibold' >Already have an account? <span onClick={() => setState('Login')} className='text-primary underline cursor-pointer'>Login here</span></p>
            : <p className='font-semibold'>Create a new account? <span onClick={() => setState('Sign Up')} className='text-primary underline cursor-pointer'>click here</span></p>
        }
      </div>
    </form>
  )
}

export default Login