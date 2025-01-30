import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Captainlogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [captainData, setCaptainData] = useState({})
    const submitHandler = (e) => {
        e.preventDefault();
        setCaptainData({
            email: email,
            password: password
        })
        setEmail('')
        setPassword('')
    }
    return (
        <div>
            <div className='p-7 flex justify-between flex-col h-screen'>
                <div>
                    <img className='w-20 mb-10' src="https://pngimg.com/uploads/uber/uber_PNG24.png" alt="" />
                    <form action="" onSubmit={(e) => submitHandler(e)}>
                        <h3 className='text-lg font-medium mb-2'>Whats your email?</h3>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='bg-[#eeeeee] rounded px-4 py-2 w-full border-[1px] border-zinc-400 outline-none text-lg placeholder:text-base'
                            type="email"
                            required
                            placeholder='email@example.com'
                        />
                        <h3 className=' mt-3 text-lg font-medium mb-2'>Enter Password</h3>
                        <input
                            className='bg-[#eeeeee] rounded px-4 py-2 w-full border-[1px] border-zinc-400 outline-none text-lg placeholder:text-base'
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder='password'
                        />
                        <button className='bg-[#111] text-white rounded-md mt-5 px-4 py-2 w-full border-[1px] border-zinc-400 outline-none font-semibold text-lg placeholder:text-base mb-3' type="submit">Login</button>
                    </form>
                    <p className='text-center font-medium'>Join a fleet ? <Link to="/captain-signup" className=' text-blue-600'>Register as a Captain</Link></p>
                </div>
                <div>
                    <Link
                        to="/login"
                        className='bg-[#d5622d] flex items-center justify-center text-white rounded-md mb-5 px-4 py-2 w-full border-[1px] border-zinc-400 outline-none font-semibold text-lg placeholder:text-base'>Sign in as User</Link>
                </div>
            </div>
        </div>
    )
}

export default Captainlogin
