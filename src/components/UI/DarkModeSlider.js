import React, { useContext } from "react";
import { DarkModeContext } from "../../providers/DarkModeProvider";
import { ThemeContext } from "../../providers/ThemeProvider";

export default function DarkModeSlider(){
    const [darkMode, setDarkMode] = useContext(DarkModeContext)
    const theme = useContext(ThemeContext)
    const wid = 120
    const GAP = 8

    function handleToggle(){
        setDarkMode(!darkMode)
    }

    return <div style={{width: wid, 
        height: wid/2, 
        backgroundColor: theme.text, 
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        display: 'flex', 
        justifyItems: 'flex-start',
        borderRadius: wid/4}}>
        <div onClick={handleToggle} style={{
            width: wid/2 - GAP, 
            height: wid/2 - GAP, 
            backgroundColor: theme.background1, 
            position: "relative",
            left: darkMode ? (1*wid)/2 + GAP/2 : GAP/2,
            top: GAP/2,
            transition: 'left 0.5s',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center'
        }}>
            <p style={{textAlign: 'center', width: '100%', fontSize: wid/8, color: theme.textHeaders, fontWeight: 800}}>{darkMode ? "Dark" : "Light" }</p>
        </div>
    </div>
}