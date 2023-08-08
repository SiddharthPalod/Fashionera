import React from 'react';
import { useSnapshot } from 'valtio';
import state from '../pages';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';


const Eventpg = () => {
  const handleMouseMove = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
  
    const xDecimal = mouseX / window.innerWidth;
    const yDecimal = mouseY / window.innerHeight;
  
    const gallery = document.getElementById("gallery");
    const maxX = gallery.offsetWidth - window.innerWidth;
    const maxY = gallery.offsetHeight - window.innerHeight;
  
    const panX = maxX * xDecimal * -1;
    const panY = maxY * yDecimal * -1;
  
    gallery.animate(
      { transform: `translate(${panX}px, ${panY}px)` },
      { duration: 5000, fill: "forwards", transition: 'transform 8s ease' }
    );
  };
  const snap  = useSnapshot(state);
  const handleClick = () => {
    state.intro = true;
  };


  return (
    <AnimatePresence>
      {!snap.intro && !snap.about && !snap.login && snap.event &&(
        <motion.div
        key="modal"
      >
    <div id="gallery" onMouseMove={handleMouseMove}>
        <div className='mtile'>
            <p style={{transform: 'translate(-104%, -40%)', fontSize:"1.2vw", fontWeight: 'bold',position:"absolute"}}> Fashion Gala Opening Night </p>
            <p style={{transform: 'translate(-106%, 40%)', fontSize:"1vw", lineHeight:"95%",position:"absolute",width:"80%", textAlign:'justify',}}> The runway show dazzles the audience with breathtaking couture pieces, representing diverse cultures and artistic inspirations. </p>
            <img src='https://images.unsplash.com/photo-1554412933-514a83d2f3c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60'/>
        </div>
        <div className='mtile'>
          <p style={{transform: 'translate(110%, 20%)', fontSize:"1.2vw", fontWeight: 'bold',position:"absolute"}}> Art Meets Fashion Exhibition </p>
          <p style={{transform: 'translate(104%, 80%)', fontSize:"1vw", lineHeight:"95%",position:"absolute", textAlign:'justify',}}> Emerging artists get a chance to display their creativity and innovative ideas through their unique collaborations with fashion designers. </p>
          <img src='https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60'/>

        </div>
        <div className='mtile'>
            <p style={{transform: 'translate(-106%, 300%)', fontSize:"1.2vw", fontWeight: 'bold',position:"absolute"}}> FashionTech Innovation Show  </p>
            <p style={{transform: 'translate(-112%, 160%)', fontSize:"1vw",width:"60%" ,lineHeight:"95%",position:"absolute", textAlign:'justify',}}> From smart fabrics and interactive accessories to 3D-printed garments, the runway comes alive with innovative fashion-forward creations. </p>

            <img src="https://images.unsplash.com/photo-1572705824045-3dd0c9a47945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"/>
        </div>
        <div className='mtile'>
            <p style={{transform: 'translate(-110%, 200%)', fontSize:"1.2vw", fontWeight: 'bold',position:"absolute"}}> International Designer Showcase </p>
            <p style={{transform: 'translate(-107%, 120%)', fontSize:"1vw",width:"60%", lineHeight:"95%",position:"absolute", textAlign:'justify',}}> It's a captivating display of multicultural influences and artistic expressions, providing an opportunity for international designers to gain recognition on a global stage. </p>

            <img src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"/>
        </div>
        <div className='mtile'>
            <p style={{transform: 'translate(-110%, 500%)', fontSize:"1.2vw", fontWeight: 'bold',position:"absolute"}}> Fashion Forum and Panel Discussions </p>
            <p style={{transform: 'translate(-104%, 250%)', fontSize:"1vw", width:"50%",lineHeight:"95%",position:"absolute", textAlign:'justify',}}> Renowned fashion designers, stylists, influencers, and industry experts come together for panel discussions on topics like sustainability, inclusivity in fashion, the impact of social media, and the future of fashion. </p>

            <img src="https://images.unsplash.com/photo-1585914924626-15adac1e6402?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"/>
        </div>
        <div className='mtile'>
            <p style={{transform: 'translate(200%, 0%)', fontSize:"1.2vw", fontWeight: 'bold',position:"absolute"}}> Fashion Film Festival </p>
            <p style={{transform: 'translate(180%, 30%)', fontSize:"1vw", lineHeight:"95%",width:"60%",position:"absolute", textAlign:'justify',}}> Filmmakers and designers collaborate to create visual masterpieces that explore the creative journey behind fashion collections and highlight the industry's evolution. </p>

            <img src='https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60'/>
        </div>
        <div className='mtile'>
            <p style={{transform: 'translate(-130%, 500%)', fontSize:"1.2vw", fontWeight: 'bold',position:"absolute"}}> Fashion Awards Night </p>
            <p style={{transform: 'translate(-102%, 200%)', fontSize:"1vw", lineHeight:"95%",position:"absolute", textAlign:'justify',}}> Awards are presented in categories such as Best Designer, Emerging Talent, Fashion Icon, and Lifetime Achievement, recognizing the contribution of individuals who have shaped the world of fashion. </p>

            <img src='https://images.unsplash.com/photo-1519748771451-a94c596fad67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM1fHxmYXNoaW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60'/>
        </div>
        <div className='mtile'>
            <p style={{transform: 'translate(35%, -500%)', fontSize:"1.2vw", fontWeight: 'bold',position:"absolute"}}> Eco-Fashion Runway </p>
            <p style={{transform: 'translate(0%, -150%)', fontSize:"1vw", lineHeight:"95%",position:"absolute", textAlign:'justify',}}> Renowned eco-conscious designers present collections crafted from organic, recycled, and upcycled materials, proving that fashion can be both chic and environmentally responsible.</p>

            <img src='https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'/>
        </div>
        <div className='mtile'>
            <p style={{transform: 'translate(205%, -70%)', fontSize:"1.2vw", fontWeight: 'bold',position:"absolute"}}> Street Style Showdown </p>
            <p style={{transform: 'translate(175%, 20%)', fontSize:"1vw",width:"60%", lineHeight:"95%",position:"absolute", textAlign:'justify',}}>  Participants showcase their unique streetwear ensembles and fashion-forward looks, celebrating individuality and creativity in everyday fashion. </p>
        <img src="https://images.unsplash.com/photo-1462392246754-28dfa2df8e6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"/>

        </div>

    </div>

    <div className='event-btn' onClick={handleClick}>
      Go-back
    </div>
    </motion.div>

    )}
    </AnimatePresence>
  )
};

export default Eventpg;
