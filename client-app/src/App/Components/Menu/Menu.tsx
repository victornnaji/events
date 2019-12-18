import React, { useState } from 'react';
import "./Menu.scss";
import Button from '../Button/Button';
var logo = "assets/logo.png"

const Menu = ({ menus }: any) => {
    const [toggle, settoggle] = useState(false)

    const clickHandler = () => {
        // hamburger--emphatic
        settoggle(!toggle);
    };

    return (
    <>
    <nav className="nav">
        <div className="container">
        <div className="nav-items">
                <div className="logo-holder">
                    <img src={logo} alt="" className="logo" />
                    <span className="logo-text">EventR</span>
                </div>

                <div className="menu">
                    <div className="link-item">
                        Activities
                    </div>

                    <div className="button-item">
                        <Button text="login" size="medium" bgColor="#9370db" />
                    </div>
                </div>

                <div onClick={clickHandler} className="hamburger-container">
                    {toggle ? 
                      <div className="hamburger hamburger--emphatic is-active">
                        <div className="hamburger-box">
                            <div className="hamburger-inner"></div>
                        </div>
                      </div> :

                        <div className="hamburger">
                            <div className="hamburger-box">
                                <div className="hamburger-inner"></div>
                            </div>
                        </div> 
                    }
                </div>
            </div>
        </div>
    </nav>

    <div className={`overlay ${toggle && "toggle"}`}>
         <div className="menu" style={{display: `${toggle ? "block" : "none"}`}}>
            <div className="link-item">
                Activities
            </div>

            <div className="button-item">
                <Button text="login" size="medium" bgColor="#9370db" />
            </div>
        </div>
    </div>
    </>
    )
}

export default Menu;
