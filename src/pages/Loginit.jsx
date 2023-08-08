import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import { useSnapshot } from 'valtio';
import state from '../pages';
import { Form1, Features } from '../components';

const Loginit = () => {
  const snap = useSnapshot(state);
  const handleClick = () => {
    state.intro = true;
    state.login = false;
  };
  return (
    <AnimatePresence>
      {!snap.intro && !snap.about && snap.login && (
        <motion.div
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Features/>
          <Form1/>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loginit;
