import React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
// Icons for skills and certs
import {
  Code,
  Database,
  Server,
  Layers,
  ShieldCheck,
  Bug,
  ScanSearch,
  Lock,
  Award,
  Star,
  BookOpen,
  School,
} from "lucide-react";

// --- DATA FROM YOUR CV ---

// 1. Web Development Skills - UPDATED with more details
const webDevSkills = [
  {
    name: "React",
    icon: <Code className="h-10 w-10" />,
    description: "Building responsive, component-based user interfaces.",
  },
  {
    name: "Node.js",
    icon: <Server className="h-10 w-10" />,
    description: "Creating fast and scalable server-side applications.",
  },
  {
    name: "Express",
    icon: <Layers className="h-10 w-10" />,
    description: "Designing and building robust RESTful APIs.",
  },
  {
    name: "MongoDB",
    icon: <Database className="h-10 w-10" />,
    description: "Using NoSQL for flexible and scalable data storage.",
  },
];

// 2. Cybersecurity Skills - UPDATED with more details
const securitySkills = [
  {
    name: "Pen Testing",
    icon: <ShieldCheck className="h-10 w-10" />,
    description:
      "Simulating real-world attacks to find and exploit vulnerabilities.",
  },
  {
    name: "Ethical Hacking",
    icon: <Lock className="h-10 w-10" />,
    description:
      "Using a hacker's mindset to proactively discover and fix security gaps.",
  },
  {
    name: "Vulnerability Analysis",
    icon: <ScanSearch className="h-10 w-10" />,
    description:
      "Expert in identifying XSS, SQL Injection, and other common web flaws.",
  },
  {
    name: "Threat Reporting",
    icon: <Bug className="h-10 w-10" />,
    description:
      "Clearly documenting and communicating vulnerabilities to security teams.",
  },
];

// 3. Certifications
const certifications = [
  {
    title: "CompTIA Security+",
    issuer: "Udemy",
    icon: <Star className="h-6 w-6 text-primary" />,
  },
  {
    title: "Full-Stack Web Development",
    issuer: "Udemy",
    icon: <BookOpen className="h-6 w-6 text-primary" />,
  },
  {
    title: "Google Cybersecurity",
    issuer: "Coursera",
    icon: <Award className="h-6 w-6 text-primary" />,
  },
  {
    title: "Jr Penetration Tester",
    issuer: "TryHackMe",
    icon: <Star className="h-6 w-6 text-primary" />,
  },
  {
    title: "Web Fundamentals",
    issuer: "TryHackMe",
    icon: <Star className="h-6 w-6 text-primary" />,
  },
  {
    title: "Ethical Hacker",
    issuer: "Cisco",
    icon: <Award className="h-6 w-6 text-primary" />,
  },
  {
    title: "Digital Forensics",
    issuer: "The Open University",
    icon: <BookOpen className="h-6 w-6 text-primary" />,
  },
  {
    title: "CIP Introduction",
    issuer: "OPSWAT Academy",
    icon: <School className="h-6 w-6 text-primary" />,
  },
  {
    title: "Web Design",
    issuer: "10 Minute School",
    icon: <School className="h-6 w-6 text-primary" />,
  },
];

/**
 * Skills & Certifications Section
 * Uses shadcn/ui Tabs to separate skills and a Carousel for certs.
 */
const Skills = () => {
  // Animation for the whole section
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut", staggerChildren: 0.3 },
    },
  };

  // Animation for the main tabs/carousel component
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="skills"
      className="flex min-h-screen w-full items-center justify-center px-4 md:px-6 py-20"
    >
      <motion.div
        className="flex w-full max-w-5xl flex-col items-center gap-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          className="text-4xl font-bold tracking-tighter sm:text-5xl"
          variants={itemVariants}
        >
          Skills & Certifications
        </motion.h2>

        <motion.div variants={itemVariants} className="w-full">
          <Tabs defaultValue="webdev" className="w-full">
            {/* Glassy Tab Triggers */}
            <TabsList className="grid w-full grid-cols-3 bg-background/70 backdrop-blur-lg border border-white/10">
              <TabsTrigger value="webdev" className="py-3">
                Web Development
              </TabsTrigger>
              <TabsTrigger value="cybersecurity" className="py-3">
                Cybersecurity
              </TabsTrigger>
              <TabsTrigger value="certifications" className="py-3">
                Certifications
              </TabsTrigger>
            </TabsList>

            {/* --- TAB 1: Web Development Skills --- */}
            <TabsContent value="webdev" className="pt-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <TooltipProvider>
                  {webDevSkills.map((skill) => (
                    <Tooltip key={skill.name}>
                      <TooltipTrigger asChild>
                        <motion.div
                          whileHover={{ scale: 1.1, y: -5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Card className="flex flex-col items-center justify-center p-6 border-white/10 bg-background/70 backdrop-blur-lg aspect-square cursor-help">
                            {skill.icon}
                            <h3 className="mt-4 text-lg font-semibold">
                              {skill.name}
                            </h3>
                          </Card>
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{skill.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </TooltipProvider>
              </div>
            </TabsContent>

            {/* --- TAB 2: Cybersecurity Skills --- */}
            <TabsContent value="cybersecurity" className="pt-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <TooltipProvider>
                  {securitySkills.map((skill) => (
                    <Tooltip key={skill.name}>
                      <TooltipTrigger asChild>
                        <motion.div
                          whileHover={{ scale: 1.1, y: -5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Card className="flex flex-col items-center justify-center p-6 border-white/10 bg-background/70 backdrop-blur-lg aspect-square cursor-help">
                            {skill.icon}
                            <h3 className="mt-4 text-lg font-semibold text-center">
                              {skill.name}
                            </h3>
                          </Card>
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{skill.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </TooltipProvider>
              </div>
            </TabsContent>

            {/* --- TAB 3: Certifications (Carousel) --- */}
            <TabsContent value="certifications" className="pt-8 w-full">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {certifications.map((cert, index) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/2 lg:basis-1/3 p-2"
                    >
                      <div className="p-1">
                        <Card className="flex flex-row items-center justify-between p-6 border-white/10 bg-background/70 backdrop-blur-lg h-full">
                          <div className="flex flex-col">
                            <CardTitle className="text-lg">
                              {cert.title}
                            </CardTitle>
                            <CardDescription>{cert.issuer}</CardDescription>
                          </div>
                          {cert.icon}
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="ml-12" />
                <CarouselNext className="mr-12" />
              </Carousel>
            </TabsContent>
          </Tabs>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
