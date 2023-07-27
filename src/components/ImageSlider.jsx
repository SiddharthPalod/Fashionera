import React, { useState } from 'react';

const ImageSlider = () => {
        const [mouseDownAt, setMouseDownAt] = useState(0);
        const [prevPercentage, setPrevPercentage] = useState(0);
        const [percentage, setPercentage] = useState(0);
        const [expandedImage, setExpandedImage] = useState(null);
        const [randomText, setRandomText] = useState('');
      
        const handleOnDown = (e) => setMouseDownAt(e.clientX);
      
        const handleOnUp = () => {
          setMouseDownAt(0);
          setPrevPercentage(percentage);
        };
      
        const handleOnMove = (e) => {
          if (mouseDownAt === 0) return;
      
          const mouseDelta = parseFloat(mouseDownAt) - e.clientX;
          const maxDelta = window.innerWidth / 2;
          const newPercentage = (mouseDelta / maxDelta) * -100;
      
          const nextPercentageUnconstrained = parseFloat(prevPercentage) + newPercentage;
          const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
      
          setPercentage(nextPercentage);
      
          const track = document.getElementById('image-track');
          track.style.transform = `translateX(${nextPercentage}%)`;
      
          const images = track.getElementsByClassName('image');
          for (const image of images) {
            image.style.objectPosition = `${100 + nextPercentage}% center`;
          }
                
        };
      
        const handleImageClick = (event) => {
          const targetImage = event.target;
          const imageRect = targetImage.getBoundingClientRect();
          const popupPosition = {
            top: imageRect.top + window.scrollY + imageRect.height / 2,
            left: imageRect.left + window.scrollX + imageRect.width / 2,
          };    
          setExpandedImage({
            src: targetImage.src,
            position: popupPosition,
          });
      
          setRandomText(generateRandomText());
        };
      
        const generateRandomText = () => {
            const texts = [
              "Fashion-forward and fabulous!",
              "Embrace your style, unleash your confidence.",
              "Dress to impress, express yourself!",
              "Stay classy, stay stylish.",
              "Fashion is art, wear it with heart.",
              "Elevate your look, elevate your mood.",
              "Dare to be bold, be fashion gold!",
              "Life is too short to wear boring clothes.",
              "Chase trends, set trends.",
              "Your style, your story.",
              "Fashion is what you buy; style is what you do with it.",
              "Walk like you own the runway.",
              "When in doubt, wear red (or your favorite color)!",
              "Be a fashion chameleon, change your look, change your vibe.",
              "Elegance never goes out of style.",
              ];
              const randomIndex = Math.floor(Math.random() * texts.length);
              return texts[randomIndex];
        };
      
        const handleClosePopup = () => {
          setExpandedImage(null);
          setRandomText('');      
        };

      
        return (
          <div>
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
            {expandedImage && (
              <div className="popup" style={{
                position: 'fixed',
                left: expandedImage.position.left,
                }}>
                <img className="expanded-image" src={expandedImage.src} alt="Expanded" />
                <div className="random-text">{randomText}</div>
                <button className="close-button" onClick={handleClosePopup}>
                  <span className='icon'>
                    <ion-icon name="close"></ion-icon>
                  </span>
                </button>
              </div>
            )}
        <img
          className="image"
          src="https://images.unsplash.com/photo-1544957992-20514f595d6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
          draggable="false"
          onClick={handleImageClick}
        />
        <img
          className="image"
          src="https://images.unsplash.com/photo-1462392246754-28dfa2df8e6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
          draggable="false"
          onClick={handleImageClick}
        />
        <img
          className="image"
          src="https://images.unsplash.com/photo-1572705824045-3dd0c9a47945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
          draggable="false"
          onClick={handleImageClick}
        />
        <img
          className="image"
          src="https://images.unsplash.com/photo-1603189343302-e603f7add05a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
          draggable="false"
          onClick={handleImageClick}
        />
        <img
          className="image"
          src="https://images.unsplash.com/photo-1616837874254-8d5aaa63e273?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
          draggable="false" 
          onClick={handleImageClick}
        />
        <img
          className="image"
          src="https://images.unsplash.com/photo-1585914924626-15adac1e6402?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
          draggable="false"
          onClick={handleImageClick}
        />
        <img
          className="image"
          src='https://images.unsplash.com/photo-1519748771451-a94c596fad67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM1fHxmYXNoaW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60'
          draggable="false"
          onClick={handleImageClick}
        />
        </div>
        </div>
    );
  };

  export default ImageSlider;