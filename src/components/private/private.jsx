import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { userAuth } from '../../context/authContext'

function Private() {

    const location = useLocation()
    const { user } =  userAuth()

        if(user === null){
           return null;
        }
        return user ? <Outlet /> : <Navigate to='login' replace state={{from: location}}/>;
      

}

export default Private 