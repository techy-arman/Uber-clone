import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopup from '../components/RidePopup'
import ConfirmRidePopup from '../components/ConfirmRidePopup';

const CaptainHome = () => {
  const [ridePopupPanel ,setRidePopupPanel] = useState(true)
  const [confirmridePopupPanel ,setConfirmridePopupPanel] = useState(false)
  const ridePopupPanelRef = useRef(null)
  const confirmridePopupPanelRef = useRef(null)
  useGSAP(() => {
    if (ridePopupPanel) {
      gsap.to(ridePopupPanelRef.current, {
        transform:'translateY(0)'
      })
    } else {
      gsap.to(ridePopupPanelRef.current, {
        transform:'translateY(100%)'
      })
    }
  }, [ridePopupPanel])
  useGSAP(() => {
    if (confirmridePopupPanel) {
      gsap.to(confirmridePopupPanelRef.current, {
        transform:'translateY(0)'
      })
    } else {
      gsap.to(confirmridePopupPanelRef.current, {
        transform:'translateY(100%)'
      })
    }
  }, [confirmridePopupPanel])
  return (
    <div className='h-screen'>
      <div className='fixed p-3 top-0 flex justify-between items-center w-full'>
        <img className='w-16 ' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <Link to="/home" className='h-10 w-10 bg-white flex items-center justify-center rounded-full cursor-pointer'>
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className='h-3/5'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className='h-2/5 p-6'>
        <CaptainDetails/>
      </div>
      <div ref = {ridePopupPanelRef} className='w-full fixed z-10 bottom-0 translate-y-full bg-white py-8 px-3'>
        <RidePopup setRidePopupPanel={setRidePopupPanel} setConfirmridePopupPanel={setConfirmridePopupPanel}/>
      </div>
      <div ref = {confirmridePopupPanelRef} className='w-full h-screen fixed z-10 bottom-0 translate-y-full bg-white py-8 px-3'>
        <ConfirmRidePopup setConfirmridePopupPanel={setConfirmridePopupPanel} setRidePopupPanel={setRidePopupPanel}/>
      </div>
    </div>
  )
}

export default CaptainHome
