"use client";

import Link from "next/link";
import { ArrowRight, Leaf, Award, Globe, Truck, CheckCircle2, Phone } from "lucide-react";
import { motion } from "framer-motion";
import heroSectionImage from "@/assets/herosection.png";
import ingredientsFlatlay from "@/assets/ingredients-flatlay.webp";
import cooking2 from "@/assets/cooking-2.webp";
import ctaBg from "@/assets/cta-bg.webp";
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
  "minced-onion": "🍥",
  "garlic-flakes": "🧄",
  "garlic-powder": "🥣",
  "garlic-granules": "🌰",
  "chopped-garlic": "🌿",
};

const heroRange = [
  { icon: rangeIcons["onion-flakes"], label: "Onion Flakes", href: "/products/onion-flakes" },
  { icon: rangeIcons["onion-powder"], label: "Onion Powder", href: "/products/onion-powder" },
  { icon: rangeIcons["onion-granules"], label: "Onion Granules", href: "/products/onion-granules" },
  { icon: rangeIcons["minced-onion"], label: "Minced Onion", href: "/products/minced-onion" },
  { icon: rangeIcons["garlic-flakes"], label: "Garlic Flakes", href: "/products/garlic-flakes" },
  { icon: rangeIcons["garlic-powder"], label: "Garlic Powder", href: "/products/garlic-powder" },
  { icon: rangeIcons["garlic-granules"], label: "Garlic Granules", href: "/products/garlic-granules" },
  { icon: rangeIcons["chopped-garlic"], label: "Chopped Garlic", href: "/products/chopped-garlic" },
];

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-hero border-b border-border/50">
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

        <div className="container mx-auto px-4 pt-28 pb-16 relative z-10">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
            {/* Hero Content */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.span 
                  initial={{ width: 0 }}
                  whileInView={{ width: 40 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="h-0.5 bg-accent" 
                />
                <span className="text-xs sm:text-sm tracking-[0.3em] font-bold text-primary uppercase">Welcome To Khadija Overseas</span>
              </div>
              
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-bold text-primary leading-[1.1] tracking-tight text-balance">
                Dehydrated Food <br />
                <span className="text-accent italic font-script capitalize">Products</span> Supplier
              </h1>
              
              <p className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Khadija Overseas is a leading dehydrated food products supplier and exporter from India. We deliver premium quality products that meet international standards.
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

            {/* Hero Image & Range Card */}
            <div className="relative min-h-[540px] lg:min-h-[600px]">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
              >
                <img
                  src={heroSectionImage.src || heroSectionImage}
                  alt="Premium dehydrated ingredients"
                  className="w-full h-full object-cover"
                />
                <div className="absolute" />
              </motion.div>

              {/* Floating Range Card - Restored to Absolute */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute left-4 top-10 sm:left-10 bg-gradient-dark text-primary-foreground rounded-[2rem] p-6 sm:p-8 shadow-2xl border border-accent/20 w-[240px] sm:w-[280px] z-20"
              >
                <div className="text-center mb-6">
                  <h3 className="font-script text-3xl sm:text-4xl text-accent">Our Range</h3>
                  <div className="flex items-center justify-center gap-2 mt-1">
                    <span className="h-px w-6 bg-accent/30" />
                    <Leaf className="h-3.5 w-3.5 text-accent" />
                    <span className="h-px w-6 bg-accent/30" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  {heroRange.slice(0, 6).map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center justify-between gap-3 p-2 rounded-xl hover:bg-white/10 transition-all group"
                      >
                        <span className="flex items-center gap-3">
                          <span className="h-8 w-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-sm">
                            {item.icon}
                          </span>
                          <span className="text-xs sm:text-sm font-bold tracking-tight">{item.label}</span>
                        </span>
                        <ArrowRight className="h-3 w-3 text-accent opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
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
              <div className="mt-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  We, <strong className="text-primary font-bold">KHADIJA OVERSEAS</strong>, are a trusted exporter and supplier of high-quality dehydrated products, including White, Red, and Pink <strong className="text-primary">Onion and Dehydrated Garlic</strong>.
                </p>
                <p>
                  We serve food processing, seasoning, snack, and HoReCa industries worldwide. Based in Wankaner, Gujarat, India, we operate with strong sourcing and reliable logistics support.
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
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                <img
                  src={ingredientsFlatlay.src || ingredientsFlatlay}
                  alt="Dehydrated onions and garlic"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-accent/10 blur-2xl animate-pulse" />
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
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-12 bg-accent" />
                <span className="text-xs font-bold tracking-[0.5em] text-accent uppercase">Explore Our Range</span>
              </div>
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
