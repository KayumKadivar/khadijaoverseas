"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ShoppingBag, Phone, ArrowRight, Compass, Leaf } from "lucide-react";
import { FadeUp, Stagger, StaggerItem } from "@/components/Reveal";

export default function NotFound() {
  const flakeVariants = {
    animate: (i) => ({
      y: [0, -40, 0],
      x: [0, i % 2 === 0 ? 20 : -20, 0],
      rotate: [0, i % 2 === 0 ? 60 : -60, 0],
      opacity: [0.15, 0.7, 0.15],
      transition: {
        duration: 6 + i * 2.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    })
  };

  const navItems = [
    {
      href: "/",
      title: "Back to Home",
      description: "Return to our homepage and explore our premium trade services.",
      icon: Home,
      label: "Go Home",
    },
    {
      href: "/products",
      title: "Browse Products",
      description: "Explore our full range of premium dehydrated onion and garlic.",
      icon: ShoppingBag,
      label: "Our Range",
    },
    {
      href: "/contact",
      title: "Get in Touch",
      description: "Send us an inquiry or get a custom bulk order quote directly.",
      icon: Phone,
      label: "Inquiry Now",
    }
  ];

  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center pt-36 pb-20 px-4 text-center bg-background relative overflow-hidden">
      {/* Decorative Blur Blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[450px] h-[250px] md:h-[450px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[250px] md:w-[450px] h-[250px] md:h-[450px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Dehydrated Kibbles/Flakes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={flakeVariants}
            animate="animate"
            className="absolute bg-accent/25 rounded-sm shadow-sm"
            style={{
              width: `${10 + (i % 3) * 5}px`,
              height: `${8 + (i % 2) * 5}px`,
              top: `${20 + i * 8}%`,
              left: `${15 + i * 10}%`,
              transform: `rotate(${i * 45}deg)`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center max-w-4xl">
        
        {/* Animated Badge */}
        <FadeUp delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-semibold text-xs tracking-wider uppercase mb-6 animate-pulse">
            <Compass className="h-4 w-4 animate-spin-slow" />
            <span>Error 404</span>
          </div>
        </FadeUp>

        {/* Big styled 404 block with floating onion background */}
        <div className="relative w-full flex items-center justify-center select-none">
          <FadeUp delay={0.2}>
            <h1 className="font-serif text-[10rem] md:text-[15rem] font-extrabold leading-none tracking-tighter text-primary/5 select-none relative z-0">
              404
            </h1>
          </FadeUp>

          {/* Floating spice illustration in center */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-[#1E3D2F]/20"
            >
              <svg width="180" height="180" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-40">
                <path d="M50 90C72.0914 90 90 72.0914 90 50C90 27.9086 72.0914 10 50 10C27.9086 10 10 27.9086 10 50C10 72.0914 27.9086 90 50 90Z" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M50 20C40 30 35 45 35 55C35 65 42 75 50 80C58 75 65 65 65 55C65 45 60 30 50 20Z" stroke="currentColor" strokeWidth="2" />
                <circle cx="50" cy="53" r="6" stroke="currentColor" strokeWidth="2" />
              </svg>
            </motion.div>
          </div>
        </div>

        {/* Text Details */}
        <div className="max-w-xl -mt-6 md:-mt-10 relative z-10">
          <FadeUp delay={0.3}>
            <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-primary tracking-tight leading-tight mb-4">
              Page <span className="italic text-accent">Not Found</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.4}>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8 text-balance">
              The page you are looking for doesn&apos;t exist,. Let&apos;s guide you back to our sourcing resources.
            </p>
          </FadeUp>
        </div>

        {/* Grid of Navigation Cards */}
        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-4 text-left">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.href} className="flex">
                <Link
                  href={item.href}
                  className="w-full bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-primary/5 shadow-soft hover:shadow-elegant hover:border-accent/30 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="h-12 w-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-primary group-hover:text-accent transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mt-2">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-primary/5 flex items-center justify-between text-xs font-bold tracking-wider text-primary/70 uppercase group-hover:text-accent transition-colors duration-300">
                    <span>{item.label}</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>

        {/* Footer help note */}
        <FadeUp delay={0.8} className="mt-12 text-lg text-muted-foreground/60 flex items-center gap-2">
          <Leaf className="h-3.5 w-3.5 text-accent" />
          <span>Supplying Premium Quality Dehydrated Products Worldwide</span>
        </FadeUp>

      </div>
    </div>
  );
}
