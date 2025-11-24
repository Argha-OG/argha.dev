import React from "react";
import { Link, useLocation } from "react-router-dom";
// Using lucide-react, which is standard with shadcn/ui
import { Menu, Mountain } from "lucide-react";
import SplitText from './../SplitText'

// Import the shadcn/ui components you'll need
import { Button } from "@/components/ui/button";
// Import the shadcn/ui components you'll need
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

// Define navigation links based on our plan
const navLinks = [
  { href: "#home", label: "Home", type: "hash" },
  { href: "#about", label: "About", type: "hash" },
  { href: "#experience", label: "Experience", type: "hash" },
  { href: "#skills", label: "Skills", type: "hash" },
  { href: "/blog", label: "Blog", type: "route" },
  { href: "#contact", label: "Contact", type: "hash" },
];


/**
 * A responsive, sticky navbar with glassmorphism effect.
 * Implements the design from portfolio_plan.md.
 * * Assumes:
 * 1. You have `shadcn/ui` Button and Sheet components in `@/components/ui/`.
 * 2. You have `lucide-react` installed (`npm install lucide-react`).
 * 3. Your Tailwind CSS is configured (especially for `background/95`, `backdrop-blur`, etc.).
 * 4. You have a CV file at `/public/Argha_Biswas_CV.pdf`.
 */
const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    // Make the header sticky at the top
    <header className="sticky top-8 z-50 w-full">
      {/* This div is the main container.
        - REMOVED 'container' and 'max-w-screen-2xl' classes.
        - On mobile (default): It's a full-width bar (w-full).
        - On desktop (md:): It becomes a centered pill (md:mx-auto) with a max-width (md:max-w-4xl).
      */}
      <div
        className="flex h-16 w-full items-center px-4 my-4
                      border-2 bg-background/95 backdrop-blur
                      md:max-w-4xl md:rounded-full md:border md:px-6 md:mx-auto"
      >
        {/* Logo/Name - Links to Home */}
        <Link
          to="/"
          className="mr-10 flex items-center space-x-2 content-center"
        >
          <SplitText
            text="Argha Biswas"
            className="text-2xl font-semibold text-center"
            delay={100}
            duration={1}
            ease="elastic.out"
            splitType="chars"
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden  flex-1 items-center space-x-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            link.type === "route" ? (
              <Link
                key={link.label}
                to={link.href}
                className="text-foreground/60 transition-colors hover:text-foreground/80"
                aria-label={`Navigate to ${link.label}`}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={isHomePage ? link.href : `/${link.href}`}
                className="text-foreground/60 transition-colors hover:text-foreground/80"
                aria-label={`Scroll to ${link.label} section`}
              >
                {link.label}
              </a>
            )
          ))}
        </nav>

        {/* Right-side Buttons (Desktop) */}
        <div className="hidden items-center space-x-2 md:flex">
          <Button asChild variant="default">
            {/* Assumes your CV is in the /public folder */}
            <a href="/Argha_Biswas_CV.pdf">Download CV</a>
          </Button>
          <Button asChild variant="outline">
            <a href={isHomePage ? "#contact" : "/#contact"}>Hire Me</a>
          </Button>
        </div>

        {/* Mobile Menu (using shadcn/ui NavigationMenu) */}
        <div className="flex flex-1 items-center justify-end md:hidden">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-10 w-10 p-0">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  {/* The content will be a list of links, styled to appear as the menu */}
                  {/* We must wrap our links in a `ul` or other element for layout */}
                  <div className="grid w-[300px] gap-6 p-6 sm:w-[350px]">
                    {/* Mobile - Logo/Name */}
                    <Link to="/" className="flex items-center space-x-2">
                      <Mountain className="h-6 w-6" />
                      <span className="font-bold">Argha Biswas</span>
                    </Link>

                    {/* Mobile - Nav Links */}
                    <nav className="grid gap-4">
                      {navLinks.map((link) => (
                        // We use NavigationMenuLink here and pass `asChild`
                        <NavigationMenuLink asChild key={link.label}>
                          {link.type === "route" ? (
                            <Link
                              to={link.href}
                              className="text-lg font-medium text-foreground/80 transition-colors hover:text-foreground"
                              aria-label={`Navigate to ${link.label}`}
                            >
                              {link.label}
                            </Link>
                          ) : (
                            <a
                              href={isHomePage ? link.href : `/${link.href}`}
                              className="text-lg font-medium text-foreground/80 transition-colors hover:text-foreground"
                              aria-label={`Scroll to ${link.label} section`}
                            >
                              {link.label}
                            </a>
                          )}
                        </NavigationMenuLink>
                      ))}
                    </nav>

                    {/* Mobile - Buttons */}
                    <div className="grid gap-4">
                      <Button asChild variant="outline">
                        <a
                          href="/Argha_Biswas_CV.pdf"
                        // download="Argha_Biswas_CV.pdf"
                        >
                          Download CV
                        </a>
                      </Button>
                      <Button asChild>
                        <a href={isHomePage ? "#contact" : "/#contact"}>Hire Me</a>
                      </Button>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
