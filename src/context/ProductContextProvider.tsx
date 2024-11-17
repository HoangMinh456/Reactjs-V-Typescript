import { useLocalStorage } from "@/hooks/useStorage";
import { get } from "http";
import { createContext, ReactNode, useEffect, useState } from "react";

export const AppContext = createContext({})

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const getUser = localStorage.getItem('user');
    const user = getUser ? JSON.parse(getUser) : {}
    // console.log(user)
    const [userId, setUserId] = useState('')
    useEffect(() => {
        setUserId(user?._id)
    }, [getUser])

    return <AppContext.Provider value={{ user, userId, setUserId }}>
        {children}
    </AppContext.Provider >
}

