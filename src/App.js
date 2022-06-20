import "./App.css";
import Navbar from "./components/navbar/header";
import LandingPageBody from "./components/landing-page-body/landingPageBody";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PhotosGallery from "./components/projects-gallary/projectsGallary";
import Footer from "./components/footer/footer";
import ExploreProjects from "./components/explore-projects/ExplorePojects";
import Radium, { StyleRoot } from "radium";

function App() {
  return (
    <StyleRoot>
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
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </StyleRoot>
  );
}

export default Radium(App);
