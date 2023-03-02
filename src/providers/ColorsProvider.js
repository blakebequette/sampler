import React, { createContext, useState } from 'react'
import color2Number from "../utils/color2Number"

const rawColorList = [
    ['#353535', '#3C6E71', '#FFFFFF', '#D9D9D9', '#284B63'],
    ['#111111', '#333333', '#666666', '#999999', '#CCCCCC'],
    ['#111111', '#333333', '#E9C46A', '#BBBBBB', '#CCCCCC'],
    ['#606C38', '#283618', '#FEFAE0', '#DDA15E', '#BC6C25'],
    ['#264653', '#2A9D8F', '#E9C46A', '#F4A261', '#E76F51'],
    ['#222831', '#393E46', '#00ADB5', '#BBBBBB', '#EEEEEE'],
    ['#18122B', '#393053', '#443C68', '#635985', '#EEEEEE'],
    ['#1B262C', '#0F4C75', '#3282B8', '#BBE1FA', '#EEEEEE']
]

export const labels = [
    'alpine',
    'greyscale',
    'black and gold',
    'woods',
    'beach',
    'carolina',
    'raven',
    'open ocean'
]

export const colorList = rawColorList.map(clr => clr.sort((a, b) => color2Number(a) - color2Number(b)))
const defaultColorList = colorList[0]

export const ColorsContext = createContext()

export default function ColorsProvider({children}){
    let [colors, setColors] = useState(defaultColorList)
    const sortedColors = colors.sort((a, b) => color2Number(a) - color2Number(b))
    const namedColors = {
        darkest: sortedColors[0],
        dark: sortedColors[1],
        accent: sortedColors[2],
        light: sortedColors[3],
        lightest: sortedColors[4],
    }
    

    return <ColorsContext.Provider value={[namedColors, setColors]}>
        {children}
    </ColorsContext.Provider>
}