import React, { useEffect, useState } from 'react';
import state from '../pages';

const CountdownTimer = () => {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  const now = new Date();
  const yr = now.getFullYear();
  const confiharaDate = `11/19/${yr}`; // mm/dd/yy format
  const countDown = new Date(confiharaDate).getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [showCountdown, setShowCountdown] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDown - now;

      setTimeLeft({
        days: Math.floor(distance / day),
        hours: Math.floor((distance % day) / hour),
        minutes: Math.floor((distance % hour) / minute),
        seconds: Math.floor((distance % minute) / second),
      });

      if (distance < 0) {
        clearInterval(interval);
        setShowCountdown(false); 
      }
      if (distance > 0) {
        setShowCountdown(true); 
      }
    }, second);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="counter-container" style={{transform:"translateY(-50%)"}}>
      <h1 style={{fontFamily:"Pacifico", textAlign:"center",lineHeight:"270%",fontSize:"5vw"}}>{showCountdown ? "Confihara Countdown" : "See you next year"}</h1>
      {showCountdown ? (
        <div id="countdown" style={{transform:"translateY(-30%)"}}>
          <ul>
            <li>
              <span>{timeLeft.days}</span>days
            </li>
            <li>
              <span>{timeLeft.hours}</span>Hours
            </li>
            <li>
              <span>{timeLeft.minutes}</span>Minutes
            </li>
            <li>
              <span>{timeLeft.seconds}</span>Seconds
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

function Homepg3() {
  return (
    <div style={{ height: "130vh", display:'grid',background: "#FA6CB2", color: "black" }}>
        <CountdownTimer />
        <div style={{fontSize:"15vw", position:"absolute", transform:"translate(10%,50%)" }}>Confihara</div>
        <div style={{ width:"50%",fontFamily:"Bree Serif", textAlign:"center",transform:"translate(90%,-100%)",fontSize:"4vh",height:"60vh",backgroundSize:"cover",backgroundImage: "url('https://images.unsplash.com/photo-1653569397438-60c2a42a265b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGZlc3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60')" }}/>
        <p className='homepg3-p'>Be part of our annual fashion fest<br/>on<b>19.Nov.2023</b></p>
        <div className='homepg3-btn' onClick={() => {
            const originalXOffset = window.scrollX;
            state.intro = true;
            state.home = false;
            window.scrollTo(originalXOffset, 0);
        }}>
          <p style={{transform:"translateY(-60%)"}}> check it out</p>
        </div>
        <p className='homepg3-p'>at Peacock Garden,<br/> Jaipur,Rajasthan,India</p>
    </div>
  );
}

export default Homepg3;
