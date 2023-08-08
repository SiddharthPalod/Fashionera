import Page1 from "./pages/Page1";
import Preload from "./pages/Preload";
import Loginit from "./pages/Loginit"
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Eventpg, About } from "./components";

const App = () => {
  return (
    <main className="app transition-all ease-in">
        <Home/>
        {/* <Preload/>
        <Page1/>
        <Eventpg/>
        <Loginit/>
        <About/> */}
    </main>
  );
};

export default App;
