import React from 'react';
//@ts-ignore 
import ReactTypingEffect from 'react-typing-effect';
import "./Hero.scss";
var hero = "assets/people-hero.svg";
var shape1 = "assets/shape-long.svg";
var pattern = "assets/pattern.png";

const Hero: React.FC<any> = () => {
    var text = ["do", "go", "party", "organise"];
    return (
        <div className="hero-container" style={{backgroundImage: `url(${pattern})`}}>
          <div className="container">
              <div className="shapes">
                <img src={shape1} alt="" className="shape_one"/>
                <div className="round-shape-four"></div>
              </div>
            <div className="hero-contents">
                <div className="text-area">
                   <h1 className="heading">
                       <span className="main-heading">Made for those who</span><span className="heading-dynamic"><ReactTypingEffect text={text}/></span>
                   </h1>
                </div>
                <div className="image-area">
                    <img src={hero} alt="" className="heroImg"/>
                </div>
            </div>
          </div>
        </div>
    )
}

export default Hero;
