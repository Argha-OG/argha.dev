import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { getRecentBlogs } from "@/data/blogData";

const BlogPreview = () => {
    const recentBlogs = getRecentBlogs(3);

    return (
        <section className="py-24 relative z-20" id="blog">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                        Latest Insights
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Thoughts, tutorials, and trends from the world of web development and cybersecurity.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {recentBlogs.map((post) => (
                        <Card key={post.id} className="bg-white/80 border-purple-100 backdrop-blur-sm hover:border-purple-300 transition-all duration-300 group overflow-hidden flex flex-col h-full shadow-md hover:shadow-xl">
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
                                <Link to={`/blog/${post.id}`} className="w-full">
                                    <Button variant="ghost" className="w-full justify-between text-foreground/70 hover:text-purple-600 hover:bg-purple-50 group/btn p-0 h-auto py-2 px-4 border border-purple-100 rounded-lg">
                                        <span className="font-medium">Read Article</span>
                                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="text-center">
                    <Link to="/blog">
                        <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg">
                            View All Articles
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BlogPreview;
