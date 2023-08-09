import React, { useEffect, useState } from 'react';
import { NewsItem } from '../components';
import state from '.';
import {useSnapshot} from "valtio";
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

function News() {

  useEffect(() => {
    const pages = document.getElementsByClassName('page');
    
    const handlePageClick = function () {
      if (this.pageNum % 2 === 0) {
        this.classList.remove('flipped');
        this.previousElementSibling.classList.remove('flipped');
      } else {
        this.classList.add('flipped');
        this.nextElementSibling.classList.add('flipped');
      }
    };

    for (let i = 0; i < pages.length; i++) {
      const page = pages[i];
      if (i % 2 === 0) {
        page.style.zIndex = pages.length - i;
      }
      page.pageNum = i + 1;
      page.addEventListener('click', handlePageClick);
    }
  });
    
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
    {snap.news && !snap.home &&(
              <motion.div
              key="modal"
              initial={{ scale: 1.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 0.2 ,ease:'easeInOut'}}
              style={{background:"black"}} 
            >
    <div className='newsbg'>
        <h1 className='title'>Fashion Trends</h1>

        <div className="book">
            <div id="pages" className="pages">
                <div className="page" style={{
                    backgroundColor:"#EEEEEE",
                    }}>
                    <div className='row'>
                        <div className='col-md-3'>
                            <NewsItem title='' description=''/>
                        </div>
                        <div className='col-md-3'>
                            <NewsItem title='' description=''/>
                        </div>
                        <div className='col-md-3'>
                            <NewsItem title='' description=''/>
                        </div>
                    </div>


                </div>
                <div className="page" style={{
                    backgroundColor:"#EEEEEE",
                }}>

                </div>
                <div className="page" style={{
                    backgroundColor:"#EEEEEE",
                }}>

                </div>
                <div className="page" style={{
                    backgroundColor:"#EEEEEE",
                }}>

                </div>
                <div className="page" style={{
                    backgroundColor:"#EEEEEE",
                }}>

                </div>
                <div className="page" style={{
                    backgroundColor:"#EEEEEE",
                }}>

                </div>            
            </div>
        </div>
    </div>
      </motion.div>)}
    </AnimatePresence>
  )
}

export default News

