import React, { useState } from 'react';
import "./Button.scss";

interface IProp{
    size: string;
    bgColor: string;
    text: string;
    onclick?: any;
}
const Button: React.FC<IProp> = ({size, bgColor, text, onclick}) => {
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

    return (
        <div className={`button-container ${size}`} 
            onMouseEnter={toggleHover} 
            onMouseLeave={toggleHover}
            style={linkStyle}
            onClick={onclick}
            >
         {text}
        </div>
    )
}

export default Button;
