import React from 'react'
import { Link } from 'react-router-dom'
const FinishRide = (props) => {
  return (
    <div className='mt-4'>
            <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
                props.setFinishRidePanel(false)
            }}>
                <i className='text-3xl text-gray-200 ri-arrow-down-wide-line'></i>
            </h5>
            <h3 className='text-2xl font-semibold mb-2 ml-2'>Finish This Ride</h3>
            <div className='flex items-center justify-between px-2 py-4 border-yellow-400 border-2 mt-4 rounded-lg'>
                <div className='flex items-center gap-3'>
                    <img className='h-12 w-12 rounded-full object-cover' src="https://tse2.mm.bing.net/th?id=OIP.HKhqHgL7U8xl_spr2IVcmQHaJQ&pid=Api&P=0&h=180" alt="" />
                    <h2 className='text-lg font-medium'>Sonam Bajwa</h2>
                </div>
                <h5 className='text-lg font-semibold'>5.5 Km</h5>
            </div>
            <div className='flex flex-col gap-2 justify-between items-center'>
                {/* <img className='h-40 ' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_536,w_536/v1555367310/assets/30/51e602-10bb-4e65-b122-e394d80a9c47/original/Final_UberX.png" alt="" /> */}
                <div className='w-full '>
                    <div className='flex items-center gap-4 p-3'>
                        <i className="text-2xl ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>52 / 11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600 '>Hajipur, Bihar</p>
                        </div>
                    </div>
                    <hr />
                    <div className='flex items-center gap-4 p-3'>
                        <i className="text-2xl ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>53 / 12-C</h3>
                            <p className='text-sm -mt-1 text-gray-600 '>Hajipur, Bihar</p>
                        </div>
                    </div>
                    <hr />
                    <div className='flex items-center gap-4 p-3'>
                        <i className="text-2xl ri-currency-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>$3.20</h3>
                            <p className='text-sm -mt-1 text-gray-600 '>Collect Cash</p>
                        </div>
                    </div>
                </div>
                <div className='mt-6 w-full'>
                        <Link to='/captain-home'
                            className='w-full text-lg flex justify-center bg-green-600 text-white font-semibold py-3 rounded-lg mb-3'>Finish Ride</Link>
                            <p className='text-red-500 text-xs mt-10'>Click on finish ride button if you have completed the payment.</p>
                </div>
            </div>
        </div>
  )
}

export default FinishRide
