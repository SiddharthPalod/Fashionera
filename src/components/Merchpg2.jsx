import React from 'react'
import ImageSlider from './ImageSlider'

function Merchpg2() {
  return (
    <div style={{background: `white`, backgroundSize:"cover",   overflowX: 'hidden',height:"120vh", fontFamily:"League Gothic"}}>
        <h1 style={{fontFamily:"League Gothic", fontSize:"18vw",position:"absolute",color:"#F77269", transform:"translate(08%,-64%)"}}>Products</h1>

        <div> <ImageSlider/></div>

        <p style={{fontSize:"3em", color:"black",position:"absolute", textAlign:"center",lineHeight:"90%", transform:"translate(20%,0%)"}}>Sorry we are out of stock. Sign up to get notifications for our next restock.</p>
    </div>
  )
}

export default Merchpg2