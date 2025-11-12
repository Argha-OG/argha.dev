import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react"; // Icons for buttons

/**
 * MOCK DATA
 * This array mimics the data structure you'll fetch from your MongoDB database.
 * We'll use this until the MERN backend is ready.
 * * Your CV mentions: "Champion, FSIT Project Showcasing 2024 - DIU (Transport App Project)"
 * I've included that as the first project.
 */
const mockProjects = [
  {
    _id: "1",
    title: "DIU Transport App (Champion)",
    description:
      "A comprehensive transport management app for Daffodil International University. Won 1st place in the FSIT Project Showcasing 2024.",
    imageUrl: "https://placehold.co/600x400/9370DB/FFFFFF?text=Transport+App",
    tags: [
      "React Native",
      "Express",
      "Node.js",
      "MongoDB",
      "Real-time Tracking",
    ],
    githubUrl: "https://github.com/argha-biswas", // Replace with actual URL
    liveUrl: "https://argha-dev.vercel.app/", // Replace with actual URL
  },
  {
    _id: "2",
    title: "Portfolio Website (This one!)",
    description:
      "My personal portfolio built with the MERN stack, featuring a glassmorphism UI, framer-motion animations, and a backend for projects and contacts.",
    imageUrl: "https://placehold.co/600x400/7c3aed/FFFFFF?text=Portfolio+v2",
    tags: ["React", "Express", "MongoDB", "Node.js", "shadcn/ui", "Tailwind"],
    githubUrl: "https://github.com/argha-biswas", // Replace with actual URL
    liveUrl: "https://argha-dev.vercel.app/",
  },
  {
    _id: "3",
    title: "Vulnerability Scanner",
    description:
      "A Python-based tool to scan web applications for common vulnerabilities like XSS and SQL Injection, inspired by my work at HackerOne.",
    imageUrl:
      "https://placehold.co/600x400/b14943/FFFFFF?text=Security+Scanner",
    tags: ["Python", "Flask", "Security", "Automation"],
    githubUrl: "https://github.com/argha-biswas", // Replace with actual URL
    liveUrl: null, // No live URL for this one
  },
];

/**
 * Projects Section
 * Displays a grid of project cards.
 * Data is hardcoded for now, but designed to be replaced by an API fetch.
 */
const Projects = () => {
  // Animation for the whole section container
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut", staggerChildren: 0.2 },
    },
  };

  // Animation for each card
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="projects"
      className="flex min-h-screen w-full items-center justify-center px-4 md:px-6 py-20"
    >
      <motion.div
        className="flex w-full max-w-6xl flex-col items-center gap-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.h2
          className="text-4xl font-bold tracking-tighter sm:text-5xl"
          variants={cardVariants}
        >
          My Recent Projects
        </motion.h2>

        {/* Projects Grid */}
        <motion.div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mockProjects.map((project) => (
            <motion.div
              key={project._id}
              variants={cardVariants}
              whileHover={{ y: -10 }} // Lifts the card on hover
              transition={{ type: "spring", stiffness: 100 }}
            >
              <Card className="flex h-full w-full flex-col overflow-hidden border-white/10 bg-background/70 backdrop-blur-lg">
                <CardHeader>
                  <div className="aspect-video w-full overflow-hidden rounded-md">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://placehold.co/600x400/333/FFF?text=Image+Error";
                      }}
                    />
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardTitle className="mb-2 text-2xl">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-foreground/80">
                    {project.description}
                  </CardDescription>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-start gap-4">
                  <Button asChild variant="outline">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub for ${project.title}`}
                    >
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </a>
                  </Button>
                  {project.liveUrl && (
                    <Button asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Live demo for ${project.title}`}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
