import "./App.css";
import Navbar from "./components/navbar/Header";
import { BrowserRouter, Route } from "react-router-dom";
import PhotosGallery from "./components/projects-gallary/projectsGallary";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <PhotosGallery />
      </div>
    </BrowserRouter>
  );
}

export default App;
