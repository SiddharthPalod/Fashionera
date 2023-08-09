import React from 'react'
import { Homepg1, Homepg2 , Homepg3, Homepg4 } from '../components'
import state from '.';
import {useSnapshot} from "valtio";
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

function Home() {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
    {snap.home && ! snap.intro && !snap.about && !snap.login && !snap.event &&(
              <motion.div
              key="modal"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.2 ,ease:'easeInOut'}} 
            >
    <div style={{fontFamily:"League Gothic"}}>
        <Homepg1/>
        <Homepg2/>
        <Homepg3/>
        <Homepg4/>
    </div>
    </motion.div>)}
    </AnimatePresence>
  )
}

export default Home