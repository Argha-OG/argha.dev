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
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const webDevSkills = [
  {
    name: "React",
    icon: <Code className="h-10 w-10" />,
    bgColor: "bg-blue-500",
  },
  {
    name: "Node.js",
    icon: <Server className="h-10 w-10" />,
    bgColor: "bg-green-500",
  },
  {
    name: "Express",
    icon: <Layers className="h-10 w-10" />,
    bgColor: "bg-gray-700",
  },
  {
    name: "MongoDB",
    icon: <Database className="h-10 w-10" />,
    bgColor: "bg-green-600",
  },
];

const securitySkills = [
  {
    name: "Pen Testing",
    icon: <ShieldCheck className="h-10 w-10" />,
    bgColor: "bg-red-500",
  },
  {
    name: "Ethical Hacking",
    icon: <Lock className="h-10 w-10" />,
    bgColor: "bg-purple-500",
  },
  {
    name: "Vulnerability Analysis",
    icon: <ScanSearch className="h-10 w-10" />,
    bgColor: "bg-orange-500",
  },
  {
    name: "Threat Reporting",
    icon: <Bug className="h-10 w-10" />,
    bgColor: "bg-pink-500",
  },
];

const certifications = [
  {
    title: "CompTIA Security+",
    issuer: "Udemy",
    icon: <Star className="h-6 w-6" />,
    iconBg: "bg-purple-100",
  },
  {
    title: "Full-Stack Web Development",
    issuer: "Udemy",
    icon: <BookOpen className="h-6 w-6" />,
    iconBg: "bg-purple-100",
  },
  {
    title: "Google Cybersecurity",
    issuer: "Coursera",
    icon: <Award className="h-6 w-6" />,
    iconBg: "bg-purple-100",
  },
  {
    title: "Jr Penetration Tester",
    issuer: "TryHackMe",
    icon: <Star className="h-6 w-6" />,
    iconBg: "bg-purple-100",
  },
  {
    title: "Web Fundamentals",
    issuer: "TryHackMe",
    icon: <Star className="h-6 w-6" />,
    iconBg: "bg-purple-100",
  },
  {
    title: "Ethical Hacker",
    issuer: "Cisco",
    icon: <Award className="h-6 w-6" />,
    iconBg: "bg-purple-100",
  },
  {
    title: "Digital Forensics",
    issuer: "The Open University",
    icon: <BookOpen className="h-6 w-6" />,
    iconBg: "bg-purple-100",
  },
  {
    title: "CIP Introduction",
    issuer: "OPSWAT Academy",
    icon: <School className="h-6 w-6" />,
    iconBg: "bg-purple-100",
  },
  {
    title: "Web Design",
    issuer: "10 Minute School",
    icon: <School className="h-6 w-6" />,
    iconBg: "bg-purple-100",
  },
];

const Skills = () => {
  const [currentCertIndex, setCurrentCertIndex] = React.useState(0);
  const certsPerPage = 3;
  const totalPages = Math.ceil(certifications.length / certsPerPage);

  const nextCerts = () => {
    setCurrentCertIndex((prev) => (prev + certsPerPage) % certifications.length);
  };

  const prevCerts = () => {
    setCurrentCertIndex((prev) =>
      prev === 0 ? certifications.length - certsPerPage : prev - certsPerPage
    );
  };

  const visibleCerts = certifications.slice(currentCertIndex, currentCertIndex + certsPerPage);

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
      id="skills"
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
            Skills & Certifications
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            Technical expertise and professional certifications in web development and cybersecurity
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full">
          <Tabs defaultValue="webdev" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 h-auto p-1 bg-gray-100 rounded-lg">
              <TabsTrigger
                value="webdev"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white rounded-md py-2.5 text-sm font-medium transition-all duration-200"
              >
                Web Development
              </TabsTrigger>
              <TabsTrigger
                value="cybersecurity"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white rounded-md py-2.5 text-sm font-medium transition-all duration-200"
              >
                Cybersecurity
              </TabsTrigger>
              <TabsTrigger
                value="certifications"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white rounded-md py-2.5 text-sm font-medium transition-all duration-200"
              >
                Certifications
              </TabsTrigger>
            </TabsList>

            {/* Web Development Skills */}
            <TabsContent value="webdev" className="pt-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {webDevSkills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="hover:-translate-y-1 transition-transform duration-200"
                  >
                    <Card className="border-gray-200 bg-white hover:shadow-lg transition-all duration-300 overflow-hidden">
                      <CardContent className="flex flex-col items-center justify-center p-8 space-y-4">
                        <div className={`${skill.bgColor} p-5 rounded-2xl text-white`}>
                          {skill.icon}
                        </div>
                        <h3 className="text-base font-bold text-purple-600">
                          {skill.name}
                        </h3>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Cybersecurity Skills */}
            <TabsContent value="cybersecurity" className="pt-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {securitySkills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="hover:-translate-y-1 transition-transform duration-200"
                  >
                    <Card className="border-gray-200 bg-white hover:shadow-lg transition-all duration-300 overflow-hidden">
                      <CardContent className="flex flex-col items-center justify-center p-8 space-y-4">
                        <div className={`${skill.bgColor} p-5 rounded-2xl text-white`}>
                          {skill.icon}
                        </div>
                        <h3 className="text-base font-bold text-purple-600 text-center">
                          {skill.name}
                        </h3>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Certifications */}
            <TabsContent value="certifications" className="pt-12">
              <div className="max-w-4xl mx-auto space-y-6">
                <div className="grid gap-4">
                  {visibleCerts.map((cert, index) => (
                    <div key={index}>
                      <Card className="border-gray-200 bg-white hover:shadow-lg transition-all duration-300">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 p-6">
                          <div className="flex-1">
                            <CardTitle className="text-lg font-bold text-purple-600 mb-1">
                              {cert.title}
                            </CardTitle>
                            <CardDescription className="text-sm text-gray-500 flex items-center gap-1.5">
                              <svg className="w-3.5 h-3.5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                              {cert.issuer}
                            </CardDescription>
                          </div>
                          <div className={`${cert.iconBg} p-3 rounded-lg`}>
                            <div className="text-purple-600">
                              {cert.icon}
                            </div>
                          </div>
                        </CardHeader>
                      </Card>
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <div className="flex items-center justify-center gap-4 pt-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevCerts}
                    className="rounded-full border-purple-200 hover:bg-purple-50 hover:border-purple-300"
                  >
                    <ChevronLeft className="h-4 w-4 text-purple-600" />
                  </Button>
                  <div className="flex gap-2">
                    {Array.from({ length: totalPages }).map((_, i) => (
                      <div
                        key={i}
                        className={`h-2 w-2 rounded-full transition-all ${Math.floor(currentCertIndex / certsPerPage) === i
                            ? "bg-purple-600 w-6"
                            : "bg-gray-300"
                          }`}
                      />
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextCerts}
                    className="rounded-full border-purple-200 hover:bg-purple-50 hover:border-purple-300"
                  >
                    <ChevronRight className="h-4 w-4 text-purple-600" />
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
