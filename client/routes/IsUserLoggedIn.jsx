import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/authContext';
import {Navigate, Outlet} from "react-router-dom"
const IsUserLoggedIn = () => {
    const [ok, setOk] = useState(false);
    const {auth} = useAuth();
    useEffect(()=>{
      if(auth?.token){
        setOk(true)
      }
      else{
        setOk(false)
      }
    }, [auth.token])
  return ok ? <Navigate to = "/" />: <Outlet/>
}

export default IsUserLoggedIn
