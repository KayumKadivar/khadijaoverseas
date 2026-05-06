"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";
import { motion } from "framer-motion";
import { blogs } from "@/data/blogs";
import { FadeUp } from "@/components/Reveal";

export default function BlogPage() {
  return (
    <div className="pt-32 pb-20">
      {/* Header Section */}
      <section className="container mx-auto px-4 mb-16">
        <FadeUp>
          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-[0.3em] text-accent uppercase mb-4 block">Knowledge Center</span>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">Our Blog</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Insights, updates, and expert opinions from the world of dehydrated food exports. 
              Stay informed about industry trends and quality standards.
            </p>
          </div>
        </FadeUp>
      </section>

      {/* Blog Grid */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <FadeUp key={blog.slug} delay={idx * 0.1}>
              <article className="group bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 flex flex-col h-full border border-primary/5">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-primary/10 animate-pulse" />
                  {/* Image placeholder since we don't have real images yet */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-primary/40 font-serif italic">Khadija Exim</span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md text-primary px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-sm">
                      <Tag className="h-3 w-3 text-accent" />
                      {blog.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-4 mb-4 text-xs font-medium text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-accent" />
                      {blog.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5 text-accent" />
                      {blog.author}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                    <Link href={`/blog/${blog.slug}`}>
                      {blog.title}
                    </Link>
                  </h3>
                  
                  <p className="text-muted-foreground mb-8 line-clamp-3 leading-relaxed">
                    {blog.excerpt}
                  </p>

                  <div className="mt-auto pt-6 border-t border-primary/5">
                    <Link 
                      href={`/blog/${blog.slug}`} 
                      className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-primary hover:text-accent transition-all group/btn"
                    >
                      Read Full Article
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </section>
    </div>
  );
}
