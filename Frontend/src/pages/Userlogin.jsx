import React, { useContext } from 'react'
import { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { UserDataContext } from '../Context/UserContext'
import axios from 'axios'

const Userlogin = () => {
   const [email,setEmail] =  useState('')
   const [password,setPassword] =  useState('')
   const [userData,setUserData] =  useState({})

   const {user,setUser} = useContext(UserDataContext)
   const navigate = useNavigate()
   const submitHandler =async (e) =>{
    e.preventDefault();
    const userData = {
        email:email,
        password:password
    }
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,userData)
    console.log(response)
    if(response.status === 200){
        const data = response.data
        setUser(data.user)
        localStorage.setItem("token", data.token)
        navigate('/home')
    }
    setEmail('')
    setPassword('')
   }
  return ( 
    <div className='p-7 flex justify-between flex-col h-screen border-[1px] border-zinc-300'>
       <div>
       <img className='w-20 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" /> 
      <form action="" onSubmit={(e)=>submitHandler(e)}>  
      <h3 className='text-lg font-medium mb-2'>Whats your email?</h3>
      <input 
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      className='bg-[#eeeeee] rounded px-4 py-2 mb-5 w-full border-[1px] border-zinc-400 outline-none text-lg placeholder:text-base'
      type="email" 
      required 
      placeholder='email@example.com'
       />
      <h3 className=' text-lg font-medium mb-2'>Enter Password</h3>
      <input 
      className='bg-[#eeeeee] rounded px-4 py-2 w-full border-[1px] border-zinc-400 outline-none text-lg placeholder:text-base'
      type="password" 
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      required 
      placeholder='password'
      />
      <button className='bg-[#111] text-white rounded-md mt-5 px-4 py-2 w-full border-[1px] border-zinc-400 outline-none font-semibold text-lg placeholder:text-base mb-3' type="submit">Login</button>
      </form>
      <p className='text-center font-medium'>New here ? <Link to="/signup" className=' text-blue-600'>Create new Account</Link></p>
       </div>
       <div>
        <Link
        to="/captain-login"
         className='bg-[#10b461] flex items-center justify-center text-white rounded-md mb-5 px-4 py-2 w-full border-[1px] border-zinc-400 outline-none font-semibold text-lg placeholder:text-base'>Sign in as Captain</Link>
       </div>
    </div>
  )
}

export default Userlogin
