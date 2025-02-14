import React from 'react'

const VehiclePanel = (props) => {
  return (
    <>
      <h5 className='p-1 text-center absolute top-0 w-[93%]'><i onClick={()=>{
        props.setVehiclePanelOpen(false)
      }} className="cursor-pointer text-3xl text-gray-200 ri-arrow-down-wide-fill px-3 py-10 pt-14"></i></h5>
        <h3 className='text-2xl font-semibold mb-2'>Choose a Vehicle</h3>
        <div onClick={()=>{
            props.setConfirmRidePanel(true)
        }} className='w-full flex items-center  border-2 active:border-zinc-900 rounded-xl p-3 justify-between mb-2'>
          <img className='h-16' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_536,w_536/v1555367310/assets/30/51e602-10bb-4e65-b122-e394d80a9c47/original/Final_UberX.png" alt="" />
          <div className='w-1/2'>
            <h4 className='font-medium text-lg'>UberGo <span><i className="ri-user-3-fill">4</i></span></h4>
            <h5 className='font-medium text-sm'>2 mins Away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, Compacts rides</p>
          </div>
          <h2 className='text-lg font-semibold'>₹200.50</h2>
        </div>
        <div onClick={()=>{
            props.setConfirmRidePanel(true)
        }} className='w-full flex items-center border-2 active:border-black  rounded-xl py-3 pr-3 justify-between mb-2'>
          <img className='h-16' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
          <div className='w-1/2'>
            <h4 className='font-medium text-lg'>Moto <span><i className="ri-user-3-fill">1</i></span></h4>
            <h5 className='font-medium text-sm'>4 mins Away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, Motor-Cycle rides</p>
          </div>
          <h2 className='text-lg font-semibold'>₹65.20</h2>
        </div>
        <div onClick={()=>{
            props.setConfirmRidePanel(true)
        }} className='w-full flex items-center border-2 active:border-black  rounded-xl p-3 justify-between mb-2'>
          <img className='h-16' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyFG-98sjCXN6vhS0MFVNwS7u8P5zOknbiEg&s" alt="" />
          <div className='w-1/2'>
            <h4 className='font-medium text-lg'>UberAuto <span><i className="ri-user-3-fill">3</i></span></h4>
            <h5 className='font-medium text-sm'>2 mins Away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, Auto rides</p>
          </div>
          <h2 className='text-lg font-semibold'>₹118.60</h2>
        </div>
    </>
  )
}

export default VehiclePanel
