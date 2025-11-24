import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getBlogById } from '@/data/blogData';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const BlogArticle = () => {
    const { id } = useParams();
    const blog = getBlogById(id);

    if (!blog) {
        return <Navigate to="/blog" replace />;
    }

    return (
        <article className="py-12 relative z-20">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Back Button */}
                <Link to="/blog" className="inline-block mb-8">
                    <Button variant="ghost" className="gap-2">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Blog
                    </Button>
                </Link>

                {/* Article Header */}
                <header className="mb-12">
                    <div className="mb-6">
                        <span className="inline-block bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-sm font-medium">
                            {blog.category}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                        {blog.title}
                    </h1>

                    <p className="text-xl text-muted-foreground mb-8">
                        {blog.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <User className="h-4 w-4" />
                            <span>{blog.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{blog.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>{blog.readTime}</span>
                        </div>
                    </div>
                </header>

                {/* Featured Image */}
                <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-[400px] object-cover"
                    />
                </div>

                {/* Article Content */}
                <div className="prose prose-lg prose-purple max-w-none">
                    <ReactMarkdown
                        components={{
                            code({ node, inline, className, children, ...props }) {
                                const match = /language-(\w+)/.exec(className || '');
                                return !inline && match ? (
                                    <SyntaxHighlighter
                                        style={vscDarkPlus}
                                        language={match[1]}
                                        PreTag="div"
                                        className="rounded-lg"
                                        {...props}
                                    >
                                        {String(children).replace(/\n$/, '')}
                                    </SyntaxHighlighter>
                                ) : (
                                    <code className={className} {...props}>
                                        {children}
                                    </code>
                                );
                            },
                            h1: ({ children }) => (
                                <h1 className="text-4xl font-bold mt-12 mb-6 text-purple-700">
                                    {children}
                                </h1>
                            ),
                            h2: ({ children }) => (
                                <h2 className="text-3xl font-bold mt-10 mb-4 text-purple-600">
                                    {children}
                                </h2>
                            ),
                            h3: ({ children }) => (
                                <h3 className="text-2xl font-bold mt-8 mb-3 text-purple-500">
                                    {children}
                                </h3>
                            ),
                            p: ({ children }) => (
                                <p className="mb-6 leading-relaxed text-gray-700">
                                    {children}
                                </p>
                            ),
                            ul: ({ children }) => (
                                <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">
                                    {children}
                                </ul>
                            ),
                            ol: ({ children }) => (
                                <ol className="list-decimal list-inside mb-6 space-y-2 text-gray-700">
                                    {children}
                                </ol>
                            ),
                            blockquote: ({ children }) => (
                                <blockquote className="border-l-4 border-purple-500 pl-6 italic my-6 text-gray-600">
                                    {children}
                                </blockquote>
                            ),
                            a: ({ children, href }) => (
                                <a
                                    href={href}
                                    className="text-purple-600 hover:text-purple-700 underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {children}
                                </a>
                            ),
                        }}
                    >
                        {blog.content}
                    </ReactMarkdown>
                </div>

                {/* Article Footer */}
                <footer className="mt-16 pt-8 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                        <Link to="/blog">
                            <Button variant="outline" className="gap-2">
                                <ArrowLeft className="h-4 w-4" />
                                Back to All Articles
                            </Button>
                        </Link>

                        <Link to="/#contact">
                            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                                Get in Touch
                            </Button>
                        </Link>
                    </div>
                </footer>
            </div>
        </article>
    );
};

export default BlogArticle;
