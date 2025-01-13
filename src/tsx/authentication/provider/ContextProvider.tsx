import { ReactNode, useState } from "react";
import { Context } from "../context/Context";



export function ContextProvider ({children}: {children: ReactNode}) {
    const [newsList, setNewsList] = useState<NewsType[] | []>([])
    const [profile, setProfile] = useState<string | null>(localStorage.getItem('profile'))
    const [token, setToken] = useState<string | null>(localStorage.getItem('token'))
    const [isAuth, setAuth] = useState<boolean>(!!profile)
    const handleAuth = () => {
        setAuth(true)
    }
    return (
        <Context.Provider value={{newsList, setNewsList, profile, setProfile, token, setToken, isAuth, handleAuth}}>
            {children}
        </Context.Provider>
    )
}