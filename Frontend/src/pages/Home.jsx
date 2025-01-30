import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div className=" bg-[url(https://img.freepik.com/free-photo/close-up-new-york-street-signs_23-2150863249.jpg?t=st=1738164807~exp=1738168407~hmac=0e4e435039a2280decca52414933797c8ef1bdac3b1697a14eaadc12a109c8d2&w=360)] bg-cover bg-center w-full pt-8 flex justify-between flex-col h-screen ">
            <img className='w-20 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
            <div className='bg-white px-4 py-4 pb-7'>
                <h2 className='text-3xl font-medium text-center'>Get Started With Uber</h2>
                <Link to='/login' className='flex font-bold cursor-pointer items-center justify-center w-full bg-black text-white py-3 rounded-md mt-5'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Home
