import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import shoe from "./shoe.png"
import purse from "./purse.png"


const About = () => {
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
    head: {
      x: mousePosition.x - 70,
      y: mousePosition.y - 70,
      mixBlendMode: "difference",
      zIndex: "1",
    },
    img:{
      x: mousePosition.x - 230,
      y: mousePosition.y - 180,
      borderRadius: 0,  //make it rectangle
      height: 360,
      width: 460,
    },
  };

  const textEnter = () => {
    const topView = document.querySelector('#top-view');
    if (topView) {
        topView.style.visibility = 'hidden';
      }
  };

  const textLeave = () => {
    const topView = document.querySelector('#top-view');
    if (topView) {
      topView.style.visibility = 'visible';
    }
  };

  const imgEnter = () => {
    const shoe = document.querySelector('.abt-img');
    const image = document.querySelector('.abt-img-hidden');
    setCursorVariant("img")
    shoe.style.visibility = 'hidden';
    image.style.visibility = 'visible';
    image.style.zIndex = "1";
  };

  const imgLeave = () => {
    setCursorVariant("default")
    const shoe = document.querySelector('.abt-img');
    const image = document.querySelector('.abt-img-hidden');
    shoe.style.visibility = 'visible';
    image.style.visibility = 'hidden';
    image.style.zIndex = "-1";
  }

  const headEnter = () => setCursorVariant("head");
  const iconEnter = () => setCursorVariant("icon");
  const Leave = () => setCursorVariant("default");

  return (
    <div className="about" style={{ background: 'black' }}>
      <div className="signUp" style={{ color: "#D5E3EC" }} onMouseEnter={headEnter} onMouseLeave={Leave}>About Us</div>
      <div className='ig-icon'>
        <div style={{ transform: 'scale(2.5)' }} onMouseEnter={iconEnter} onMouseLeave={Leave}>
          <Icon icon="ion:logo-instagram" color="#A1C6E8" />
        </div>
        <h2 className='icon-txt'>Follow to get updates</h2>
      </div>
      <div className='go-icon'>
        <div style={{ transform: 'scale(2.5)' }} onMouseEnter={iconEnter} onMouseLeave={Leave}>
          <Icon icon="ion:logo-google" color="#A1C6E8" />
        </div>
        <h2 className='icon-txt2'>Fill this survey</h2>
      </div>

      <motion.div
        className='cursor'
        variants={variants}
        initial="default"
        animate={cursorVariant} />

      <div id='top-view' onMouseEnter={textEnter} onMouseLeave={textLeave} className='text-side'>      
        <p>We are the driving force behind one of the most prestigious and trend-setting fashion events in the world. Our passion for fashion, coupled with our dedication to excellence, has allowed us to curate unforgettable fashion experiences that captivate audiences and leave an indelible mark on the industry.</p>
      </div>
      
      <div id='bottom-view' className='text-side'>
        <p>We envision a world where fashion is more than just clothing; it's an expression of art, culture, and identity. Our mission is to create a platform that celebrates the diversity and creativity of the fashion world while providing opportunities for emerging talent to shine on a global stage.</p>
      </div>

      <img src={shoe} alt="Product-Image" className='abt-img' onMouseEnter={imgEnter}></img>
      <img src={purse} alt="Product-Image" className='abt-img-hidden' onMouseLeave={imgLeave}></img>

    </div>
  );
};

export default About;
