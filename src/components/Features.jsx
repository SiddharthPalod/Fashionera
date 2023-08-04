import React, { useRef, useEffect } from 'react';

const Features = () => {
  const leftRef = useRef(null);
  const handleMove = e => {
    if (leftRef.current) {
      leftRef.current.style.width = `${(e.clientX / window.innerWidth) * 100}%`;
    }
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('touchmove', e => handleMove(e.touches[0]));

    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('touchmove', e => handleMove(e.touches[0]));
    };
  }, []);

  return (
    <div>
      <div id="container">
        <div id="left-side" className="side" ref={leftRef}>
        <h2 className="title">Features</h2>
        
        </div>
      </div>
      <div id="container">
        <div id="right-side" className="side">
        <div className="content">
            <div className="pair">
              <h1>1</h1>
              <p>Exclusive Access to Pop-Up Boutiques</p>
            </div>
            <div className="pair">
              <h1>2</h1>
              <p>Awe-Inspiring Fashion Showcases</p>
            </div>
            <div className="pair">
              <h1>3</h1>
              <p>Unparalleled Networking Opportunities</p>
            </div>
            <div className="pair">
              <h1>4</h1>
              <p>Interactive Workshops and Seminars</p>
            </div>
            <div className="pair">
              <h1>5</h1>
              <p>Glamorous After-Party</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
