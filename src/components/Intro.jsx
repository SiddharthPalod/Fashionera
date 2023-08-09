import React from "react";
import { bgimg } from "../assets";
import { motion } from "framer-motion";

const Intro = () => {
    const containerVariants = {
        hidden: { opacity: 0, x: "-500%" },
        visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeInOut" } },
    };
    const textVariants = {
        hidden: { opacity: 0, x: "-20%" },
        visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeInOut" } },
    };
    return (
        <div className="header" style={{backgroundImage: `url(${bgimg})`}}>
            <div className="header-text">
                <h1 style={{fontFamily:"Pacifico"}}>Confihara</h1>
                <motion.div className="line" variants={containerVariants} initial="hidden" animate="visible">  </motion.div>
                <motion.div variants={textVariants} initial="hidden" animate="visible"><h2>19 Nov 2023</h2></motion.div>
                <h3>Login in to get notified when<br/> tickets booking starts</h3>
            </div>
        </div>
    );
};

export default Intro;
