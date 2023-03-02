export default function colorConversionToNumber(color){
    let offset = 0
    if (color[0] === '#'){
        offset += 1
    }
    const r = color.slice(offset, offset+2)
    const g = color.slice(offset+2, offset+4)
    const b = color.slice(offset+4, offset+6)
    return (parseInt(r, 16) + parseInt(g, 16) + parseInt(b, 16))/3
}
