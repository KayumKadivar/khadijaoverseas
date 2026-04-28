"use client";

import Link from "next/link";
import { ArrowRight, Leaf, Award, Globe, Truck, CheckCircle2, Phone } from "lucide-react";
import { motion } from "framer-motion";
import ingredientsFlatlay from "@/assets/ingredients-flatlay.webp";
import { products, industries, certifications, mainCategories } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import { FadeUp, Stagger, StaggerItem } from "@/components/Reveal";

const rangeIcons = {
  "pink-onion": "🧅",
  "red-onion": "🧅",
  "white-onion": "🧅",
  "garlic": "🧄",
  "onion-flakes": "🧅",
  "onion-powder": "🥣",
  "onion-granules": "🌰",
  "onion-chopped": "🌿",
  "onion-minced": "🍥",
  "garlic-flakes": "🧄",
  "garlic-powder": "🥣",
  "garlic-granules": "🌰",
  "garlic-chopped": "🌿",
  "garlic-minced": "🍥",
};

const heroRange = [
  { icon: rangeIcons["onion-flakes"], label: "Onion Flakes", href: "/products/onion-flakes" },
  { icon: rangeIcons["onion-powder"], label: "Onion Powder", href: "/products/onion-powder" },
  { icon: rangeIcons["onion-granules"], label: "Onion Granules", href: "/products/onion-granules" },
  { icon: rangeIcons["onion-chopped"], label: "Onion Chopped", href: "/products/onion-chopped" },
  { icon: rangeIcons["onion-minced"], label: "Onion Minced", href: "/products/onion-minced" },
  { icon: rangeIcons["garlic-flakes"], label: "Garlic Flakes", href: "/products/garlic-flakes" },
  { icon: rangeIcons["garlic-powder"], label: "Garlic Powder", href: "/products/garlic-powder" },
  { icon: rangeIcons["garlic-granules"], label: "Garlic Granules", href: "/products/garlic-granules" },
  { icon: rangeIcons["garlic-chopped"], label: "Garlic Chopped", href: "/products/garlic-chopped" },
  { icon: rangeIcons["garlic-minced"], label: "Garlic Minced", href: "/products/garlic-minced" },
];

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative flex items-center overflow-hidden bg-gradient-hero">
        {/* Background decorative elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-primary blur-[120px] pointer-events-none"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute -right-20 bottom-16 h-[500px] w-[500px] rounded-full bg-accent blur-[150px] pointer-events-none"
        />
        <div className="pointer-events-none absolute -left-10 top-20 z-0 hidden sm:block opacity-90">
          <svg
            width="220"
            height="220"
            viewBox="0 0 220 220"
            className="-rotate-[18deg]"
            aria-hidden="true"
          >
            <path d="M77 148c-33-28-35-77-12-115 42 18 64 61 52 103-7 25-20 45-40 61z" fill="#7abf54" fillOpacity="0.7" />
            <path d="M126 162c-28-24-33-62-15-96 37 16 57 50 48 83-5 19-16 35-33 48z" fill="#8fd067" fillOpacity="0.55" />
          </svg>
        </div>
        <div className="pointer-events-none absolute -bottom-14 -right-12 z-0 opacity-90">
          <svg width="240" height="240" viewBox="0 0 240 240" aria-hidden="true">
            <path d="M219 48c-40 8-78 41-87 82-8 36 6 73 38 101 26-26 42-57 44-90 2-31-6-62-23-93-2-3-3-3-5 0-4 0-7 0-11 0h44z" fill="#7fbf49" fillOpacity="0.45" />
            <ellipse cx="183" cy="187" rx="36" ry="24" fill="#6fa53f" fillOpacity="0.35" />
          </svg>
        </div>
        <div className="container mx-auto px-4 pt-28 pb-16 relative z-10">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6 relative z-10">
                {/* Background Leaf Watermark */}
                <div className="absolute -left-12 sm:-left-24 -top-8 opacity-40 pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '4s' }}>
                  <svg width="120" height="120" viewBox="0 0 24 24" fill="#a3e635" className="-rotate-12">
                    <path d="M17 8C8 10 5 16 5 22C5 22 4 19 4 15C4 11 7 8 11 6C15 4 20 2 20 2C20 2 19 6 17 8Z" opacity="0.9" />
                    <path d="M11 6C8 4 4 3 2 3C2 3 4 6 5 9C6 12 9 14 12 14C15 14 17 11 17 11C17 11 14 10 11 6Z" opacity="0.7" />
                    <path d="M17 8C20 8 22 10 22 13C22 16 19 19 15 19C11 19 9 16 9 16C9 16 12 16 15 13C18 10 17 8 17 8Z" opacity="0.7" />
                  </svg>
                </div>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-primary leading-[1.1] tracking-tight text-balance">
                Premium Dehydrated Food <br />
                <span className="text-accent italic font-script capitalize">Products</span> Exporter from India
              </h1>

              <p className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Khadija Overseas is a trusted exporter of premium dehydrated food products from Gujarat, India. Supplying high-quality dehydrated onion and garlic products to food manufacturers and bulk buyers worldwide.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-5">
                <Link href="/products" className="group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded-2xl text-sm font-bold tracking-widest uppercase hover:bg-primary-glow shadow-elegant transition-all">
                  Explore Products
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                </Link>
                <Link href="/contact" className="group inline-flex items-center justify-center gap-3 border-2 border-primary/20 text-primary px-10 py-5 rounded-2xl text-sm font-bold tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all">
                  Get a Quote
                  <Phone className="h-5 w-5" />
                </Link>
              </div>
            </motion.div>

            {/* Hero Range Card */}
            <div className="flex justify-center lg:justify-end items-center w-full mt-12 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full max-w-[320px] sm:max-w-[360px]"
              >
                <div className="bg-gradient-dark text-primary-foreground rounded-[2rem] p-6 sm:p-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] border border-accent/20 w-full z-20">
                  <div className="text-center mb-5">
                    <h3 className="font-script text-3xl sm:text-4xl text-accent">Our Range</h3>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <span className="h-px w-6 bg-accent/30" />
                      <Leaf className="h-3.5 w-3.5 text-accent" />
                      <span className="h-px w-6 bg-accent/30" />
                    </div>
                  </div>

                  <div className="space-y-1 sm:space-y-1.5">
                    {heroRange.map((item, i) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          className="flex items-center justify-between gap-3 p-1.5 sm:p-2 rounded-xl hover:bg-white/10 transition-all duration-300 group border border-transparent hover:border-accent/10"
                        >
                          <span className="flex items-center gap-3">
                            <span className="h-8 w-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-sm shadow-inner group-hover:scale-110 transition-transform duration-300">
                              {item.icon}
                            </span>
                            <span className="text-[13px] sm:text-sm font-bold tracking-wide">{item.label}</span>
                          </span>
                          <ArrowRight className="h-3.5 w-3.5 text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1]">
          <svg
            width="100%"
            height="72"
            viewBox="0 0 1440 140"
            preserveAspectRatio="none"
            aria-hidden="true"
            className="h-10 w-full sm:h-16"
          >
            <path
              d="M0 76c126 48 316 67 529 34 203-32 380-19 509 17 132 37 280 31 402-2V140H0V76z"
              fill="#f8f6eb"
              fillOpacity="0.95"
            />
            <path
              d="M0 96c158 48 347 52 547 22 197-30 369-22 516 12 134 30 258 34 377 21V140H0V96z"
              fill="#e7f0dd"
              fillOpacity="0.85"
            />
          </svg>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 sm:py-32 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-accent" />
                <span className="text-xs font-bold tracking-[0.4em] text-accent uppercase">History & Values</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-primary font-bold leading-tight">
                Quality You Can Trust,<br />
                <span className="italic text-accent/80">Service You Can Rely On</span>
              </h2>
              <div className="mt-8 space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                <p>
                  We, <strong className="text-primary font-bold">THE KHADIJAH GLOBAL</strong>, are a trusted exporter and supplier of high-quality dehydrated products, including White, Red, and Pink Onion and Dehydrated Garlic, available in various forms such as flakes, chopped, minced, granules, and powder.
                </p>
                <p>
                  We serve food processing, seasoning, snack, and HoReCa industries worldwide, delivering products as per customer requirements. With a strong commitment to quality, consistency, and timely delivery, we ensure every shipment meets high standards and reaches our clients reliably, every time.
                </p>
                <p>
                  Based in Wankaner, Gujarat, India, we operate with a strong sourcing network and reliable logistics support. Our location provides excellent connectivity to major ports like Mundra, along with well-developed transport networks, ensuring smooth and efficient export operations worldwide.
                </p>
              </div>
              <Link href="/about" className="mt-10 inline-flex items-center gap-4 bg-primary text-primary-foreground px-8 py-4 rounded-2xl text-sm font-bold tracking-widest uppercase hover:bg-primary-glow shadow-elegant transition-all group">
                Discover Our Story
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="relative rounded overflow-hidden shadow-2xl">
                <img
                  src={ingredientsFlatlay.src || ingredientsFlatlay}
                  alt="Dehydrated onions and garlic"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="py-24 sm:py-32 bg-gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <Globe className="absolute top-0 right-0 h-[600px] w-[600px] text-white" />
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20"
          >
            <div className="max-w-3xl">
              <h2 className="font-serif text-4xl sm:text-6xl font-bold text-white leading-[1.1]">
                Premium <span className="font-script text-accent italic">Dehydrated</span> <br />
                Export Quality
              </h2>
            </div>
            <p className="max-w-sm text-white/50 text-xl leading-relaxed border-l-4 border-accent/20 pl-8">
              Sourced from the heart of Gujarat, processed with precision for the global market.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {mainCategories.map((p, idx) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <ProductCard product={p} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 flex flex-col items-center"
          >
            <Link href="/products" className="group relative inline-flex items-center gap-6 bg-transparent text-white px-12 py-6 rounded-full text-sm font-bold tracking-[0.3em] uppercase border border-white/10 hover:border-accent transition-all duration-500 overflow-hidden">
              <span className="relative z-10">All Products</span>
              <div className="absolute inset-0 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
              <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-3 relative z-10 group-hover:text-primary" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 sm:py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-[3rem] sm:rounded-[5rem] overflow-hidden bg-gradient-hero border border-border shadow-2xl p-10 sm:p-24"
          >
            <div className="grid lg:grid-cols-[1.1fr_auto] gap-16 items-center">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-16 w-16 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
                    <Phone className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-widest text-accent uppercase">Let's Connect</span>
                    <h3 className="text-lg font-bold text-primary">Call Support</h3>
                  </div>
                </div>
                <h2 className="font-serif text-4xl sm:text-6xl font-bold text-primary leading-tight">
                  Ready to elevate your <br />
                  <span className="text-accent italic font-script">Culinary</span> business?
                </h2>
                <p className="mt-8 text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  Whether you need bulk supply or custom processing, we are here to provide the best solutions for your global requirements.
                </p>
              </div>
              <Link href="/contact" className="inline-flex items-center justify-center gap-5 bg-primary text-primary-foreground px-12 py-7 rounded-[2rem] text-sm font-bold tracking-[0.2em] uppercase hover:bg-primary-glow shadow-2xl transition-all active:scale-95">
                Get Quotation
                <ArrowRight className="h-6 w-6" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
