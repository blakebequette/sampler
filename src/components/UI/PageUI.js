import React, { useContext } from "react";
import { ThemeContext } from "../../providers/ThemeProvider";
import ColorPanel from "./ColorPanel";


const colorList = [
    ['#606C38', '#283618', '#FEFAE0', '#DDA15E', '#BC6C25'],
    ['brown', 'lightblue', 'orange', 'black', 'white']
]
export default function PageUI(){
    const theme = useContext(ThemeContext)
    return (
        <>
            <h1 style={{color: theme.textHeaders, textAlign: "center"}}>User Interface</h1>
            <h3 style={{color: theme.textHeaders, textAlign: "center"}}>Colors</h3>
            <div style={{width: '100%', paddingRight: 200, paddingLeft: 200}}>
                {colorList.map((colors, i) => {
                return <div key={i} style={{marginTop: 30}}>
                    <ColorPanel colorArr={colors} />
                </div>
            })}
            </div>
        </>
    )}