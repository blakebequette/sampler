import React, { useContext } from "react";
import { ThemeContext } from "../../providers/ThemeProvider";
import ColorPanel from "./ColorPanel";
import DarkModeSlider from "./DarkModeSlider"
import { colorList, ColorsContext, labels } from "../../providers/ColorsProvider";


export default function PageUI(){
    const theme = useContext(ThemeContext)
    const [_, setColors] = useContext(ColorsContext)

    function themeClicked(n) {
        setColors(colorList[n])
    }
    return (
        <>
            <h1 style={{color: theme.textHeaders, textAlign: "center"}}>Themes and Colors</h1>
            <div style={{marginLeft: '40%', marginRight: '40%'}}>
                <div style={{display: 'flex', flexDirection: 'row', width: 240}}>
                    <p style={{flex: 1,  width: 200, color: theme.text, fontSize: '1.25rem', }}>dark mode</p>
                    <DarkModeSlider />
                </div>
            </div>
            <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center'}}>
                {colorList.map((colors, i) => {
                return <div key={i} style={{flex: 1, marginTop: 35, width: 700}}>
                    <p onClick={() => themeClicked(i)} className='hoverpointer' style={{marginBottom: 5, fontSize: '1.5rem', color: theme.text}}>{labels[i]}</p>
                    <ColorPanel colorArr={colors} />
                </div>
            })}
            </div>
            <div style={{minHeight: 200, width: '100%'}}>

            </div>

        </>
    )}