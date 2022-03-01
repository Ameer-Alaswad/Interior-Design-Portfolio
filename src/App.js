import "./App.css";
import Navbar from "./components/Navbar/header";
import { BrowserRouter, Route } from "react-router-dom";
import ProjectGallery from "./components/projects-gallary/projectsGallary";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <ProjectGallery />
      </div>
    </BrowserRouter>
  );
}

export default App;
