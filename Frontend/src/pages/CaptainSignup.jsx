import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { captainDataContext } from '../Context/CaptainContext'
import axios from 'axios'

const CaptainSignup = () => {

    const navigate = useNavigate()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [vehicleColor, setVehicleColor] = useState('')
    const [vehiclePlate, setVehiclePlate] = useState('')
    const [vehicleCapacity, setVehicleCapacity] = useState('')
    const [vehicleTypes, setVehicleTypes] = useState('')



    const { captain, setCaptain } = useContext(captainDataContext)
    console.log("CapSetCap",captain,setCaptain)
    const submitHandler = async (e) => {
        e.preventDefault();
        const captainData = {
            fullname : {
                firstname: firstName,
                lastname: lastName,
            },
            email: email,
            password: password,
            vehicle:{
                color: vehicleColor,
                plate: vehiclePlate,
                capacity: vehicleCapacity,
                vehicleType: vehicleTypes
            }
        }

        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BASE_URL}/captain/register`,
                captainData
            );
            console.log("Response Data:", response.data);
        
            if (response.status === 201) {
                const data = response.data;
                setCaptain(data.captain);
                localStorage.setItem("token", data.token);
                navigate('/captain-home');
            }
        } catch (error) {
            console.error("Error during signup:", error);
            if (error.response) {
                console.error("Server Response:", error.response.data);
                alert(`Error: ${error.response.data.message || "Something went wrong!"}`);
            } else {
                alert("Network error or server unreachable!");
            }
        }        
        setEmail('')
        setPassword('')
        setFirstName('')
        setLastName('')
        setVehicleColor('')
        setVehiclePlate('')
        setVehicleCapacity('')
        setVehicleTypes('')
    }
    return (
        <div>
            <div className='p-7 flex justify-between flex-col h-screen border-[1px] border-zinc-300'>
                <div>
                    <img className='w-20 mb-5' src="https://pngimg.com/uploads/uber/uber_PNG24.png" alt="" />
                    <form action="" onSubmit={(e) => submitHandler(e)}>
                        <h3 className='text-base font-medium mb-1'>Whats your Name?</h3>
                        <div className='flex gap-4 mb-3'>
                            <input
                                className='bg-[#eeeeee] rounded px-4 py-2 w-full border-[1px] border-zinc-400 outline-none text-base placeholder:text-base'
                                type="text"
                                value={firstName}
                                onChange={(e) => { setFirstName(e.target.value) }}
                                required
                                placeholder='John'
                            />
                            <input
                                className='bg-[#eeeeee] rounded px-4 py-2 w-full border-[1px] border-zinc-400 outline-none text-base placeholder:text-base'
                                type="text"
                                value={lastName}
                                onChange={(e) => { setLastName(e.target.value) }}
                                required
                                placeholder='doe'
                            />
                        </div>
                        <h3 className='text-base font-medium mb-1'>Whats your email?</h3>
                        <input
                            className='bg-[#eeeeee] rounded px-4 py-2 w-full mb-3 border-[1px] border-zinc-400 outline-none text-base placeholder:text-base'
                            type="email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                            required
                            placeholder='email@example.com'
                        />
                        <h3 className='text-base font-medium mb-1'>Enter Password</h3>
                        <input
                            className='bg-[#eeeeee] rounded px-4 py-2 w-full border-[1px] border-zinc-400 outline-none text-base placeholder:text-base'
                            type="password"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                            required
                            placeholder='password'
                        />
                        <h3 className='text-base font-medium mb-1 mt-2'>Vehicle Information</h3>
                        <div className='flex gap-4 mb-3'>
                            <input
                                className='bg-[#eeeeee] rounded px-4 py-2 w-full border-[1px] border-zinc-400 outline-none text-base placeholder:text-base'
                                type="text"
                                value={vehicleColor}
                                onChange={(e) => { setVehicleColor(e.target.value) }}
                                required
                                placeholder='Vehicle color'
                            />
                            <input
                                className='bg-[#eeeeee] rounded px-4 py-2 w-full border-[1px] border-zinc-400 outline-none text-base placeholder:text-base'
                                type="text"
                                value={vehiclePlate}
                                onChange={(e) => { setVehiclePlate(e.target.value) }}
                                required
                                placeholder='Vehicle Plate'
                            />
                        </div>
                        <div className='flex gap-4 mb-3'>
                            <input
                                className='bg-[#eeeeee] rounded px-4 py-2 w-full border-[1px] border-zinc-400 outline-none text-base placeholder:text-base'
                                type="number"
                                value={vehicleCapacity}
                                onChange={(e) => { setVehicleCapacity(e.target.value) }}
                                required
                                placeholder='Vehicle Capacity'
                            />
                            <select
                                className="bg-[#eeeeee] rounded px-4 py-2 w-full border-[1px] border-zinc-400 outline-none text-base"
                                value={vehicleTypes}
                                onChange={(e) => setVehicleTypes(e.target.value)}
                                required
                            >
                                <option value="" disabled>Select Vehicle Type</option>
                                <option value="car">Car</option>
                                <option value="auto">Auto</option>
                                <option value="motorcycle">Motorcycle</option>
                            </select>
                        </div>
                        <button className='bg-[#111] text-white rounded-md mt-5 px-4 py-2 w-full border-[1px] border-zinc-400 outline-none font-semibold text-base placeholder:text-base mb-3' type="submit">Sign Up as Captain</button>
                    </form>
                    <p className='text-center font-medium'>Already have an Account ? <Link to="/captain-login" className=' text-blue-600'>Sign In</Link></p>
                </div>
                <div>
                    <p className='text-xs font-medium leading-tight text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
    )
}

export default CaptainSignup
