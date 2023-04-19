import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { userAuth } from '../contexts/authContext'

function Private() {

    const { user } = userAuth()

    if(user === null){
        return <Navigate to='login'/>
    }

    return <Outlet />

}

export default Private 