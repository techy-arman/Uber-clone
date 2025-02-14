import React from 'react'

const LocationSearchPanel = (props) => {
    const locations = [
        "24B, NEAR KAPOOR CAFE, SVIET, 844101 Bihar",
        "28B, NEAR KAPOOR CAFE, SVIET, 844101 Punjab",
        "32B, NEAR KAPOOR CAFE, SVIET, 844101 Rajasthan",
        "66B, NEAR KAPOOR CAFE, SVIET, 844101 Hjp",
    ]
  return (
    <div>
     {locations.map((val,idx)=>(
         <div onClick={()=>{
          props.setVehiclePanelOpen(true)
          props.setPanelOpen(false)
         }}key={idx} className='flex items-center border-2 border-gray-50 active:border-black p-3 rounded-xl justify-start gap-3 my-2'>
         <h2 className='bg-[#eee] h-8 flex items-center justify-center w-10 rounded-full'><i className="ri-map-pin-2-line"></i></h2>
         <h4 className='font-base'>{val}</h4>
       </div>
     ))}
    </div>
  )
}

export default LocationSearchPanel
