import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
    {
        title: "The Future of MERN Stack in 2025",
        description: "Discover why the MERN stack remains the dominant choice for scalable full-stack applications.",
        date: "Oct 10, 2023",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
        category: "Development"
    },
    {
        title: "Optimizing React Performance",
        description: "Advanced techniques to boost your React application's performance and user experience.",
        date: "Nov 5, 2023",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop",
        category: "Performance"
    },
    {
        title: "Scaling E-commerce Platforms",
        description: "Strategies for building robust e-commerce solutions that handle high traffic volumes.",
        date: "Dec 12, 2023",
        readTime: "10 min read",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2070&auto=format&fit=crop",
        category: "Business"
    },
];

const Blog = () => {
    return (
        <section className="py-24 relative z-20" id="blog">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                        Latest Insights
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Thoughts, tutorials, and trends from the world of web development.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <Card key={index} className="bg-white/80 border-purple-100 backdrop-blur-sm hover:border-purple-300 transition-all duration-300 group overflow-hidden flex flex-col h-full shadow-md hover:shadow-xl">
                            <div className="h-56 overflow-hidden relative">
                                <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-purple-600 border border-purple-200">
                                    {post.category}
                                </div>
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent opacity-60" />
                            </div>

                            <CardHeader className="pb-2">
                                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        <span>{post.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-3 h-3" />
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>
                                <CardTitle className="text-xl bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-pink-600 transition-all line-clamp-2">
                                    {post.title}
                                </CardTitle>
                            </CardHeader>

                            <CardContent className="flex-grow">
                                <CardDescription className="text-foreground/60 line-clamp-3">
                                    {post.description}
                                </CardDescription>
                            </CardContent>

                            <CardFooter className="pt-0 mt-auto">
                                <Button variant="ghost" className="w-full justify-between text-foreground/70 hover:text-purple-600 hover:bg-purple-50 group/btn p-0 h-auto py-2 px-4 border border-purple-100 rounded-lg">
                                    <span className="font-medium">Read Article</span>
                                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
