import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "sonner"; // For the "Message Sent!" pop-up
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Facebook,
  Instagram,
  Send,
} from "lucide-react"; // Icons

/**
 * Contact Section
 * A two-column layout with contact info/socials on the left,
 * and a MERN-ready contact form on the right.
 */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Animation for the whole section
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut", staggerChildren: 0.3 },
    },
  };

  // Animation for items
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // --- MERN Backend Logic (Mocked) ---
    // In a real MERN app, you will uncomment this:
    /*
    try {
      // Your backend API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const result = await response.json();
      toast.success("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' }); // Reset form

    } catch (error) {
      console.error('Failed to send message:', error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
    */

    // Mock API call (remove this block when you have a real backend)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form Data Submitted:", formData);
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
    // --- End of Mock Logic ---
  };

  return (
    <section
      id="contact"
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
          variants={itemVariants}
        >
          Get In Touch
        </motion.h2>

        {/* Main Content Grid: 1 col on mobile, 2 cols on desktop */}
        <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2">
          {/* Column 1: Contact Info & Socials */}
          <motion.div className="flex flex-col gap-8" variants={itemVariants}>
            <div>
              <h3 className="text-2xl font-semibold">Contact Me Directly</h3>
              <p className="mt-2 text-lg text-foreground/80">
                I'm always open to discussing new projects, creative ideas, or
                opportunities.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:cse.argha@gmail.com"
                className="flex items-center gap-4 group text-lg"
              >
                <Mail className="h-6 w-6 text-primary" />
                <span className="group-hover:underline">
                  cse.argha@gmail.com
                </span>
              </a>
              <a
                href="tel:+8801999389199"
                className="flex items-center gap-4 group text-lg"
              >
                <Phone className="h-6 w-6 text-primary" />
                <span className="group-hover:underline">+8801999389199</span>
              </a>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">Find Me Online</h3>
              <div className="mt-4 flex flex-wrap gap-4">
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="h-12 w-12"
                >
                  <a
                    href="https://www.linkedin.com/in/argha-biswas/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="h-12 w-12"
                >
                  <a
                    href="https://github.com/Argha-OG"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="h-12 w-12"
                >
                  <a
                    href="https://www.facebook.com/Argha.OG"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="h-12 w-12"
                >
                  <a
                    href="https://www.instagram.com/argha_0x/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Contact Form */}
          <motion.div variants={itemVariants}>
            <Card className="border-white/10 bg-background/70 backdrop-blur-lg p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Full Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Argha Biswas"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="text-lg"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
                    Email Address
                  </label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="you@example.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="text-lg"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium"
                  >
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Hi Argha, let's talk about..."
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="text-lg"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
