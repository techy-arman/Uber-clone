import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [captainData, setCaptainData] = useState({})

    const submitHandler = async (e) => {
        e.preventDefault();
        setCaptainData({
            fullName: {
                firstName: firstName,
                lastName: lastName,
            },
            email: email,
            password: password
        })
        setEmail('')
        setPassword('')
        setFirstName('')
        setLastName('')
    }
    return (
        <div>
            <div className='p-7 flex justify-between flex-col h-screen'>
                <div>
                    <img className='w-20 mb-10' src="https://pngimg.com/uploads/uber/uber_PNG24.png" alt="" />
                    <form action="" onSubmit={(e) => submitHandler(e)}>
                        <h3 className='text-lg font-medium mb-2'>Whats your Name?</h3>
                        <div className='flex gap-4 mb-5'>
                            <input
                                className='bg-[#eeeeee] rounded px-4 py-2 w-full border-[1px] border-zinc-400 outline-none text-lg placeholder:text-base'
                                type="text"
                                value={firstName}
                                onChange={(e) => { setFirstName(e.target.value) }}
                                required
                                placeholder='John'
                            />
                            <input
                                className='bg-[#eeeeee] rounded px-4 py-2 w-full border-[1px] border-zinc-400 outline-none text-lg placeholder:text-base'
                                type="text"
                                value={lastName}
                                onChange={(e) => { setLastName(e.target.value) }}
                                required
                                placeholder='doe'
                            />
                        </div>
                        <h3 className='text-lg font-medium mb-2'>Whats your email?</h3>
                        <input
                            className='bg-[#eeeeee] rounded px-4 py-2 w-full mb-5 border-[1px] border-zinc-400 outline-none text-lg placeholder:text-base'
                            type="email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                            required
                            placeholder='email@example.com'
                        />
                        <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
                        <input
                            className='bg-[#eeeeee] rounded px-4 py-2 w-full border-[1px] border-zinc-400 outline-none text-lg placeholder:text-base'
                            type="password"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                            required
                            placeholder='password'
                        />
                        <button className='bg-[#111] text-white rounded-md mt-5 px-4 py-2 w-full border-[1px] border-zinc-400 outline-none font-semibold text-lg placeholder:text-base mb-3' type="submit">Sign Up</button>
                    </form>
                    <p className='text-center font-medium'>Already have an Account ? <Link to="/captain-login" className=' text-blue-600'>Sign In</Link></p>
                </div>
                <div>
                    <p className='text-xs font-medium leading-tight text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium cum numquam ipsam in, iure obcaecati nemo officiis velit doloremque?</p>
                </div>
            </div>
        </div>
    )
}

export default CaptainSignup
