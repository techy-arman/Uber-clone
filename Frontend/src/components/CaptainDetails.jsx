import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
      <div className='flex items-center justify-between'>
          <div className='flex items-center justify-start gap-3'>
            <img className='h-10 w-10 rounded-full object-cover' src="https://i.pinimg.com/originals/55/de/7a/55de7a6bb9e994d30d132e9d4b154855.jpg" alt=" " />
            <h4 className='text-lg font-medium'>Arman Ansari</h4>
          </div>
          <div>
            <h4 className='text-xl font-semibold '> 295rs</h4>
            <p className='text-sm text-gray-500'>Earned</p>
          </div>
        </div>
        <div className='flex mt-6 p-3 py-5 bg-gray-100 rounded-xl justify-center gap-4 items-start'>
          <div className='text-center '>
            <i className='text-3xl mb-2 font-thin ri-timer-2-line'></i>
            <h5  className='text-lg font-medium'>10.2</h5>
            <p  className='text-sm text-gray-600'>Hours Online</p>
          </div>
          <div className='text-center '>
          <i className='text-3xl mb-2 font-thin ri-speed-up-line'></i>
          <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm text-gray-600'>Hours Online</p>
          </div>
          <div className='text-center '>
          <i className='text-3xl mb-2 font-thin ri-booklet-line'></i>
          <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm text-gray-600'>Hours Online</p>
          </div>
        </div>
    </div>
  )
}

export default CaptainDetails
