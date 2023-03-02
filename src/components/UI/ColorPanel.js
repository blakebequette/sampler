import React, { useState } from "react";


function ColorSquare({color}){
    const [isHover, setIsHover] = useState(false)

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
            transition: 'flex 0.25s'}}>
                <p style={{textAlign: 'center', width: '100%', fontSize: '2rem'}}>
                    {isHover? color : ''}
                </p>
    </div> 
}

export default function ColorPanel({colorArr}){
    return (<div style={{width: '100%', display: 'flex'}}>
        {colorArr.map((color, i) => {
            return <ColorSquare key={i} color={color} />
        })}
    </div>)
}