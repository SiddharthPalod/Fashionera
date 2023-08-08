import React, { useEffect } from 'react';
import { company } from '../assets';
import state from '.';
import { useSnapshot } from 'valtio';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

const Preload = () => {
  const x = 5; 
  const snap = useSnapshot(state);

  useEffect(() => {
    const timer = setTimeout(() => {
      state.intro = true; }, x * 1000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!snap.intro && !snap.about && !snap.login && !snap.event && (
        <motion.div
          key="modal"
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
        >
          <div style={{ textAlign: 'center', background: "#fff", height: "100vh", overflow: "hidden" }}>
            <h1 style={{ fontFamily: "Bree Serif", fontSize: "50px", transform: "translateY(30%)" }}>
              <span className='magic'>Welcome to Fashionera</span>
            </h1>

            <motion.div animate={{ transform: 'rotate(360deg)' }} transition={{ duration: 1, repeat: Infinity }}>
              <img src={company} style={{ transform: 'scale(0.5)' }} alt="Company Logo" />
            </motion.div>

            <div style={{ width: '70%', height: '6%', backgroundColor: '#FA6CB2', position: 'absolute', transform: "translate(25%,50%)", borderRadius: '12px', overflow: 'hidden' }}>
              <div id="myBar" style={{ height: '100%', backgroundColor: '#F77269', position: 'absolute', animation: `progressAnimation ${x}s linear forwards`, borderRadius: '12px', }}></div>
            </div>

            <style>
              {`
                @keyframes progressAnimation {
                  0% {
                    width: 0;
                  }
                  100% {
                    width: 100%;
                  }
                }
              `}
            </style>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preload;
