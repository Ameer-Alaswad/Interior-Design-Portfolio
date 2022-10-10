import "./App.css";
import Navbar from "./components/navbar/header";
import LandingPageBody from "./components/landing-page-body/landingPageBody";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PhotosGallery from "./components/projects-gallary/projectsGallary";
import Footer from "./components/footer/footer";
import ExploreProjects from "./components/explore-projects/ExplorePojects";
import { Projects } from "./components/display-projects/DisplayProjects";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
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
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
