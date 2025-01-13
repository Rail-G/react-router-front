import { ReactNode, useContext } from "react";
import { Context } from "../context/Context";
import { Navigate } from "react-router-dom";

export function Protect({children}: {children: ReactNode}) {
    const context = useContext(Context)
    const { isAuth } = context!
    console.log(isAuth)
    if (!isAuth) {
        return <Navigate to={'/task3'}/>
    } 
    return children
}