import React from 'react'

function Box({backgroundColor, width, height, handleRemove, id}) {
    const boxStyle = {
        backgroundColor,
        width:`${width}em`,
        height:`${height}em`
    }

    const remove = () => handleRemove(id);

    return(
        <div>
            <div style={boxStyle}></div>
            <button onClick={remove}>x</button>
        </div>
        
    )
}

export default Box;