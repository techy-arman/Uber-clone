import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from './components/LocationSearchPanel';
import VehiclePanel from './components/VehiclePanel';
import ConfirmeRide from './components/ConfirmeRide';
import LookingforDriver from './components/LookingforDriver';
import WaitingforDriver from './components/WaitingforDriver';

const Homes = () => {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const vehiclePanelRef = useRef(null)
  const confirmRidePanelref = useRef(null)
  const waitingforDriverref = useRef(null)
  const vehicleFoundref = useRef(null)
  const panelRef = useRef(null)
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const [vehicleFound, setvehicleFound] = useState(false)
  const [waitingforDriver, setWaitingforDriver] = useState(false)


  const submitHandler = (e) => {
    e.preventDefault()

  }
  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        padding: 30
      })
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        padding: 0
      })
    }
  }, [panelOpen])

  useGSAP(function(){
    if(vehiclePanelOpen){
      gsap.to(vehiclePanelRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(vehiclePanelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[vehiclePanelOpen])

  useGSAP(function(){
    if(confirmRidePanel){
      gsap.to(confirmRidePanelref.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(confirmRidePanelref.current,{
        transform:'translateY(100%)'
      })
    }
  },[confirmRidePanel])

  useGSAP(function(){
    if(vehicleFound){
      gsap.to(vehicleFoundref.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(vehicleFoundref.current,{
        transform:'translateY(100%)'
      })
    }
  },[vehicleFound])
  useGSAP(function(){
    if(waitingforDriver){
      gsap.to(waitingforDriverref.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(waitingforDriverref.current,{
        transform:'translateY(100%)'
      })
    }
  },[waitingforDriver])
  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-20 absolute top-5 left-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <div onClick={()=>{
        setVehiclePanelOpen(false)
      }} className='h-screen w-screen'>
        {/* temp image   */}
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className='flex flex-col justify-end absolute top-0 h-screen w-full '>
        <div className='h-[30%] p-8 bg-white relative'>
          <h5 className='text-2xl absolute right-10 top-5 cursor-pointer' onClick={() => setPanelOpen(!panelOpen)}>
            {(panelOpen) ? <i className="ri-arrow-down-wide-fill"></i> : <i className="ri-arrow-up-wide-fill"></i>}
          </h5>
          <h4 className='text-2xl font-semibold'>Find a trip</h4>
          <form onSubmit={(e) => submitHandler(e)}>
            <input
              onClick={() => setPanelOpen(true)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className='bg-[#eee] px-8 py-2 text-base rounded-lg w-full mt-5 outline-none' type="text" placeholder='Add a pick-up location' />
            <input
              onClick={() => setPanelOpen(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className='bg-[#eee] px-8 py-2 text-base rounded-lg w-full mt-3 outline-none' type="text" placeholder='Enter your destination' />
          </form>
        </div>
        <div ref={panelRef} className='bg-white h-0'>
          <LocationSearchPanel setPanelOpen = {setPanelOpen} setVehiclePanelOpen={setVehiclePanelOpen} />
        </div>
      </div>
      <div ref={vehiclePanelRef} className='w-full fixed z-10 bottom-0 translate-y-full bg-white py-8 px-3'>
      <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanelOpen={setVehiclePanelOpen} />
      </div>
      <div ref={confirmRidePanelref} className='w-full fixed z-10 bottom-0 translate-y-full bg-white py-6 px-3 pt-14'>
      <ConfirmeRide setConfirmRidePanel={setConfirmRidePanel} setvehicleFound={setvehicleFound}  />
      </div>
      <div ref={vehicleFoundref} className='w-full fixed z-10 bottom-0 translate-y-full bg-white py-6 px-3 pt-14'>
        <LookingforDriver  setvehicleFound={setvehicleFound}/>
      </div>
      <div ref={waitingforDriverref} className='w-full fixed z-10 bottom-0 translate-y-full bg-white py-6 px-3 pt-14'>
        <WaitingforDriver setWaitingforDriver={waitingforDriver} />
      </div>
    </div>
  )
}

export default Homes
