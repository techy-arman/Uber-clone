import React, { useContext } from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/home'
import Captainlogin from './pages/Captainlogin'
import CaptainSignup from './pages/CaptainSignup'
import Userlogin from './pages/Userlogin'
import UsersignUp from './pages/UsersignUp'
import { UserDataContext } from './Context/UserContext'


const App = () => {
 const data =  useContext(UserDataContext)
 console.log(data)
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home/>}   />
        <Route path="/login" element={<Userlogin/>}   />
        <Route path="/signup" element={<UsersignUp/>}   />
        <Route path="/captain-login" element={<Captainlogin/>}   />
        <Route path="/captain-signup" element={<CaptainSignup/>}   />
      </Routes>

    </div>
  )
}

export default App
