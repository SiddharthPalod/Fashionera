import React, { useState } from "react";

const Form1 = () => {
  const [active, setActive] = useState(false);

  const handleRegisterClick = () => {
    setActive(true);
  };

  const handleLoginClick = () => {
    setActive(false);
  };

  return (
    <div className="form-container" style={{  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'   }}>
      <div className="sign-up-box">
      <div className="box">
        <p>Whether you're a designer, retailer, <br/>
          or fashion-tech innovator, FashionFest <br/>
          provides unparalleled exposure for your brand.<br/> 
          Showcase your designs, collaborate with other <br/>
          creatives, and expand your business horizons.</p>
      </div>
      <div className="box2">
        <p>
        FashionFest is the place to be for trendsetters<br/>
        and influencers seeking<br/>
        fresh content and a front-row seat<br/>
        to the latest trends. Capture stunning <br/>
        moments, curate engaging content, <br/>
        and be a part of the fashion conversation<br/>
         that captivates millions.<br/>
        </p>
      </div>

      </div>


    <div className={`wrapper${active ? " active" : ""}`}>
      <div className="form-box login" style={{ transform: `translateX(${active ? "-400px" : "0"})` }} >
        <h2>Login</h2>
        <form action="#">
          <div className="input-box">
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="input-box">
            <input type="password" required />
            <label>Password</label>
          </div>
          <button type="submit" className="btn">
            Login
          </button>
          <div className="login-register">
            <p>
              Don't have an account?
              <a href="#" className="register-link" onClick={handleRegisterClick}>
                Sign-Up
              </a>
            </p>
          </div>
        </form>
      </div>

      <div className="form-box register" style={{ transform: `translateX(${active ? "0" : "400px"})` }}>
        <h2>Sign-Up</h2>
        <form action="#">
          <div className="input-box">
            <input type="text" required />
            <label>Username</label>
          </div>
          <div className="input-box">
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="input-box">
            <input type="password" required />
            <label>Password</label>
          </div>
          <button type="submit" className="btn">
            Sign-Up
          </button>
          <div className="login-register">
            <p>
              Already have an account?
              <a href="#" className="login-link" onClick={handleLoginClick}>
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Form1;
