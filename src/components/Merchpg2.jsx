import React from 'react'
import ImageSlider from './ImageSlider'
import state from '../pages';

function Merchpg2({namer}) {
  console.log("Namer:", namer);

  return (
    <div style={{background: `white`, backgroundSize:"cover",   overflowX: 'hidden',height:"120vh", fontFamily:"League Gothic"}}>
        <h1 style={{fontFamily:"League Gothic", fontSize:"18vw",position:"absolute",color:"#F77269", transform:"translate(08%,-64%)"}}>Products</h1>

        <div> <ImageSlider/></div>

        { namer ? 
        (<p style={{ fontSize: "3em", color: "black", position: "absolute", textAlign: "center", lineHeight: "90%", transform: "translate(25%,0%)", cursor: "pointer" }}>
                Sorry we are out of stock. We will email you when restock happens
        </p>) 
        :
        (<p style={{ fontSize: "3em", color: "black", position: "absolute", textAlign: "center", lineHeight: "90%", transform: "translate(20%,0%)", cursor: "pointer" }}
        onClick={() => {
          const originalXOffset = window.scrollX;
          state.login = true;
          state.merch = false;
          window.scrollTo(originalXOffset, 0);
        }}>
        Sorry we are out of stock. Sign up to get notifications for our next restock.</p>) 
        }
    </div>
  )
}

export default Merchpg2