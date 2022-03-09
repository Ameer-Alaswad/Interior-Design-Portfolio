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
        <PhotosGallery />
<<<<<<< HEAD
        <LandingPageBody />
=======
        <Footer />
>>>>>>> 650e02dab2c64ba66dbdb9673f2d607b65c35a1d
      </div>
    </BrowserRouter>
  );
}

export default App;
