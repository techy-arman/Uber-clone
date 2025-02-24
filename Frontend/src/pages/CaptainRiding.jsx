import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import FinishRide from '../components/FinishRide';


const CaptainRiding = () => {
 const[finishRidePanel,setFinishRidePanel]=  useState(false)
const finishRidePanelRef =useRef(null)
    useGSAP(() => {
        if (finishRidePanel) {
          gsap.to(finishRidePanelRef.current, {
            transform:'translateY(0)'
          })
        } else {
          gsap.to(finishRidePanelRef.current, {
            transform:'translateY(100%)'
          })
        }
      }, [finishRidePanel])
  return (
    <div className='h-screen '>
      <div className='fixed p-3 top-0 flex justify-between items-center w-full'>
        <img className='w-16 ' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <Link to="/captain-home" className='h-10 w-10 bg-white flex items-center justify-center rounded-full cursor-pointer'>
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className='h-4/5'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className='h-1/5 relative p-6 bg-yellow-400 flex items-center justify-between' onClick={()=>{
        setFinishRidePanel(true)
      }}>
      <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={()=>{
            // props.setRidePopupPanel(false)
        }}>
            <i className='text-3xl text-gray-700 ri-arrow-up-wide-line'></i>
        </h5>
        <h4 className='text-xl font-semibold'>4 Km Away</h4>
        <button className=' bg-green-600 text-white font-semibold py-3 rounded-lg px-12'>Complete Ride</button>
      </div>
      <div ref = {finishRidePanelRef} className='w-full fixed z-10 bottom-0 translate-y-full bg-white py-8 px-3'>
        <FinishRide setFinishRidePanel={setFinishRidePanel}/>
      </div>
    </div>
  )
}

export default CaptainRiding
