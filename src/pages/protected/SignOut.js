import React, { useEffect } from 'react'
import { Navigate } from "react-router-dom";

const SignOut = () => {

    useEffect(() => {
        localStorage.removeItem('token')
    }, [])

    return (
        <Navigate to="/login" replace={true} />
    )
}

export default SignOut