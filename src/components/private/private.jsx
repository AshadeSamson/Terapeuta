import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useApp } from '../../context/appContext'

function Private() {

    const location = useLocation()
    const { user } =  useApp()

        if(user === null){
           return <Navigate to='login' replace state={{from: location}}/>;
        }
        return user ? <Outlet /> : <Navigate to='login' replace state={{from: location}}/>;
      

}

export default Private 