import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { shoe, qrcode} from '../assets';
import React from 'react';
import { useSnapshot } from 'valtio';
import state from '../pages';
import { AnimatePresence } from 'framer-motion';

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
      width: 250,
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

  const headEnter = () => setCursorVariant("head");
  const iconEnter = () => setCursorVariant("icon");
  const Leave = () => setCursorVariant("default");
  const snap  = useSnapshot(state);
  const handleClick = () => {
    state.intro = true;
    state.about = false;
  };


  return (
    <AnimatePresence>
    {!snap.intro && snap.about && !snap.login &&(
      <motion.div
      key="modal"
    >
    <div className="about" style={{ background: '#F77269', transform:"translateY(0%)" }}>
      <div className="signUp" style={{ color: "#fff" }} onMouseEnter={headEnter} onMouseLeave={Leave}>About Us</div>
      <div className='ig-icon'>
        <div style={{ transform: 'scale(2.5)' }} onMouseEnter={iconEnter} onMouseLeave={Leave}>
          <a href='https://www.instagram.com/siddharthpalod/' target='_blank' rel='noopener noreferrer'>
          <Icon icon="ion:logo-instagram" color="#fff" />
          </a>
        </div>
        <h2 className='icon-txt'>Follow to get updates</h2>
      </div>
      <div className='go-icon'>
        <div style={{ transform: 'scale(2.5) translateX(-12%)' }} onMouseEnter={iconEnter} onMouseLeave={Leave}>
          <a href='https://docs.google.com/forms/d/e/1FAIpQLSewJGYUu2t7tK1CA8gwMOC3YJMSDBcoXnTROA7N3ATfXtJlug/viewform' target='_blank' rel='noopener noreferrer'>
          <Icon icon="ion:logo-google" color="#fff" />
          </a>
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

      <img src={shoe} alt="Product-Image" className='abt-img'></img>
      <p className='abt-hid-text'>  COUPON: QTP140D </p>
      <img src={qrcode} alt="Product-Image" className='abt-img-hid'></img>

    </div>
    </motion.div>
    )}
    </AnimatePresence>
  );
};

export default About;
