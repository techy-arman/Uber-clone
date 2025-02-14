import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { captainDataContext } from '../Context/CaptainContext'
import axios from 'axios'

const CaptaiProtectRouter = ({ children }) => {
    const token = localStorage.getItem('token')
    const { captain, setCaptain } = useContext(captainDataContext)
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()
    useEffect(() => {
        if (!token) {
            navigate('/captain-login')
        }


        axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {

            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            if (response.status === 200) {
                setCaptain(response.data.captain)
                setIsLoading(false)
            }
        })
            .catch(err => {
                localStorage.removeItem('token')
                navigate('/captain-login')
            })
    }, [token])

    return (
        <>
            {children}
        </>
    )
}

export default CaptaiProtectRouter
