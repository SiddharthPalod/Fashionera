import React, { useState } from 'react';

const ImageSlider = () => {
    const [mouseDownAt, setMouseDownAt] = useState(0);
    const [prevPercentage, setPrevPercentage] = useState(0);
    const [percentage, setPercentage] = useState(0);
    const handleOnDown = (e) => setMouseDownAt(e.clientX);
    const handleOnUp = () => {
      setMouseDownAt(0);
      setPrevPercentage(percentage);
    };
  
    const handleOnMove = (e) => {
      if (mouseDownAt === 0) return;
      const mouseDelta = parseFloat(mouseDownAt) - e.clientX;
      const maxDelta = window.innerWidth/2;
      const newPercentage = (mouseDelta / maxDelta) * -100;
      const nextPercentageUnconstrained = parseFloat(prevPercentage) + newPercentage;
      const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -50.5);
      setPercentage(nextPercentage);
      const track = document.getElementById('image-track');
      track.style.transform = `translate(${nextPercentage}%, -50%)`;
      track.animate({
        transform: `translate(${nextPercentage}%, -50%)`
      }, { duration: 600, fill: "forwards" });
      
    };
  
    return (
    <div className='header'>
      <div
        id="image-track"
        data-mouse-down-at={mouseDownAt}
        data-prev-percentage={prevPercentage}
        onMouseDown={handleOnDown}
        onTouchStart={(e) => handleOnDown(e.touches[0])}
        onMouseUp={handleOnUp}
        onTouchEnd={(e) => handleOnUp(e.touches[0])}
        onMouseMove={handleOnMove}
        onTouchMove={(e) => handleOnMove(e.touches[0])}
      >

        <img
          className="image"
          src='https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGF0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60'
          draggable="false"
        />
        <img
          className="image"
          src='https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGF0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60'
          draggable="false"
        />
        <img
          className="image"
          src='https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFnfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60'
          draggable="false"
        />
        <img
          className="image"
          src='https://images.unsplash.com/photo-1578237493287-8d4d2b03591a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJhZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60'
          draggable="false"
        />
        <img
          className="image"
          src='https://images.unsplash.com/photo-1567473810954-507d59716c25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hhZGVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60'
          draggable="false" 
        />
        <img
          className="image"
          src='https://images.unsplash.com/photo-1621732673045-7ceccf8305fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHNoYWRlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60'
          draggable="false" 
        />
        <img
          className="image"
          src='https://images.unsplash.com/photo-1603808033192-082d6919d3e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60'
          draggable="false"
        />
        <img
          className="image"
          src='https://images.unsplash.com/photo-1597045566677-8cf032ed6634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60'
          draggable="false"
        />
        <img
          className="image"
          src='https://images.unsplash.com/photo-1557170334-a9632e77c6e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVyZnVtZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60'
          draggable="false"
        />
        <img
          className="image"
          src='https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60'
          draggable="false"
        />
    </div>
    </div>
  );
};

export default ImageSlider;

