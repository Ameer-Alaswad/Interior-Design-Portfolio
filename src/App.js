import "./App.css";
import { useState } from "react";
import Navbar from "./components/navbar/header";
import LandingPageBody from "./components/landing-page-body/landingPageBody";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PhotosGallery from "./components/projects-gallary/projectsGallary";
import Footer from "./components/footer/footer";
import ExploreProjects from "./components/explore-projects/ExplorePojects";
import { Projects } from "./components/display-projects/DisplayProjects";
import { SelectedProjectContext } from "./projects-assets/selectedProjectContext";

function App() {
  const [selectedProject, setSelectedProject] = useState("hi from context");
  return (
    <BrowserRouter>
      <div className="App">
        <SelectedProjectContext.Provider
          value={{ selectedProject, setSelectedProject }}
        >
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  {" "}
                  <PhotosGallery />
                  <LandingPageBody />
                </>
              }
            />
            <Route path="/explore" element={<ExploreProjects />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </SelectedProjectContext.Provider>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
