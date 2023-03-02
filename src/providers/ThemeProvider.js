import React, { createContext, useContext } from 'react'
import { ColorsContext } from './ColorsProvider'
import { DarkModeContext } from './DarkModeProvider'

export const ThemeContext = createContext()

export default function ThemeProvider({children}){
    const [colors, _] = useContext(ColorsContext)
    const [darkMode, _2] = useContext(DarkModeContext)

    const theme={
        background1: darkMode ? colors.darkest : colors.lightest,
        background2: darkMode ? colors.dark : colors.light,
        accent: colors.accent,
        text: darkMode ? colors.light : colors.dark,
        textHeaders: darkMode ? colors.lightest : colors.darkest
    }

    return <ThemeContext.Provider value={theme}>
        {children}
    </ThemeContext.Provider>
}