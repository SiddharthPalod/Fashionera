
import React, { useState } from "react";
import { loginbg } from "../assets";

const Form1 = () => {
  const [active, setActive] = useState(false);

  const handleRegisterClick = () => {
    setActive(true);
  };

  const handleLoginClick = () => {
    setActive(false);
  };

  return (
  <div className="form" id="signup" style={{background:`#FA6CB2` }}>
      <div className="form-text">Be part of <br/> our Family</div>

    <div className={`wrapper${active ? " active" : ""}`}>
      <div className="form-box login" style={{ transform: `translateX(${active ? "-400px" : "0"})` }} >
        <h2>Login</h2>
        <form action="#">
          <div className="input-box">
            <input type="text" required />
            <label>Username</label>
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
