import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';


const Festpg4 = () => {

    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0,
      });
      const [cursorVariant, setCursorVariant] = useState("default");
      
    useEffect(() => {
        const mouseMove = e => {
          setMousePosition({
            x: e.clientX,
            y: e.clientY,
          });
        };
        window.addEventListener("mousemove", mouseMove);
        return () => {
          window.removeEventListener("mousemove", mouseMove);
        };
      }, []);

      const variants = {
        default: {
          height: 140,
          width: 140,
          x: mousePosition.x - 70,
          y: mousePosition.y - 70,
        },
        icon: {
          height: 80,
          width: 166,
          x: mousePosition.x - 40,
          y: mousePosition.y - 40,
          borderRadius: "0",
          mixBlendMode: "difference",
        },
    };

    const iconEnter = () => setCursorVariant("icon");
    const Leave = () => setCursorVariant("default");
  return (
    <div className="about" style={{ background: '#FA6CB2', transform:"translateY(0%)", cursor:"auto" }}>
      <div className="signUp" style={{ color: "#fff", fontFamily:"League Gothic", transform:"translateY(50%)", fontSize:"150px" }} >Get in touch</div>
      <p style={{transform:"translate(25%,90%)", textAlign:"center" ,fontFamily:"League Gothic", fontSize:"28px", lineHeight:"95%"}}>
      If you're as excited as we are about the intersection of fashion and <br/> artistry, we'd love to hear from you. Feel free to reach out to us with <br/> any inquiries, partnership opportunities, or to share your thoughts.<br/> 
      Follow us on social media for the latest updates, and be sure to mark <br/>your calendars for the upcoming Confihara event – a rendezvous <br/>
      where fashion meets artistry in the most extraordinary way.
      </p>
      <div className='ig-icon'>
        <div style={{ transform: 'scale(2.5)' }} onMouseEnter={iconEnter} onMouseLeave={Leave}>
        <a href='https://www.instagram.com/siddharthpalod/' target='_blank' rel='noopener noreferrer'>
            <Icon icon="ion:logo-instagram" color="#fff" />
            </a>
        </div>
        <h2 className='icon-txt' style={{  color: "white"}}>Follow to get updates</h2>
      </div>

      <div className='go-icon'>
        <div style={{ transform: 'scale(2.5)' }} onMouseEnter={iconEnter} onMouseLeave={Leave}>
            <Icon icon="ion:mail-outline" color="#fff" />
        </div>
        <h2 className='icon-txt2' style={{  color: "white"}}>Mail us your queries</h2>
      </div>
    </div>
  );
};

export default Festpg4;
