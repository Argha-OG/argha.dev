import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Argha from "@/assets/argha.png";

/**
 * Hero Section Component
 * Displays the main welcome message, animated title, CTA buttons, and a profile photo.
 * * Assumes:
 * 1. You have framer-motion installed: `npm install framer-motion`
 * 2. You have the shadcn/ui Button and Avatar components.
 */
const HeroSec = () => {
  // Animation variants for framer-motion
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2, // Stagger the animation of children
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    // Section with "home" id for navbar linking
    // Centered, full-height, and responsive padding
    <section
      id="home"
      className="flex min-h-screen w-full items-center justify-center px-4 md:px-6"
    >
      {/* Main container:
        - On mobile (default): Centered column (flex-col)
        - On desktop (md:): Row layout (md:flex-row) with items centered vertically
        - Added max-w-5xl and mx-auto to center the whole group
      */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Text Content (On the left for desktop) */}
        <motion.div
          className="flex flex-col gap-6 text-center md:text-left"
          variants={itemVariants}
        >
          {/* Main Headline */}
          <motion.h1
            className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl"
            variants={itemVariants}
          >
            Argha Biswas
          </motion.h1>

          {/* Static Sub-Headline (Replaced TypeAnimation) */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl font-medium text-primary sm:text-3xl"
          >
            Web Developer | Cybersecurity Enthusiast
          </motion.h2>

          {/* Profile Summary (from your CV) */}
          <motion.p
            className="text-lg text-foreground/80 md:text-xl max-w-lg"
            variants={itemVariants}
          >
            I am a dedicated and enthusiastic software engineering student with
            a strong interest in web development and web security. I enjoy
            building responsive, user-friendly websites and have hands-on
            experience in identifying and reporting security vulnerabilities.
          </motion.p>

          {/* Call-to-Action Buttons */}
          <motion.div
            className="flex flex-col gap-4 min-[400px]:flex-row justify-center md:justify-start"
            variants={itemVariants}
          >
            <Button asChild size="lg">
              <a href="#projects">View My Work</a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href="#contact">Get In Touch</a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Avatar/Image (On the right for desktop) */}
        <motion.div variants={itemVariants}>
          <Avatar className="h-48 w-48 md:h-64 md:w-64">
            {/* REPLACE THIS: 
              1. Add your photo (e.g., `my-photo.jpg`) to the /public folder.
              2. Change `src` to be `/my-photo.jpg`.
            */}
            <AvatarImage src={Argha} alt="Argha Biswas" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSec;
