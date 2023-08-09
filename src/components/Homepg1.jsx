import React from 'react'
import { ad1 } from '../assets'
import state from '../pages'


function Homepg1() {
  return (
    <div style={{background:"white", color:"black", display:"block", overflow:"hidden"}}>
        <div style={{color:"white"}} onClick={() => {
            const originalXOffset = window.scrollX;
            state.merch = true;
            state.home = false;
            window.scrollTo(originalXOffset, 0);
        }}>
          <img src={ad1} style={{scale:"0.78"}}></img>
          <h2 style={{fontFamily:"Lusitana", position:"absolute",zIndex:"2",fontSize:"50px", textAlign:"center",fontWeight:"bolder" ,transform:"translate(250%,-550%)"}}>Sale ends soon</h2>
          <p style={{fontFamily:"Lusitana", position:"absolute",zIndex:"2",fontSize:"20px", textAlign:"center",transform:"translate(360%,-350%)"}}> get upto 20% off on<br/> accesories check the merch<br/> now </p>
        </div>
        <div style={{fontSize:"15vw", transform:"translate(10%,0%)"}}>GET STYLED</div>
        <div onClick={() => {
            const originalXOffset = window.scrollX;
            state.merch = true;
            state.home = false;
            window.scrollTo(originalXOffset, 0);
        }}  style={{background:"#FDD9D7", color:"black", width:"32vh", height:"24vh", transform:"translate(70vw,-170%)"}}>
            <p style={{fontFamily:"Lusitana", fontSize:"20px", textAlign:"center", lineHeight:"120%", transform:"translateY(50%)"}}>Check out our latest releases and get dazzled</p>
        </div>
    </div>
  )
}

export default Homepg1