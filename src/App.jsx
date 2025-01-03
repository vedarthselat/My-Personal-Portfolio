import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Awards from "./components/Awards/Awards";
import Resume from "./components/Resume/Resume";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <Skills />
        <WorkExperience />
        <Projects/>
        <Awards />
        <Resume />
        <ContactMe />
      </div>

      <Footer />
    </>
  );
};

export default App;
