import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const useAuthStatus = () => {
  
    const {user} = useSelector((state) => state.auth)

    const [loggedIn, setLoggedIn] = useState(false)
    const [checkingStatus, setCheckingStatus] = useState(true)

   useEffect(() => {
    if(user){
        setLoggedIn(true)
    }else{
        setLoggedIn(false)
    }

    setCheckingStatus(false)
   } ,[user])

   return {loggedIn, checkingStatus}
}

export default useAuthStatus