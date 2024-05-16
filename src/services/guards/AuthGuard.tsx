import React from "react";
import { useLocation, Navigate } from 'react-router-dom'
import { useAppSelector } from "../hooks/storeHooks";

function AuthGuard({ children, }
    : { children: React.ReactNode })
    : React.ReactElement {
    const { isAuthenticated, }
        = useAppSelector((state) => state.auth)
    const { pathname } = useLocation()
    const authenticated =(): boolean => {
        if(isAuthenticated || JSON.parse(localStorage.getItem('loginResponse') || '{}').access){
            return true
        }
        return false
    }

    return authenticated() 
    ?
        (
        <>
            {children}
        </>
        )
    :
        (
            <Navigate replace to="/login" state={{from:pathname}} />
        )
}

export default AuthGuard