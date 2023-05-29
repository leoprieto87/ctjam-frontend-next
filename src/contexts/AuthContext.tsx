'use client'

import { useContext, createContext, ReactNode } from "react";

interface AuthContextType  {
    isLogged: Boolean
}

interface Props {
    children: ReactNode;
  }

export const AuthContext = createContext({} as AuthContextType)

export const AuthProvider = ({ children }: Props) => {

    const isLogged = false

    return (
        <AuthContext.Provider value={{ isLogged }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AuthContext)