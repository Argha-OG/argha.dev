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
// Icons for tabs and list items
import { Briefcase, GraduationCap, CheckSquare } from "lucide-react";

// Data from your CV
const professionalExperience = [
  {
    title: "Cyber Security Analyst",
    company: "HackerOne",
    duration: "Nov 2022 - Present",
    tasks: [
      "Discovered and reported vulnerabilities including XSS and SQL injection.",
      "Collaborated with security teams to enhance system protection.",
      "Conducted ethical hacking under platform guidelines.",
    ],
  },
  {
    title: "Web & Digital Media Specialist",
    company: "CERAGEM, Dhaka",
    duration: "Jan 2019 - Nov 2023",
    tasks: [
      "Developed and maintained secure websites.",
      "Managed social media and digital campaigns.",
      "Created marketing strategies and provided technical support.",
    ],
  },
  {
    title: "Member, Cyber Security Centre",
    company: "DIU, Dhaka",
    duration: "Mar 2025 - Present", // As per your CV
    tasks: [
      "Contributed to research and hands-on lab work in ethical hacking.",
      "Participated in cybersecurity awareness and defense projects.",
    ],
  },
];

const academicCollaboration = {
  title: "Academic Collaboration",
  company: "LIAAD, University of Porto & Data Science Lab, DIU",
  duration: "Remote | Nov 2024",
  tasks: [
    "Participated in a joint research meeting between LIAAD (Portugal) and DIU.",
    "Explored advanced AI concepts in banking security (Anomaly Detection, Real-Time Threat Defense, etc.).",
    "Worked alongside international researchers to discuss innovative AI-driven cybersecurity.",
  ],
};

/**
 * Experience & Collaborations Section
 * Uses shadcn/ui Tabs to separate Professional and Academic experience.
 */
const ExpSec = () => {
  // Animation for the whole section container
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut", staggerChildren: 0.3 },
    },
  };

  // Animation for the Tabs component
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="experience"
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
          Experience & Collaborations
        </motion.h2>

        <motion.div variants={itemVariants} className="w-full">
          <Tabs defaultValue="professional" className="w-full">
            {/* Glassy Tab Triggers */}
            <TabsList className="grid w-full grid-cols-2 bg-background/70 backdrop-blur-lg border border-white/10">
              <TabsTrigger value="professional" className="py-3">
                <Briefcase className="mr-2 h-5 w-5" />
                Professional
              </TabsTrigger>
              <TabsTrigger value="academic" className="py-3">
                <GraduationCap className="mr-2 h-5 w-5" />
                Academic & Research
              </TabsTrigger>
            </TabsList>

            {/* Professional Tab Content */}
            <TabsContent value="professional" className="pt-8">
              <div className="grid gap-6 md:grid-cols-2">
                {professionalExperience.map((exp, index) => (
                  <Card
                    key={index}
                    className="border-white/10 bg-background/70 backdrop-blur-lg"
                  >
                    <CardHeader>
                      <CardTitle>{exp.title}</CardTitle>
                      <CardDescription>
                        {exp.company} | {exp.duration}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {exp.tasks.map((task, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckSquare className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                            <span className="text-foreground/80">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Academic Tab Content */}
            <TabsContent value="academic" className="pt-8">
              <Card className="border-white/10 bg-background/70 backdrop-blur-lg">
                <CardHeader>
                  <CardTitle>{academicCollaboration.title}</CardTitle>
                  <CardDescription>
                    {academicCollaboration.company} |{" "}
                    {academicCollaboration.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {academicCollaboration.tasks.map((task, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckSquare className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                        <span className="text-foreground/80">{task}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ExpSec;
