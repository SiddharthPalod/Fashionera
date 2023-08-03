import React from 'react';
import ImageSlider from './components/ImageSlider';
import Form1 from "./components/Form"
import About from './components/About';
import Features from './components/Features';
import Intro from './components/Intro';
import "./Form.css"
import bgimg from "./components/bgimg.png";


const App = () => {
  return (
    <div>
        {/* <Intro/>
        <div className="side">
        <h1 className='ev-title'>Events</h1>
        </div>
        <ImageSlider />
        <Features/> */}

        {/* <h1 style={{lineHeight:2}}></h1>   */}
        <Form1 />
        {/* <About/>   */}
    </div>
  );
};

export default App;
