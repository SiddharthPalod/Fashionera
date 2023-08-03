import React from "react";
import bgimg from "./bgimg.png";

const Intro = () => {
    return (
        <div className="header" style={{backgroundImage: `url(${bgimg})`}}>
            <div className="header-text">
                <h1>JOIN US</h1>
                <h2>for the</h2>
                <h3>Largest Fashion<br />fest of Jaipur</h3>
            </div>
        </div>
    );
};

export default Intro;
