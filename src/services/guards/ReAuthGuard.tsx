import React from "react";
import { useLocation, Navigate } from 'react-router-dom'
import { useAppSelector } from "../hooks/storeHooks";

function ReAuthGuard({ children, }
    : { children: React.ReactNode })
    : React.ReactElement {
    const { isAuthenticated, }
        = useAppSelector((state) => state.auth)
    const { pathname } = useLocation()
    const authenticated: boolean = isAuthenticated

    return authenticated
        ? (
            <Navigate replace to='/home' state={{ from: pathname }} />
        ) : (
            <>
                {children}
            </>
        )
}

export default ReAuthGuard