import React from "react";
import HeroSec from "./HeroSec";
import About from "./About";
import ExpSec from "./ExpSec";
import Projects from "./Projects";
import Skills from "./Skills";
import Services from "./Services";
import BlogPreview from "./BlogPreview";
import Contact from "./Contact";

const HomePage = () => {
  return (
    <>
      <HeroSec />
      <About />
      <Services />
      <ExpSec />
      <Projects />
      <Skills />
      <BlogPreview />
      <Contact />
    </>
  );
};

export default HomePage;
