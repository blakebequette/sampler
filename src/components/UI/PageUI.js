import React, { useContext } from "react";
import { ThemeContext } from "../../providers/ThemeProvider";
import ColorPanel from "./ColorPanel";


const colorList = [
    ['#606C38', '#283618', '#FEFAE0', '#DDA15E', '#BC6C25'],
    ['#264653', '#2A9D8F', '#E9C46A', '#F4A261', '#E76f51'],
    ['#353535', '#3C6E71', '#FFFFFF', '#D9D9D9', '#284B63'],
    ['#222831', '#393E46', '#00ADB5', '#BBBBBB', '#EEEEEE']
]
export default function PageUI(){
    const theme = useContext(ThemeContext)
    return (
        <>
            <h1 style={{color: theme.textHeaders, textAlign: "center"}}>User Interface</h1>
            <h3 style={{color: theme.textHeaders, textAlign: "center"}}>Colors</h3>
            <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center'}}>
                {colorList.map((colors, i) => {
                return <div key={i} style={{flex: 1, marginTop: 45, width: 700}}>
                    <ColorPanel colorArr={colors} />
                </div>
            })}
            </div>
        </>
    )}