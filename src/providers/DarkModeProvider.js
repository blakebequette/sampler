import React, { createContext, useState } from 'react'

export const DarkModeContext = createContext()

export default function DarkModeProvider({children}){
    let [darkMode, setDarkMode] = useState(true)

    return <DarkModeContext.Provider value={[darkMode, setDarkMode]}>
        {children}
    </DarkModeContext.Provider>
}