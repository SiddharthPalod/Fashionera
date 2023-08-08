import React from 'react';
import { Events, Intro, Festpg2,Festpg4} from '../components';
import state from '.';
import {useSnapshot} from "valtio";
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';


const Page1 = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro &&(
                <motion.div
                key="modal"
                initial={{ scale: 1.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 0.2 ,ease:'easeInOut'}} 
              >
      <Intro />
      <Festpg2/>
      <div className="side">
        <h1 className='ev-title' style={{fontFamily:"League Gothic", fontSize:"200px", transform:"translateX(1%)", wordSpacing:"-2%"}}><span className='magic'>Events</span></h1>
      </div>
      <Events handleClick={()=> {state.intro = false, state.event = true}} />
      <Festpg4/>
      </motion.div>
    )}
    </AnimatePresence>
  );
};

export default Page1;
