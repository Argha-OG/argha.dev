import React from "react";
import { motion } from "framer-motion";
// REMOVED Avatar imports
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Code, ShieldCheck, Layers } from "lucide-react"; // Icons for badges

/**
 * About Me Section (Redesigned - Text Only)
 * This design removes the image and centers the text content.
 */
const About = () => {
  // Animation for the whole section container
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        staggerChildren: 0.3,
      },
    },
  };

  // Animation for individual items
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="about"
      className="flex min-h-screen w-full items-center justify-center px-4 md:px-6 py-20"
    >
      <motion.div
        className="flex w-full max-w-5xl flex-col items-center gap-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible" // Animates when it enters the viewport
        viewport={{ once: true, amount: 0.3 }} // Triggers once
      >
        <motion.h2
          className="text-4xl font-bold tracking-tighter sm:text-5xl"
          variants={itemVariants}
        >
          About Me
        </motion.h2>

        {/* ... existing code ... */}

        {/* Centered Text Content */}
        <motion.div
          className="flex flex-col gap-6 text-center max-w-3xl" // Centered text and max-width
          variants={itemVariants}
          // --- NEW: Added hover animation to lift the whole block ---
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <h3 className="text-3xl font-bold text-primary">
            A Developer & Defender
          </h3>

          <p className="text-lg text-foreground/80 md:text-xl">
            I'm a software engineering student with a deep passion for the
            intersection of web development and security. I enjoy building
            responsive, user-friendly websites and have hands-on experience in
            identifying and reporting security vulnerabilities. My goal is to
            build solutions that are not only innovative but also secure and
            robust.
          </p>

          {/* Badges for Key Interests */}
          <div className="flex flex-wrap gap-3 justify-center">
            {" "}
            {/* Centered badges */}
            {/* --- NEW: Wrapped each badge in a motion.div for interaction --- */}
            <motion.div
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Badge
                variant="secondary"
                className="px-4 py-2 text-sm cursor-pointer"
              >
                <Code className="mr-2 h-4 w-4" />
                Web Development
              </Badge>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Badge
                variant="secondary"
                className="px-4 py-2 text-sm cursor-pointer"
              >
                <ShieldCheck className="mr-2 h-4 w-4" />
                Cybersecurity
              </Badge>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Badge
                variant="secondary"
                className="px-4 py-2 text-sm cursor-pointer"
              >
                <Layers className="mr-2 h-4 w-4" />
                MERN Stack
              </Badge>
            </motion.div>
          </div>
        </motion.div>

        {/* ... existing code ... */}
      </motion.div>
    </section>
  );
};

export default About;
