import React from 'react';
import { ad2 } from '../assets'
import state from '../pages';


function Homepg4() {
  const containerStyle = {
    height: "100vh",
    background: "white",
    color:"black",
    display: "flex",
    fontSize:"1.5em",
    alignItems: "center", // Vertical center alignment
  };
  const boxStyle1 = {
    display: "flex",
    justifyContent: "center", // Horizontal center alignment
    alignItems: "center", // Vertical center alignment
    background: "#FA6CB2",
    textAlign:"center",
    color:"white",
    flex: 1,
    padding: "20px",
    height:"20vw",
    marginRight:"5%",
    marginLeft:"5%",
  };

  const boxStyle2 = {
    display: "flex",
    justifyContent: "center", // Horizontal center alignment
    alignItems: "center", // Vertical center alignment
    background: "#fff",
    textAlign:"center",
    color:"#FA6CB2",
    flex: 1,
    padding: "20px",
    height:"20vw",
    border:"2px solid black",
    marginRight:"10%",
  };

  return (
    <div style={{height: "160vh",background: "white",color:"black",alignItems: "center",}}>
        <div style={containerStyle}>
        <div style={boxStyle1}>
            <div>
            Know Your Body Type<br/>
            Define Your Personal Style<br/>
            Build a Capsule Wardrobe<br/>
            Play with Colors and Patterns<br/>
            Accessorize Thoughtfully<br/>
            Pay Attention to Proportions<br/>
            Consider Occasion and Context
            </div>
        </div>
        <div style={boxStyle2}>
            <div>
            Mix High and Low Fashion<br/>
            Don't Be Afraid to Experiment<br/>
            Dress for Confidence<br/>
            Tailoring Matters<br/>
            Stay Updated and Inspired<br/>
            Photograph Your Outfits
            </div>
        </div>
        <div style={{fontSize:"15vw", transform:"translateX(-20%)"}}>TIPS</div>
        </div>
        <div style={{color:"white"}} onClick={() => {
            const originalXOffset = window.scrollX;
            state.merch = true;
            state.home = false;
            window.scrollTo(originalXOffset, 0);
        }}>
        <img src={ad2} style={{scale:"0.85", transform:"translateX(-8%)"}}></img>
        <h2 style={{fontFamily:"Lusitana", position:"absolute",zIndex:"2",fontSize:"50px", textAlign:"center",fontWeight:"bolder" ,transform:"translate(280%,-400%)"}}>Eau de toilette</h2>
        <p style={{fontFamily:"Lusitana", position:"absolute",zIndex:"2",fontSize:"20px", textAlign:"center",transform:"translate(420%,-320%)"}}>at 30% of one purchase of<br/> above $39 </p>
        </div>
    </div>
  );
}

export default Homepg4;
