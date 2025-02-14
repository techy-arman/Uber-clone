import React from 'react'

const WaitingforDriver = (props) => {
  return (
    <div>
      {/* <h5 className='p-1 text-center absolute top-0 w-[93%]'><i onClick={() => {
        props.setWaitingforDriver(false)
      }} className="cursor-pointer text-3xl text-gray-200 ri-arrow-down-wide-fill px-3 py-10 pt-14"></i></h5> */}

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
      </div>
    </div>
  )
}

export default WaitingforDriver
