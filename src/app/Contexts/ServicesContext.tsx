"use client"
import {createContext, ReactNode, useState} from "react";

type CreateContextType = {
    isSelectionTech: boolean;
    setIsSelectionTech: (isOpen: boolean) => void;
    selectedTech: string;
    setSelectedTech: (selectedTech: string)=> void
}
export const CreateContext = createContext<CreateContextType | null>(null);

type MobileContextProps = {
    children: ReactNode
}
export const ServicesContext = ({children}: MobileContextProps) => {
    const [isSelectionTech, setIsSelectionTech] = useState<boolean>(true);
    const [selectedTech, setSelectedTech] = useState<string>('frontend');

    return (
        <CreateContext.Provider value={{isSelectionTech, setIsSelectionTech, selectedTech, setSelectedTech}}>
            {children}
        </CreateContext.Provider>
    )
}