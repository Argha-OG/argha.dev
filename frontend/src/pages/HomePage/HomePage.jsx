import React from "react";
import "./../../index.css";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import MainLayout from "@/layout/MainLayout";
import HeroSec from "./HeroSec";
import ExpSec from "./ExpSec";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";


const HomePage = () => {
  return (
    <MainLayout>
      <HeroSec />
      <About />
      <ExpSec />
      <Projects />
      <Skills />
      <Contact />
    </MainLayout>
  );
};

export default HomePage;
