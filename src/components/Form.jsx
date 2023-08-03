import React, { useState } from "react";
import loginbg from "./loginbg.png";

const Form1 = () => {
  const [active, setActive] = useState(false);

  const handleRegisterClick = () => {
    setActive(true);
  };

  const handleLoginClick = () => {
    setActive(false);
  };

  return (
  <div className="form" style={{backgroundImage: `url(${loginbg})`}}>
      <div className="signUp">Sign Up</div>

      <div className="signup-text1">
          <p className="label">
          <span style={{color:"black"}}>
        Whether you&#39;re a designer, retailer, or fashion-tech innovator, FashionFest provides unparalleled exposure
        for your brand. Showcase your designs, collaborate with other creatives, and expand your business horizons.
        </span>
          </p>
      </div>

      <div className="signup-text2">
          <p className="label">
            <span style={{color:"#cbd9e2"}}>
              FashionFest is the place to be for trendsetters and influencers seeking fresh content and a front-row seat
              to the latest trends. Capture stunning moments, curate engaging content, and be a part of the fashion
              conversation that captivates millions.
            </span>
          </p>
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
              <a className="register-link" onClick={handleRegisterClick}>
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
              <a className="login-link" onClick={handleLoginClick}>
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
