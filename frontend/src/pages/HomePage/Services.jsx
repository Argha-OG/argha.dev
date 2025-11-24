import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Check } from "lucide-react";

const services = [
    {
        title: "Basic Website",
        description: "Perfect for personal portfolios or small business landing pages.",
        price: "2000 RM",
        duration: "1 Day Delivery",
        features: ["MERN Stack Technology", "5-6 Responsive Pages", "Contact Form Integration", "Basic SEO Setup"],
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        title: "E-commerce Store",
        description: "Complete online store solution to sell your products effectively.",
        price: "5000 RM+",
        duration: "10 Days Delivery",
        features: ["Secure Payment Gateway", "Product Management System", "User Accounts & History", "Admin Dashboard"],
        gradient: "from-purple-500 to-pink-500",
    },
    {
        title: "Web App + Admin",
        description: "Dynamic web application with powerful administrative controls.",
        price: "6000 RM+",
        duration: "18 Days Delivery",
        features: ["Advanced Admin Panel", "Role-Based Access", "Real-time Analytics", "Content Management"],
        gradient: "from-orange-500 to-red-500",
    },
    {
        title: "Full Custom Solution",
        description: "Tailor-made enterprise solution for complex requirements.",
        price: "12000 RM+",
        duration: "30 Days Delivery",
        features: ["Custom System Architecture", "High Scalability", "Priority Support", "Full Source Code"],
        gradient: "from-emerald-500 to-green-500",
    },
];

const Services = () => {
    return (
        <section className="py-24 relative z-20" id="services">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                        Premium Services
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Elevate your digital presence with high-performance web solutions tailored to your needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <CardContainer key={index} className="inter-var w-full">
                            <CardBody className="bg-white/80 backdrop-blur-md border border-purple-100 relative group/card hover:border-purple-300 w-full h-auto rounded-xl p-6 transition-all duration-300 shadow-md hover:shadow-xl">

                                <CardItem
                                    translateZ="50"
                                    className={`text-xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                                >
                                    {service.title}
                                </CardItem>

                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="text-foreground/60 text-sm mt-2 leading-relaxed h-12"
                                >
                                    {service.description}
                                </CardItem>

                                <CardItem translateZ="80" className="w-full mt-6 pb-4 border-b border-purple-100">
                                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                        {service.price}
                                    </div>
                                    <div className="text-xs text-purple-500 font-semibold mt-1 uppercase tracking-wider">
                                        {service.duration}
                                    </div>
                                </CardItem>

                                <div className="mt-6 space-y-3">
                                    {service.features.map((feature, idx) => (
                                        <CardItem
                                            key={idx}
                                            translateZ="40"
                                            className="flex items-start text-sm text-foreground/70"
                                        >
                                            <Check className="w-4 h-4 mr-2 text-green-500 mt-0.5 shrink-0" />
                                            <span>{feature}</span>
                                        </CardItem>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center mt-8 pt-4">
                                    <CardItem
                                        translateZ={20}
                                        as="button"
                                        className="px-4 py-2 rounded-lg text-xs font-medium text-foreground/70 hover:text-purple-600 transition-colors"
                                    >
                                        Details
                                    </CardItem>
                                    <CardItem
                                        translateZ={20}
                                        as="button"
                                        className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold hover:shadow-lg transition-all duration-200"
                                    >
                                        Book Now
                                    </CardItem>
                                </div>
                            </CardBody>
                        </CardContainer>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
