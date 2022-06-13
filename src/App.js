import "./App.css";
import Navbar from "./components/navbar/header";
import LandingPageBody from "./components/landing-page-body/landingPageBody";
import { BrowserRouter, Route } from "react-router-dom";
import PhotosGallery from "./components/projects-gallary/projectsGallary";
import Footer from "./components/footer/footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        {/* <PhotosGallery /> */}
        {/* <LandingPageBody />
        <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
