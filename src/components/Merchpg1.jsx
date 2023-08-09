import React from 'react'
import { merchbg } from '../assets'

function Merchpg1() {
  return (
    <div style={{backgroundImage: `url(${merchbg})`, backgroundSize:"cover", height:"100vh", fontFamily:"Lusitana"}}>
        <h1 style={{fontFamily:"League Gothic", fontSize:"20vw", position:"absolute", transform:"translate(189%,-40%)"}}>Merch</h1>
        <p style={{fontSize:"1.1em", color:"black",position:"absolute", textAlign:"center",lineHeight:"90%", transform:"translate(415%,650%)"}}>Showoff your style with wide<br/> collection of our very own<br/> products</p>
    </div>
  )
}

export default Merchpg1