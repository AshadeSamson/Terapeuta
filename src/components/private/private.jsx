import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function Private() {

    const user = false

    if(!user){
        return <Navigate to='login'/>
    }

    return <Outlet />

}

export default Private 