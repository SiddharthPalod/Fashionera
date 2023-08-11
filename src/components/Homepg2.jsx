import React from 'react'
import state from '../pages'


function Homepg2() {
  return (
    <div style={{background:"white", color:"black", display:"grid", height:"150vh",overflow:"hidden"}}>
        <div style={{display:"flex"}}>
        <div style={{width:"4%"}}/>
        <div style={{ width:"20%",fontFamily:"Bree Serif", textAlign:"center",fontSize:"4vh",height:"100vh",backgroundSize:"cover",backgroundImage: "url('https://images.unsplash.com/photo-1617922001439-4a2e6562f328?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60')" }}><p style={{transform:"translateY(1650%)"}}>Celebrity Style</p></div>
        <div style={{width:"2%"}}/>
        <div style={{ width:"20%",fontFamily:"Bree Serif", textAlign:"center",fontSize:"4vh",height:"100vh",backgroundSize:"cover",backgroundImage: "url('https://images.unsplash.com/photo-1581338834647-b0fb40704e21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60')" }}><p style={{transform:"translateY(1650%)"}}>Models</p></div>
        <div style={{width:"2%"}}/>
        <div style={{ width:"20%",fontFamily:"Bree Serif", textAlign:"center",fontSize:"4vh",height:"100vh",backgroundSize:"cover",backgroundImage: "url('https://images.unsplash.com/photo-1493028538525-80c9e5798a3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHRyZW5kc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60')" }}><p style={{transform:"translateY(1650%)"}}>Trends</p></div>

        <div style={{width:"2%"}}/>
        <div style={{display:"block"}}>
        <div style={{fontSize:"15vw", transform:"translate(0%,40%)"}}>NEWS</div>
        <div style={{background:"#FDD9D7", color:"black", width:"12vw", height:"6vh", borderRadius:"20px",transform:"translate(50%,150%)", cursor:"pointer"}} onClick={() => {
            const originalXOffset = window.scrollX;
            state.news = true;
            state.home = false;
            window.scrollTo(originalXOffset, 0);
        }}>
            <p style={{fontFamily:"Lusitana", fontSize:"14px", fontWeight:"bolder",textAlign:"center", lineHeight:"120%", transform:"translateY(50%)"}}>find out what’s in</p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Homepg2