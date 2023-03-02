import React, { createContext, useState } from 'react'

const defaultColors = {
    darkest: 'black',
    dark: 'grey',
    accent: 'lightblue',
    light: 'yellow', 
    lightest: 'white'
}

export const ColorsContext = createContext()

export default function ColorsProvider({children}){
    let [colors, setColors] = useState(defaultColors)

    return <ColorsContext.Provider value={[colors, setColors]}>
        {children}
    </ColorsContext.Provider>
}