import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from '../pages';
import { company } from '../assets';
import { auth } from '../firebase';
import { Icon } from '@iconify/react';

const Navbar = ({name}) => {
    const snap = useSnapshot(state);
    const [showNav, setShowNav] = useState(false);
    const [wobble,setWobble] = useState(0);
    const toggleNav = () => {
        setShowNav(!showNav);
        setWobble(1);
    };

    const handleLogout = async () => {
        try {
            await auth.signOut(); // Sign out the user from Firebase
            state.name = null;
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };
    

    return (
        <AnimatePresence>
            {snap.nav && (
                <motion.div
                    key="modal"
                    initial={{ scale: 1.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 1.5, opacity: 0 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                >
                    <div className='navbar'>
                        <motion.div className="nav-btn" onClick={toggleNav}>
                            <img className='btn-img' src={company}  onAnimationEnd={() => setWobble(0)} wobble={wobble} />
                        </motion.div>
                        {showNav && (
                            <div>
                            <motion.div className='nav-box'
                                initial={{ width: '0%' }}
                                animate={{ width: '60%'}}
                                transition={{ duration: 0.8, ease: 'easeInOut' }}  
                            />
                            <motion.div className='nav-items'>
                                <div style={{cursor:"pointer"}} onClick={() => {
                                    const originalXOffset = window.scrollX;
                                    for (const key in state) {
                                        if (key == 'home' || key == 'nav') {
                                            state[key] = true;
                                        }
                                        else{
                                            state[key] = false;
                                        }
                                    }
                                    window.scrollTo(originalXOffset, 0);}}
                                >Home</div>
                                <div  style={{cursor:"pointer"}} onClick={() => {
                                    const originalXOffset = window.scrollX;
                                    for (const key in state) {
                                        if (key == 'intro' || key == 'nav') {
                                            state[key] = true;
                                        }
                                        else{
                                            state[key] = false;
                                        }
                                    }
                                    window.scrollTo(originalXOffset, 0);}}>Fests</div>
                                <div  style={{cursor:"pointer"}} onClick={() => {
                                    const originalXOffset = window.scrollX;
                                    for (const key in state) {
                                        if (key == 'news' || key == 'nav') {
                                            state[key] = true;
                                        }
                                        else{
                                            state[key] = false;
                                        }
                                    }
                                    window.scrollTo(originalXOffset, 0);}}>News</div>
                                <div  style={{cursor:"pointer"}} onClick={() => {
                                    const originalXOffset = window.scrollX;
                                    for (const key in state) {
                                        if (key == 'merch' || key == 'nav') {
                                            state[key] = true;
                                        }
                                        else{
                                            state[key] = false;
                                        }
                                    }
                                    window.scrollTo(originalXOffset, 0);}}>Merch</div>
                                <div  style={{cursor:"pointer"}} onClick={() => {
                                    const originalXOffset = window.scrollX;
                                    for (const key in state) {
                                        if (key == 'about' || key == 'nav') {
                                            state[key] = true;
                                        }
                                        else{
                                            state[key] = false;
                                        }
                                    }
                                    window.scrollTo(originalXOffset, 0);}}>About Us</div>
                            </motion.div>
                            </div>
                        )}
                        {!showNav && (
                            <div>
                                <h1 style={{ fontFamily: "Bree Serif", fontWeight: "bolder",fontSize: "3em", margin:"60vmin" }}> 
                                    FASHIONERA</h1>
                            </div>
                        )} 
                        {!showNav && (
                            <div>
                                <div className="nav-login"
                                onClick={() => {
                                    const originalXOffset = window.scrollX;
                                    for (const key in state) {
                                        if (key == 'login' || key == 'nav') {
                                            state[key] = true;
                                        }
                                        else{
                                            state[key] = false;
                                        }
                                    }
                                    window.scrollTo(originalXOffset, 0);}}
                                >
                                    <ion-icon name="person-outline" style={{transform:"translate(0vmin,22%)"}}></ion-icon>
                                    {name?
                                    (<span style={{fontSize:"0.7em"}}>{name} <button className='logout-btn' onClick={handleLogout}> 
                                    <Icon icon="ion:log-out" color="#FA6CB2" />
                                    </button></span>
                                    ):
                                    (<span className="icon-txt3" >Login/SignUp</span>)
                                    }
                                </div>
                            </div>
                        )} 

                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default Navbar;
