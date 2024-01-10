"use client"
import {createContext, ReactNode, useState} from "react";

type CreateContextType = {
    isMenuOpen: boolean;
    setMenuOpen: (isOpen: boolean) => void
}
export const CreateContext = createContext<CreateContextType | null>(null);

type MobileContextProps = {
    children: ReactNode
}
export const MobileContext = ({children}: MobileContextProps) => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <CreateContext.Provider value={{isMenuOpen, setMenuOpen}}>
            {children}
        </CreateContext.Provider>
    )
}