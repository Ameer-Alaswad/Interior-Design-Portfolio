import "./App.css";
import Navbar from "./components/navbar/Header";
import LandingPageBody from "./components/navbar/landing-page-body/landingPageBody";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <LandingPageBody />
      </div>
    </BrowserRouter>
  );
}

export default App;
