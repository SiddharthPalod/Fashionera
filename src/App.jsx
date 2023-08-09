import Page1 from "./pages/Page1";
import Preload from "./pages/Preload";
import Loginit from "./pages/Loginit"
import Home from "./pages/Home";
import News from "./pages/News";
import Merch from "./pages/Merch";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Eventpg, About, Navbar } from "./components";

const App = () => {
  return (
    <main className="app transition-all ease-in" style={{background:"white"}}>
        <Preload/>
        <Navbar/>
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
