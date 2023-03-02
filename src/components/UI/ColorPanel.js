import React, { useState } from "react";


function colorConversionToNumber(color){
    let offset = 0
    if (color[0] === '#'){
        offset += 1
    }
    const r = color.slice(offset, offset+2)
    const g = color.slice(offset+2, offset+4)
    const b = color.slice(offset+4, offset+6)
    return (parseInt(r, 16) + parseInt(g, 16) + parseInt(b, 16))/3
}

function ColorSquare({color, num}){
    const [isHover, setIsHover] = useState(false)
    const textColor = colorConversionToNumber(color) < 100 ? 'white' : 'black'

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
    return (<div style={{width: '100%', display: 'flex'}}>
        {colorArr.map((color, i) => {
            return <ColorSquare key={i} color={color} num={i} />
        })}
    </div>)
}