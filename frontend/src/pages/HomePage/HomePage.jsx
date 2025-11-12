import React from "react";
import "./../../index.css";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import MainLayout from "@/layout/MainLayout";
import HeroSec from "./HeroSec";


const HomePage = () => {
  return (
    <MainLayout>
      <HeroSec/>
    </MainLayout>
  );
};

export default HomePage;
