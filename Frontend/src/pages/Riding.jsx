import React from 'react'
import { Link } from 'react-router-dom';


const Riding = () => {
    return (
        <div className='h-screen'>
            <Link to="/home" className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full cursor-pointer'>
                <i className="text-lg font-medium ri-home-5-line"></i>
            </Link>
            <div className='h-1/2'>
                <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
            </div>
            <div className='h-1/2 p-5'>
                <div className='flex items-center justify-between'>
                    <img className='h-28 ' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_536,w_536/v1555367310/assets/30/51e602-10bb-4e65-b122-e394d80a9c47/original/Final_UberX.png" alt="" />
                    <div className='text-right'>
                        <h2 className='text-md font-base '>Arman Ansari</h2>
                        <h4 className='text-xl font-semibold -mt-1 -mb-1'>BR 31B 7004</h4>
                        <p className='text-sm text-gray-600'>Maruti Suzuki</p>
                    </div>
                </div>

                <div className='flex flex-col gap-2 justify-between items-center'>
                    <div className='w-full '>
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
                </div>
                <button className='w-full bg-green-600 text-white font-semibold py-2 rounded-lg mt-5'>Make a Payment</button>
            </div>
        </div>
    )
}

export default Riding
