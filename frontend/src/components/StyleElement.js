import React from 'react'

const StyleElement = (props) => {
    console.log(props.variant);
    return (
        <div style={myStyle}>
            {props.children}
        </div>
    )
}


const myStyle = {
    color: "white",
    backgroundColor: "black"
}
export default StyleElement
