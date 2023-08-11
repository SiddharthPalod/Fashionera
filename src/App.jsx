import Page1 from "./pages/Page1";
import Preload from "./pages/Preload";
import Loginit from "./pages/Loginit"
import Home from "./pages/Home";
import News from "./pages/News";
import Merch from "./pages/Merch";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Eventpg, About, Navbar } from "./components";
import { auth } from "./firebase";
import { useState, useEffect } from "react";


const App = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("User can be", user);
        setUserName(user.displayName);
        console.log("User:", userName);
      } else {
        console.log("No user");
        setUserName("");
      }
    });
  }, []);

  return (
    <main className="app transition-all ease-in" style={{background:"white"}}>
        <Preload/>
        <Navbar name={userName} />
        <Home/>
        <Page1/>
        <Eventpg/>
        <Loginit/>
        <News/>
        <Merch/>
        <About/>
    </main>
  );
};

export default App;
