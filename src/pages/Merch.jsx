import React from 'react'
import { Merchpg1,Merchpg2 } from '../components'
import state from '.'
import { useSnapshot } from 'valtio'
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';


function Merch() {
  const snap = useSnapshot(state);    
  return (
    <AnimatePresence>
    {snap.merch && !snap.home &&(
                <motion.div
                key="modal"
                initial={{ scale: 1.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 0.2 ,ease:'easeInOut'}} >
    <div>
        <Merchpg1/>
        <Merchpg2/>
    </div>
    </motion.div>)}
    </AnimatePresence>
  )
}

export default Merch