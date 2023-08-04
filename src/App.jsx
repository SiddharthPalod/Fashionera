import React from 'react';
import ImageSlider from './components/ImageSlider';
import Form1 from "./components/Form"
import About from './components/About';
import Features from './components/Features';
import Intro from './components/Intro';


const App = () => {
  return (
    <div>
        <Intro/>
        <div className="side">
          <h1 className='ev-title'><span className='magic'>Events</span></h1>
        </div>
        <ImageSlider />
        <Features/>
        <Form1 />
        <About/>  
    </div>
  );
};

export default App;
