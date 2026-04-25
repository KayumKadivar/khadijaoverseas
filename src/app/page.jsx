"use client";

import Link from "next/link";
import { ArrowRight, Leaf, Award, Globe, Truck, CheckCircle2, Phone } from "lucide-react";
import { motion } from "framer-motion";
import ingredientsFlatlay from "@/assets/ingredients-flatlay.webp";
import cooking2 from "@/assets/cooking-2.webp";
import ctaBg from "@/assets/cta-bg.webp";
import herosection from "@/assets/herosection.png";
import { products, industries, certifications } from "@/data/products";
import SectionHeading from "@/components/SectionHeading";
import { FadeUp, Stagger, StaggerItem } from "@/components/Reveal";

const rangeIcons = {
  "white-onion-flakes": "🧅",
  "white-onion-chopped": "🧅",
  "white-onion-minced": "🧅",
  "white-onion-granules": "🧅",
  "white-onion-powder": "🥣",
  "red-onion-flakes": "🧅",
  "red-onion-chopped": "🧅",
  "red-onion-minced": "🧅",
  "red-onion-granules": "🧅",
  "red-onion-powder": "🥣",
};

export default function Home() {
  const productCategories = [
    {
      id: "white",
      name: "White Onion",
      description: "Flakes, chopped, minced, granules, and powder.",
      image: products.find((p) => p.slug === "white-onion-flakes")?.image,
      href: "/products?category=white",
    },
    {
      id: "red",
      name: "Red Onion",
      description: "Premium red onion range for flavor and color.",
      image: products.find((p) => p.slug === "red-onion-flakes")?.image,
      href: "/products?category=red",
    },
    {
      id: "pink",
      name: "Pink Onion",
      description: "Mild profile formats for specialty products.",
      image: products.find((p) => p.slug === "pink-onion-flakes")?.image,
      href: "/products?category=pink",
    },
    {
      id: "garlic",
      name: "Garlic",
      description: "Garlic flakes, chopped, minced, granules, and powder.",
      image: products.find((p) => p.slug === "garlic-flakes")?.image,
      href: "/products?category=garlic",
    },
  ];

  const heroRangeItems = [
    { slug: "white-onion-flakes", label: "Onion Flakes" },
    { slug: "white-onion-powder", label: "Onion Powder" },
    { slug: "white-onion-granules", label: "Onion Granules" },
    { slug: "white-onion-minced", label: "Minced Onion" },
    { slug: "garlic-flakes", label: "Garlic Flakes" },
    { slug: "garlic-powder", label: "Garlic Powder" },
    { slug: "garlic-granules", label: "Garlic Granules" },
    { slug: "garlic-chopped", label: "Chopped Garlic" },
  ];

  return (
    <>
      {/* HERO SECTION - MODERN EDITORIAL FLOATING LAYOUT */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-24 pb-20 lg:pt-32 lg:pb-40 overflow-hidden bg-[#faf9f6]">
        {/* Massive Background Text for Depth - Hidden on mobile for performance */}
        <div className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <h1 className="text-[22vw] font-bold text-primary/[0.03] uppercase tracking-tighter whitespace-nowrap">
            Premium • Dehydrated • Quality
          </h1>
        </div>

        {/* Floating Decorative Glows */}
        <div className="absolute top-[15%] left-[5%] w-32 h-32 bg-accent/15 rounded-full blur-3xl animate-pulse pointer-events-none" />
        <div className="absolute bottom-[15%] right-[5%] w-48 h-48 bg-primary/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center">
            {/* Header Text - Editorial Style */}
            <div className="max-w-5xl text-center mb-12 lg:mb-20">
              <FadeUp>
                <div className="inline-block px-4 py-1.5 rounded-full border border-primary/15 bg-white/60 backdrop-blur-md shadow-sm mb-6 animate-fade-in">
                  <span className="text-[10px] font-bold tracking-[0.4em] text-primary uppercase">Est. 2012 • Global Exporters</span>
                </div>
                <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-primary font-bold leading-[0.95] tracking-tight">
                  Taste of <br />
                  <span className="text-accent italic font-script lowercase text-6xl sm:text-7xl md:text-9xl">nature,</span> <br />
                  Supplied.
                </h1>
                <p className="mt-8 md:mt-12 text-muted-foreground text-base md:text-xl max-w-xl mx-auto leading-relaxed px-4">
                  We bridge the gap between Indian farms and global kitchens with premium grade dehydrated products.
                </p>
                
                <div className="mt-10 md:mt-14 flex flex-wrap justify-center gap-4 md:gap-6 px-4">
                  <Link href="/products" className="relative overflow-hidden group bg-primary text-white px-8 md:px-12 py-4 md:py-5 rounded-full text-[11px] md:text-xs font-bold tracking-widest uppercase transition-all hover:pr-14 md:hover:pr-16 shadow-2xl">
                    <span className="relative z-10">Explore Collection</span>
                    <ArrowRight className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all h-5 w-5" />
                  </Link>
                  <Link href="/contact" className="px-8 md:px-12 py-4 md:py-5 rounded-full border border-primary/25 text-primary text-[11px] md:text-xs font-bold tracking-widest uppercase hover:bg-white transition-all shadow-sm">
                    Inquiry Now
                  </Link>
                </div>
              </FadeUp>
            </div>

            {/* Central Floating Visual Section */}
            <div className="relative w-full max-w-5xl px-4 mt-4 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "circOut" }}
                className="relative z-10"
              >
                <div className="relative group">
                  {/* The Main Image with modern editorial frame */}
                  <div className="relative rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-[0_40px_100px_-25px_rgba(0,0,0,0.35)] transition-transform duration-700 hover:scale-[1.01]">
                    <img 
                      src={herosection.src || herosection} 
                      alt="Premium Dehydrated Ingredients Showcase" 
                      className="w-full h-auto object-cover min-h-[300px] md:min-h-auto" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-50" />
                  </div>
                  
                  {/* Floating Content - Onion Pill */}
                  <div className="absolute -top-6 -left-4 md:-top-10 md:-left-12 lg:-left-24 animate-float-slow z-20">
                    <div className="bg-white/95 backdrop-blur-xl p-3 md:p-4 rounded-2xl md:rounded-3xl shadow-2xl border border-white flex items-center gap-3 md:gap-4">
                      <div className="h-10 w-10 md:h-14 md:w-14 rounded-xl md:rounded-2xl bg-accent/20 flex items-center justify-center text-xl md:text-3xl">🧅</div>
                      <div>
                        <div className="text-[9px] md:text-[10px] font-bold text-accent uppercase tracking-widest">Premium</div>
                        <div className="text-xs md:text-sm font-bold text-primary">Onion Flakes</div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Content - Garlic Pill */}
                  <div className="absolute -bottom-6 -right-4 md:-bottom-10 md:-right-12 lg:-right-24 animate-float z-20">
                    <div className="bg-gradient-dark p-3 md:p-4 rounded-2xl md:rounded-3xl shadow-2xl border border-white/10 flex items-center gap-3 md:gap-4 text-white">
                      <div className="h-10 w-10 md:h-14 md:w-14 rounded-xl md:rounded-2xl bg-white/10 flex items-center justify-center text-xl md:text-3xl">🧄</div>
                      <div>
                        <div className="text-[9px] md:text-[10px] font-bold text-accent uppercase tracking-widest">A-Grade Export</div>
                        <div className="text-xs md:text-sm font-bold">Garlic Powder</div>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Quality Badge */}
                  <div className="absolute top-1/2 -right-10 lg:-right-16 -translate-y-1/2 hidden lg:block animate-float-slow z-20">
                    <div className="h-28 w-28 rounded-full bg-accent border-[6px] border-white shadow-2xl flex items-center justify-center text-center p-3 -rotate-12 hover:rotate-0 transition-transform duration-500 cursor-default">
                      <span className="text-[11px] font-black leading-tight text-primary uppercase">100% Organic Quality</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Central Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-accent/15 rounded-full blur-[100px] md:blur-[140px] -z-0" />
            </div>
          </div>
        </div>

        {/* Feature Ticker / Quick Stats */}
        <div className="absolute bottom-10 inset-x-0 z-20 overflow-hidden py-4 border-y border-primary/5 bg-white/30 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {[
                { icon: Leaf, text: "Natural Pure" },
                { icon: Award, text: "Certified Quality" },
                { icon: Globe, text: "Global Export" },
                { icon: Truck, text: "Safe Logistics" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-primary/60 group">
                  <item.icon className="h-4 w-4 text-accent group-hover:scale-125 transition-transform" />
                  <span className="text-[10px] font-bold tracking-widest uppercase">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <span className="text-xs font-semibold tracking-[0.25em] text-accent uppercase">About Us</span>
              <h2 className="mt-3 font-serif text-3xl md:text-5xl text-primary font-bold leading-tight text-balance">
                Quality You Can Trust,<br />Service You Can Rely On
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                We, <strong className="text-primary">KHADIJA OVERSEAS</strong>, are a trusted exporter and supplier of high-quality dehydrated products, including White, Red, and Pink <strong className="text-primary">Onion and Dehydrated Garlic</strong>, available in various forms such as flakes, chopped, minced, granules, and powder.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We serve food processing, seasoning, snack, and HoReCa industries worldwide. Based in Wankaner, Gujarat, India, we operate with strong sourcing and reliable logistics support to major ports like Mundra.
              </p>
              <Link href="/about" className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-lg text-sm font-semibold tracking-wider uppercase hover:bg-primary-glow shadow-soft transition-all group">
                Read More About Us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                  <img
                    src={ingredientsFlatlay.src || ingredientsFlatlay}
                    alt="Premium variety of dehydrated onions and garlic"
                    width={1280}
                    height={960}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-accent/20 animate-float" />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="relative py-28 md:py-40 overflow-hidden bg-gradient-dark">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 opacity-[0.03] grayscale invert" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.webp')" }} />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-accent" />
                <span className="text-xs font-bold tracking-[0.4em] text-accent uppercase">Our Production</span>
              </div>
              <h2 className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight">
                Premium <span className="font-script text-accent italic">Dehydrated</span> <br />
                Nature's Best
              </h2>
            </div>
            <p className="max-w-sm text-white/60 text-lg leading-relaxed border-l-2 border-accent/30 pl-6">
              Carefully crafted dehydrated ingredients — bold flavor, long shelf life, and export-grade quality for global markets.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {productCategories.map((category, idx) => (
              <FadeUp key={category.id} delay={idx * 0.1}>
                <Link
                  href={category.href}
                  className="group relative block aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant hover:shadow-gold transition-all duration-700 bg-card border border-primary/10"
                >
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={category.image?.src || category.image}
                      alt={`${category.name} products`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500" />
                  </div>

                  <div className="absolute top-4 right-4 transition-all duration-500">
                    <div className="h-10 w-10 rounded-full bg-accent/30 border border-accent/40 flex items-center justify-center">
                      <Leaf className="h-5 w-5 text-accent" />
                    </div>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end transition-transform duration-500">
                    <div className="bg-black/80 border border-white/10 rounded-2xl p-5 shadow-2xl">
                      <span className="text-[10px] tracking-[0.2em] font-bold text-accent uppercase mb-1 block">Premium Export</span>
                      <h3 className="font-serif text-2xl text-white font-bold leading-tight drop-shadow-sm">
                        {category.name}
                      </h3>
                      <p className="text-white/80 text-xs mt-2 line-clamp-2 transition-opacity duration-500 leading-relaxed">
                        {category.description}
                      </p>

                      <div className="flex items-center justify-between mt-4">
                        <div className="h-px flex-1 bg-white/20 mr-4" />
                        <div className="h-10 w-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-gold transition-transform duration-500 group-hover:scale-110">
                          <ArrowRight className="h-5 w-5" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 border-2 border-accent/0 group-hover:border-accent/40 rounded-3xl transition-colors duration-700 pointer-events-none" />
                </Link>
              </FadeUp>
            ))}
          </div>

          <FadeUp className="mt-20 flex flex-col items-center gap-6" delay={0.4}>
            <div className="flex items-center gap-4 text-white/40 mb-2">
              <span className="h-px w-20 bg-white/10" />
              <Leaf className="h-5 w-5" />
              <span className="h-px w-20 bg-white/10" />
            </div>
            <Link href="/products" className="group relative inline-flex items-center gap-4 bg-transparent text-white px-10 py-5 rounded-full text-sm font-bold tracking-[0.2em] uppercase border border-white/20 hover:border-accent transition-all duration-500">
              <span className="relative z-10">View All Collections</span>
              <div className="absolute inset-0 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2 relative z-10 group-hover:text-primary" />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading kicker="Industries" title="Industries We Serve" subtitle="Our dehydrated products are widely used across multiple industries worldwide." />
          <Stagger className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((i) => (
              <StaggerItem key={i.name}>
                <div className="group bg-card rounded-2xl p-7 shadow-soft hover:shadow-elegant border border-border/50 transition-all hover:-translate-y-1">
                  <div className="h-14 w-14 rounded-xl bg-gradient-dark flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform">
                    {i.icon}
                  </div>
                  <h3 className="font-serif text-xl text-primary font-semibold">{i.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{i.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 md:py-28 bg-secondary/40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img src={cooking2.src || cooking2} alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-secondary/80" />
        </div>
        <div className="container mx-auto px-4 relative">
          <SectionHeading kicker="Why Choose Us" title="Why Choose Khadija Overseas?" subtitle="We ensure premium quality products and the best experience for our clients." />
          <Stagger className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              { t: "Premium Quality", d: "Premium quality at every processing step." },
              { t: "Advanced Processing", d: "Modern technology ensures hygiene and quality." },
              { t: "Global Standards", d: "Products meet international standards." },
              { t: "Timely Delivery", d: "On-time delivery across the globe." },
              { t: "Customer Support", d: "Our team is always ready to support you." },
            ].map((w) => (
              <StaggerItem key={w.t}>
                <div className="bg-card rounded-2xl p-6 text-center shadow-soft hover:shadow-elegant transition-all hover:-translate-y-1 h-full border border-border/50">
                  <div className="h-14 w-14 mx-auto rounded-full bg-gradient-gold flex items-center justify-center mb-4 shadow-gold">
                    <CheckCircle2 className="h-7 w-7 text-primary" />
                  </div>
                  <h4 className="font-serif text-base text-primary font-semibold">{w.t}</h4>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{w.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <FadeUp>
            <p className="text-center text-xs font-semibold tracking-[0.3em] text-muted-foreground uppercase mb-8">Certifications & Compliance</p>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
              {certifications.map((c) => (
                <div key={c} className="text-center group cursor-default">
                  <div className="h-20 w-20 mx-auto rounded-full border-2 border-primary/20 flex items-center justify-center font-serif font-bold text-primary group-hover:border-accent group-hover:text-accent transition-colors">
                    {c.split(" ")[0]}
                  </div>
                  <div className="mt-2 text-[10px] tracking-widest text-muted-foreground uppercase">Certified</div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={ctaBg.src || ctaBg} alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-8 items-center text-primary-foreground">
            <FadeUp>
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full border-2 border-accent flex items-center justify-center shrink-0">
                  <Phone className="h-7 w-7 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold">Need Bulk Supply?</h3>
                  <p className="text-primary-foreground/80 text-sm mt-1">We provide customized solutions for your business needs.</p>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.15} className="md:text-right">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-4 rounded-lg text-sm font-semibold tracking-wider uppercase hover:bg-accent-glow shadow-gold transition-all group">
                Get a Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
