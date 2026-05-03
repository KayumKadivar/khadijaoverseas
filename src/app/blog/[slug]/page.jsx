"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Tag, Share2 } from "lucide-react";
import { blogs } from "@/data/blogs";
import { motion } from "framer-motion";
import { FadeUp } from "@/components/Reveal";

export default function BlogPost() {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h1 className="text-4xl font-serif font-bold text-primary mb-4">Post Not Found</h1>
        <Link href="/blog" className="text-accent font-bold hover:underline">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      <article className="container mx-auto px-4 max-w-4xl">
        <FadeUp>
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground hover:text-accent transition-all mb-12 group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Articles
          </Link>

          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-primary/5 text-primary px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border border-primary/10">
                {blog.category}
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary mb-8 leading-tight">
              {blog.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-8 py-6 border-y border-primary/5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-wider uppercase text-muted-foreground">Written by</div>
                  <div className="text-sm font-bold text-primary">{blog.author}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-wider uppercase text-muted-foreground">Published on</div>
                  <div className="text-sm font-bold text-primary">{blog.date}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-16 shadow-elegant bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
             <span className="text-primary/20 font-serif italic text-2xl">Khadija Overseas</span>
          </div>

          <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-primary prose-p:text-muted-foreground prose-strong:text-primary">
            <p className="text-xl font-medium text-primary/80 mb-8 leading-relaxed italic border-l-4 border-accent pl-6">
              {blog.excerpt}
            </p>
            <div className="text-lg leading-relaxed space-y-6">
              {blog.content}
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>

          <div className="mt-20 pt-10 border-t border-primary/5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Share this article:</span>
              <div className="flex gap-2">
                {[1, 2, 3].map((i) => (
                  <button key={i} className="h-10 w-10 rounded-full bg-primary/5 text-primary hover:bg-accent hover:text-white transition-all flex items-center justify-center">
                    <Share2 className="h-4 w-4" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>
      </article>
    </div>
  );
}
