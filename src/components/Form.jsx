import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword , updateProfile} from "firebase/auth";
import { auth } from "../firebase"; // Make sure you have your firebase configuration here

const Form1 = () => {
  const [active, setActive] = useState(false);

  const handleRegisterClick = () => {
    setActive(true);
  };

  const handleLoginClick = () => {
    setActive(false);
  };

// loginned user name 
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("Username", user);
        setUserName(user.displayName);
        console.log("User:", userName);
      } else {
        console.log("No user");
        setUserName("");
      }
    });
  }, []);


// login
  const [valuet, setValuet] = useState({
    email: "",
    pass: "",
  });
  const [errorMsgt, setErrorMsgt] = useState("");

  const handleSubmissiont = () => {
    if (!valuet.email || !valuet.pass) {
      setErrorMsgt("Fill all fields");
      return;
    }
    setErrorMsgt("");
    signInWithEmailAndPassword(auth, valuet.email, valuet.pass)
      .then(async (res) => {
        window.location.reload(); // Refresh the whole website
      })
      .catch((err) => {
        setErrorMsgt(err.message);
      });
  };
//signup
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        setUserName(values.name); 
        setTimeout(() => {
          window.location.reload();
        }, 500);      
      })
      .catch((err) => {
        setErrorMsg(err.message);
      });
  };

  return (
  <div className="form" id="signup" style={{background:`#FA6CB2` }}>
      {userName ? 
        (<div className="form-text">Welcome back <br/> {userName}</div>):
        (<div className="form-text">Be part of <br/> our Family</div>)}

    <div className={`wrapper${active ? " active" : ""}`}>
      <div className="form-box login" style={{ transform: `translateX(${active ? "-400px" : "0"})` }} >
        <h2>Login</h2>
        <form action="#">
          <div className="input-box">
            <input type="email" required           onChange={(event) =>
            setValuet((prev) => ({ ...prev, email: event.target.value }))
          }/>
            <label>Email</label>
          </div>
          <div className="input-box" >
            <input type="password" required           onChange={(event) =>
            setValuet((prev) => ({ ...prev, pass: event.target.value }))
          }/>
            <label>Password</label>
          </div>
          <b>{errorMsgt}</b>
          <button type="submit" className="btn" onClick={handleSubmissiont}
              >
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
            <input type="text" required            onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }/>
            <label>Username</label>
          </div>
          <div className="input-box">
            <input type="email" required onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }             />
            <label>Email</label>
          </div>
          <div className="input-box">
            <input type="password" required            onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }               />
            <label>Password</label>
          </div>
          <b >{errorMsg}</b>
          <button type="submit" className="btn" onClick={handleSubmission}>
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
