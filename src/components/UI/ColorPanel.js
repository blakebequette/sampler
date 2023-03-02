import React, { useState } from "react";
import color2number  from "../../utils/color2Number"

function ColorSquare({color, num}){
    const [isHover, setIsHover] = useState(false)
    const textColor =color2number(color) < 100 ? 'white' : 'black'

    const handleMouseEnter = () => {
        setIsHover(true)
    }

    const handleMouseExit = () => {
        setIsHover(false)
    }
    return <div 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseExit}
        style={{
            height: 100, 
            flex: isHover ? 2 : 1,
            backgroundColor: color, 
            display: 'flex', 
            justifyItems: 'center', 
            alignItems: 'center',
            transition: 'flex 0.25s',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            borderTopLeftRadius: num === 0 ? 10 : 0,
            borderBottomLeftRadius: num === 0 ? 10 : 0,
            borderBottomRightRadius: num === 4 ? 10 : 0,
            borderTopRightRadius: num === 4 ? 10 : 0,
            }}>
                <p style={{textAlign: 'center', width: '100%', fontSize: '2rem', color: textColor}}>
                    {isHover? color : ''}
                </p>
    </div> 
}

export default function ColorPanel({colorArr}){

    return (<div style={{width: '100%', display: 'flex', }}>
        {colorArr.map((color, i) => {
            return <ColorSquare key={i} color={color} num={i} />
        })}
    </div>)
}