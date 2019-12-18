import React, { useState } from 'react';
import "./Button.scss";

const Button = ({size, bgColor, text} : any) => {
    const [hover, sethover] = useState(false);

    const toggleHover = () => {
        sethover(!hover);
    };

    var linkStyle;
    if(hover){
       linkStyle = {backgroundColor: `darken(${bgColor}, 10%)`}
    }else{
        linkStyle = {backgroundColor: `${bgColor}`}
    }

    console.log(hover);

    return (
        <div className={`button-container ${size}`} 
            onMouseEnter={toggleHover} 
            onMouseLeave={toggleHover}
            style={linkStyle}
            >

         {text}
        </div>
    )
}

export default Button;
