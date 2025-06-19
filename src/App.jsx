// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProjectsList from "./pages/ProjectsList";
import ProjectForm from "./pages/ProjectForm";
import LocationForm from "./pages/LocationForm";
import LocationList from "./pages/LocationList";
import Preview from "./pages/Preview";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsList />} />
            <Route path="/project/new" element={<ProjectForm />} />
            <Route path="/projects/edit/:id" element={<ProjectForm />} />
            <Route
              path="/projects/:projectId/locations"
              element={<LocationList />}
            />
            <Route
              path="/projects/:projectId/locations/new"
              element={<LocationForm />}
            />
            <Route
              path="/projects/:projectId/locations/edit/:locationId"
              element={<LocationForm />}
            />
            <Route path="/projects/:projectId/preview" element={<Preview />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
