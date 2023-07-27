import React from 'react';
import ImageSlider from './components/ImageSlider';
import Form1 from "./components/Form"
import About from './components/About';
import "./Form.css"

const App = () => {
  return (
    <div>
        <h1 style={{fontSize:120}}> <span className='magic'>FASHION FEST</span></h1>
        <Form1 />
        <h2 style={{fontSize:80, lineHeight:0}}>Events</h2>
        <ImageSlider />
        <h1 style={{lineHeight:2}}></h1>  
        <About/>  
    </div>
  );
};

export default App;
