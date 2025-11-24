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
import { Briefcase, GraduationCap, CheckCircle2, Calendar, Building2 } from "lucide-react";

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
    duration: "Mar 2025 - Present",
    tasks: [
      "Contributed to research and hands-on lab work in ethical hacking.",
      "Participated in cybersecurity awareness and defense projects.",
    ],
  },
];

const academicExperience = [
  {
    title: "BSc in Software Engineering",
    company: "KLUST, Malaysia",
    duration: "Currently Studying",
    tasks: [
      "Pursuing Bachelor of Science in Software Engineering.",
      "Focusing on software development, algorithms, and system design.",
      "Engaging in practical projects and collaborative learning.",
    ],
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    company: "Dhaka Commerce College, Bangladesh",
    duration: "Completed 2023",
    tasks: [
      "Successfully completed Higher Secondary Certificate.",
      "Built strong foundation in science and mathematics.",
      "Developed analytical and problem-solving skills.",
    ],
  },
  {
    title: "Research Collaboration",
    company: "LIAAD, University of Porto & Data Science Lab, DIU",
    duration: "Remote | Nov 2024",
    tasks: [
      "Participated in a joint research meeting between LIAAD (Portugal) and DIU.",
      "Explored advanced AI concepts in banking security (Anomaly Detection, Real-Time Threat Defense, etc.).",
      "Worked alongside international researchers to discuss innovative AI-driven cybersecurity.",
    ],
  },
];

const ExpSec = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut", staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section
      id="experience"
      className="flex min-h-screen w-full items-center justify-center px-4 md:px-6 py-24"
    >
      <motion.div
        className="flex w-full max-w-6xl flex-col items-center gap-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={itemVariants} className="text-center space-y-3">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-600">
            Experience & Education
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            A journey through professional achievements, academic pursuits, and research collaborations
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full">
          <Tabs defaultValue="professional" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 h-auto p-1 bg-gray-100 rounded-lg">
              <TabsTrigger
                value="professional"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white rounded-md py-2.5 text-sm font-medium transition-all duration-200 flex items-center gap-2"
              >
                <Briefcase className="h-4 w-4" />
                Professional
              </TabsTrigger>
              <TabsTrigger
                value="academic"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white rounded-md py-2.5 text-sm font-medium transition-all duration-200 flex items-center gap-2"
              >
                <GraduationCap className="h-4 w-4" />
                Academic & Research
              </TabsTrigger>
            </TabsList>

            <TabsContent value="professional" className="pt-12">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {professionalExperience.map((exp, index) => (
                  <div
                    key={index}
                    className="hover:-translate-y-1 transition-transform duration-200"
                  >
                    <Card className="h-full border-gray-200 bg-white hover:shadow-lg transition-all duration-300">
                      <CardHeader className="space-y-3 pb-4">
                        <div className="flex items-start justify-between">
                          <div className="p-2.5 rounded-lg bg-purple-100">
                            <Building2 className="h-5 w-5 text-purple-600" />
                          </div>
                        </div>
                        <CardTitle className="text-lg leading-tight text-purple-600 font-bold">
                          {exp.title}
                        </CardTitle>
                        <CardDescription className="flex flex-col gap-1.5">
                          <span className="font-medium text-gray-700 text-sm">{exp.company}</span>
                          <span className="flex items-center text-xs text-gray-500">
                            <Calendar className="h-3 w-3 mr-1.5" />
                            {exp.duration}
                          </span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2.5">
                          {exp.tasks.map((task, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-500 flex-shrink-0" />
                              <span className="text-gray-600 leading-relaxed">{task}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="academic" className="pt-12">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {academicExperience.map((exp, index) => (
                  <div
                    key={index}
                    className="hover:-translate-y-1 transition-transform duration-200"
                  >
                    <Card className="h-full border-gray-200 bg-white hover:shadow-lg transition-all duration-300">
                      <CardHeader className="space-y-3 pb-4">
                        <div className="flex items-start justify-between">
                          <div className="p-2.5 rounded-lg bg-purple-100">
                            <GraduationCap className="h-5 w-5 text-purple-600" />
                          </div>
                        </div>
                        <CardTitle className="text-lg leading-tight text-purple-600 font-bold">
                          {exp.title}
                        </CardTitle>
                        <CardDescription className="flex flex-col gap-1.5">
                          <span className="font-medium text-gray-700 text-sm">{exp.company}</span>
                          <span className="flex items-center text-xs text-gray-500">
                            <Calendar className="h-3 w-3 mr-1.5" />
                            {exp.duration}
                          </span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2.5">
                          {exp.tasks.map((task, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-500 flex-shrink-0" />
                              <span className="text-gray-600 leading-relaxed">{task}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ExpSec;
