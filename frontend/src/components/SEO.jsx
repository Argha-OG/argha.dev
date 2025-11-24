import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
    title = "Argha Biswas - Full Stack Developer & Cybersecurity Specialist",
    description = "Expert Full Stack Developer and Cybersecurity Analyst specializing in MERN stack, web development, ethical hacking, and penetration testing. Based in Malaysia, offering professional web development and security services.",
    keywords = "Argha Biswas, Full Stack Developer, Web Developer, Cybersecurity Analyst, MERN Stack, React Developer, Node.js, Ethical Hacking, Penetration Testing, Web Security, Software Engineer, Malaysia, Bangladesh, HackerOne, Web Development Services",
    author = "Argha Biswas",
    ogImage = "/og-image.jpg",
    ogType = "website",
    twitterCard = "summary_large_image"
}) => {
    const siteUrl = "https://argha.dev"; // Update with your actual domain

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <meta name="robots" content="index, follow" />
            <meta name="language" content="English" />
            <meta name="revisit-after" content="7 days" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={`${siteUrl}${ogImage}`} />
            <meta property="og:site_name" content="Argha Biswas Portfolio" />

            {/* Twitter */}
            <meta property="twitter:card" content={twitterCard} />
            <meta property="twitter:url" content={siteUrl} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={`${siteUrl}${ogImage}`} />
            <meta property="twitter:creator" content="@arghab" />

            {/* Additional SEO Tags */}
            <meta name="theme-color" content="#9333ea" />
            <link rel="canonical" href={siteUrl} />

            {/* Structured Data - JSON-LD */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Person",
                    "name": "Argha Biswas",
                    "url": siteUrl,
                    "image": `${siteUrl}${ogImage}`,
                    "sameAs": [
                        "https://github.com/arghab",
                        "https://linkedin.com/in/arghab",
                        "https://hackerone.com/arghab"
                    ],
                    "jobTitle": "Full Stack Developer & Cybersecurity Analyst",
                    "worksFor": {
                        "@type": "Organization",
                        "name": "HackerOne"
                    },
                    "alumniOf": {
                        "@type": "EducationalOrganization",
                        "name": "KLUST, Malaysia"
                    },
                    "knowsAbout": [
                        "Web Development",
                        "Cybersecurity",
                        "MERN Stack",
                        "React",
                        "Node.js",
                        "Ethical Hacking",
                        "Penetration Testing"
                    ],
                    "description": description
                })}
            </script>

            {/* Professional Services Schema */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "ProfessionalService",
                    "name": "Argha Biswas - Web Development & Cybersecurity Services",
                    "image": `${siteUrl}${ogImage}`,
                    "description": "Professional web development and cybersecurity services including full-stack development, security audits, and penetration testing.",
                    "address": {
                        "@type": "PostalAddress",
                        "addressCountry": "Malaysia"
                    },
                    "geo": {
                        "@type": "GeoCoordinates",
                        "addressCountry": "Malaysia"
                    },
                    "url": siteUrl,
                    "telephone": "+601121404200",
                    "priceRange": "$$",
                    "openingHoursSpecification": {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": [
                            "Monday",
                            "Tuesday",
                            "Wednesday",
                            "Thursday",
                            "Friday"
                        ],
                        "opens": "09:00",
                        "closes": "18:00"
                    }
                })}
            </script>
        </Helmet>
    );
};

export default SEO;
