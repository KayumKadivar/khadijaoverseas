"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Leaf, CheckCircle2, Phone } from "lucide-react";
import { motion } from "framer-motion";

// Assets
import heroSpread from "@/assets/hero-spread.jpg";
import ingredientsFlatlay from "@/assets/ingredients-flatlay.webp";
// import cooking2 from "@/assets/cooking-2.webp";
// import ctaBg from "@/assets/cta-bg.webp";

// Data and Components
import { products, mainCategories, industries, certifications } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import { FadeUp, Stagger, StaggerItem } from "@/components/Reveal";

// Range card item list — exact order matching the reference
const onionRange = [
  { slug: "onion-flakes", label: "Onion Flakes", icon: "Onion" },
  { slug: "onion-powder", label: "Onion Powder", icon: "Powder" },
  { slug: "onion-granules", label: "Onion Granules", icon: "Granules" },
  { slug: "onion-minced", label: "Minced Onion", icon: "Minced" },
];
const garlicRange = [
  { slug: "garlic-flakes", label: "Garlic Flakes", icon: "Garlic" },
  { slug: "garlic-powder", label: "Garlic Powder", icon: "Powder" },
  { slug: "garlic-granules", label: "Garlic Granules", icon: "Granules" },
  { slug: "garlic-minced", label: "Chopped Garlic", icon: "Minced" },
];


const RangeItem = ({ slug, label, icon }) => {
  const IconComponent = ({ name }) => {
    const iconStyles = "h-4 w-4 text-accent";
    switch (name) {
      case "Onion":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconStyles}>
            <path d="M12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z" />
            <path d="M12 4v4" />
            <path d="M12 16v4" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        );
      case "Garlic":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconStyles}>
            <path d="M12 22c4.418 0 8-3.582 8-8 0-4-3-7-3-7s-1-3-5-3-5 3-5 3-3 3-3 7c0 4.418 3.582 8 8 8z" />
            <path d="M12 22V10" />
          </svg>
        );
      case "Powder":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconStyles}>
            <path d="M6 13h12M8 9h8M10 5h4M4 17h16M2 21h20" />
          </svg>
        );
      case "Granules":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconStyles}>
            <rect x="4" y="4" width="4" height="4" rx="1" />
            <rect x="10" y="4" width="4" height="4" rx="1" />
            <rect x="16" y="4" width="4" height="4" rx="1" />
            <rect x="4" y="10" width="4" height="4" rx="1" />
            <rect x="10" y="10" width="4" height="4" rx="1" />
            <rect x="16" y="10" width="4" height="4" rx="1" />
            <rect x="4" y="16" width="4" height="4" rx="1" />
            <rect x="10" y="16" width="4" height="4" rx="1" />
            <rect x="16" y="16" width="4" height="4" rx="1" />
          </svg>
        );
      case "Minced":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconStyles}>
            <path d="M3 6h18M3 12h18M3 18h18" />
            <path d="M7 3v18M17 3v18" />
          </svg>
        );
      default:
        return <Leaf className={iconStyles} />;
    }
  };

  return (
    <li>
      <Link
        href={`/products/${slug}`}
        className="flex items-center justify-between gap-2 px-2 py-1.5 rounded-lg hover:bg-white/5 transition-colors group"
      >
        <span className="flex items-center gap-3">
          <span className="h-8 w-8 rounded-full border border-accent/30 flex items-center justify-center bg-accent/5 transition-colors group-hover:bg-accent/10">
            <IconComponent name={icon} />
          </span>
          <span className="font-medium text-sm text-white/90 group-hover:text-white transition-colors">{label}</span>
        </span>
        <ArrowRight className="h-3.5 w-3.5 text-accent/70 transition-transform group-hover:translate-x-0.5 group-hover:text-accent" />
      </Link>
    </li>
  );
};

export default function Home() {
  return (
    <>
      {/* HERO — exact match to reference: cream left, food image right, centered range card, trust bar */}
      <section className="relative overflow-hidden bg-gradient-hero lg:min-h-screen lg:flex lg:items-center">
        {/* Cream/beige background on the LEFT 50% */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 bg-background z-0" />

        {/* Decorative Realistic Leaf — Top Left */}
        <div className="absolute top-[-15%] left-[-10%] text-[#2D5A27] animate-float-slow pointer-events-none z-10 hidden lg:block">
          <svg width="450" height="450" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-[-20deg] blur-[2px] opacity-40">
            <path d="M10 90C10 90 20 80 45 55C70 30 90 10 90 10C90 10 70 15 45 40C20 65 10 90 10 90Z" fill="currentColor" />
            <path d="M10 90L90 10" stroke="#1B3A2A" strokeWidth="0.5" strokeOpacity="0.5" />
            <path d="M35 65C40 65 45 70 45 70" stroke="#1B3A2A" strokeWidth="0.3" strokeOpacity="0.4" />
            <path d="M50 50C55 50 60 55 60 55" stroke="#1B3A2A" strokeWidth="0.3" strokeOpacity="0.4" />
            <path d="M25 55C20 55 15 50 15 50" stroke="#1B3A2A" strokeWidth="0.3" strokeOpacity="0.4" />
            <path d="M40 40C35 40 30 35 30 35" stroke="#1B3A2A" strokeWidth="0.3" strokeOpacity="0.4" />
          </svg>
        </div>

        {/* Decorative Realistic Leaf — Bottom Right */}
        <div className="absolute bottom-[-10%] right-[-5%] text-[#2D5A27] animate-float pointer-events-none z-10 hidden lg:block">
          <svg width="400" height="400" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-[160deg] blur-[1px] opacity-50">
            <path d="M10 90C10 90 20 80 45 55C70 30 90 10 90 10C90 10 70 15 45 40C20 65 10 90 10 90Z" fill="currentColor" />
            <path d="M10 90L90 10" stroke="#1B3A2A" strokeWidth="0.5" strokeOpacity="0.5" />
          </svg>
        </div>

        {/* Right-side food photography — covers only right 50% */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 z-0">
          <Image
            src={heroSpread}
            alt="Premium dehydrated onion and garlic products in wooden bowls in side angle"
            fill
            className="w-full h-full object-cover object-center"
            priority
          />
          {/* Soft cream fade at the seam so the center card floats nicely */}
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-background to-transparent hidden lg:block" />
          {/* Mobile readability overlay */}
          <div className="absolute inset-0 bg-background/55 lg:hidden" />
        </div>

        <div className="container mx-auto px-4 pt-28 pb-16 lg:pt-20 lg:pb-0 relative z-10">
          <div className="grid xl:grid-cols-12 gap-6 items-center">
            {/* LEFT: copy (4 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="xl:col-span-6"
            >
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold  leading-[1.05] text-balance">
                <span className="text-[#07170A]"> Premium Dehydrated Food </span>
                <span className="text-[#1D1308]"> Products Exporter from India</span>
              </h1>
              <p className="mt-6 text-base md:text-lg font-semibold text-[#000] leading-relaxed">
                Khadija Exim is a trusted exporter of premium dehydrated food products from Gujarat, India. Supplying high-quality dehydrated onion, garlic and vegetables to food manufacturers, importers and bulk buyers worldwide.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/products" className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-lg text-xs font-bold tracking-[0.15em] uppercase hover:bg-primary-glow shadow-soft hover:shadow-elegant transition-all">
                  Our Products
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="/contact" className="group inline-flex items-center gap-2 border-2 border-primary text-primary px-7 py-4 rounded-lg text-xs font-bold tracking-[0.15em] uppercase hover:bg-primary hover:text-primary-foreground transition-all">
                  Inquiry now
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-sapn-4 xl:col-span-3 flex justify-start"
            >
              <div className="bg-[#162E22] text-primary-foreground rounded-3xl p-5 shadow-2xl shadow-black/40 border border-accent/20 w-full max-w-[285px] ring-1 ring-white/5">
                <div className="text-center mb-2">
                  <h3 className="font-script text-3xl text-accent leading-none italic">Our Range</h3>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <span className="h-px w-12 bg-accent/60" />
                    <Leaf className="h-3.5 w-3.5 text-accent" />
                    <span className="h-px w-12 bg-accent/60" />
                  </div>
                </div>
                <ul className="space-y-0.5">
                  {onionRange.map((item) => <RangeItem key={item.slug} {...item} />)}
                  <li className="py-1"><div className="h-px bg-accent/25 mx-2" /></li>
                  {garlicRange.map((item) => <RangeItem key={item.slug} {...item} />)}
                </ul>
              </div>
            </motion.div>

            {/* RIGHT: spacer for image area (4 cols) */}
            <div className="lg:col-span-4" />

          </div>
        </div>
      </section>

      {/* ABOUT — factory image replaced with onion/garlic ingredients */}
      <section className="py-16 relative overflow-hidden bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            <div className="lg:col-span-7">
              <FadeUp>
                <span className="text-sm font-semibold tracking-[0.25em] text-accent uppercase">About Us</span>
                <h2 className="mt-3 font-serif text-3xl md:text-5xl text-primary font-bold leading-tight text-balance">
                  Trusted Dehydrated Food Products Export Partner from India
                </h2>
                <p className="mt-5 text-muted-foreground leading-relaxed text-xl">
                  We <strong className="text-primary">Khadija Exim</strong> is a trusted dehydrated vegetables exporter from Gujarat, India. We supply premium dehydrated onion, garlic and vegetables — available in flakes, powder, granules, minced and chopped forms — to food manufacturers, importers and distributors worldwide. Our focus is on consistent quality, reliable supply and long-term trade partnerships with global buyers.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/about" className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-lg text-sm font-semibold tracking-wider uppercase hover:bg-primary-glow shadow-soft transition-all group">
                    Know More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link href="/" className="group inline-flex items-center gap-2 border-2 border-primary text-primary px-7 py-4 rounded-lg text-xs font-bold tracking-[0.15em] uppercase hover:bg-primary hover:text-primary-foreground transition-all">
                    Our Products
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </FadeUp>
            </div>
            <div className="lg:col-span-5">
              <FadeUp delay={0.2}>
                <div className="relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-elegant ">
                    <Image
                      src={ingredientsFlatlay}
                      alt="Premium variety of dehydrated onions and garlic"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-accent/20 animate-float" />
                </div>
              </FadeUp>
            </div>
          </div>
        </div >
      </section >

      {/* PRODUCTS — premium framed section */}
      < section className="relative py-16 overflow-hidden bg-gradient-dark" >
        {/* Background Texture Only */}
        < div className="absolute inset-0 overflow-hidden pointer-events-none" >
          <div className="absolute inset-0 opacity-[0.03] grayscale invert" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')" }} />
        </div >

        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-10">
                <span className="h-px w-8 bg-accent" />
                <span className="font-serif text-4xl md:text-6xl font-bold text-accent leading-tight">Our Product Range</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {mainCategories.map((p, idx) => (
              <FadeUp key={p.slug} delay={idx * 0.1}>
                <ProductCard product={p} />
              </FadeUp>
            ))}
          </div>

          <FadeUp className="mt-10 flex flex-col items-center gap-4" delay={0.4}>
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

      </section >

      {/* INDUSTRIES */}
      < section className="py-16 bg-background" >
        <div className="container mx-auto px-4">
          <SectionHeading title="Industries We Serve" subtitle="Our dehydrated products are widely used across multiple industries worldwide." />
          <Stagger className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((i) => (
              <StaggerItem key={i.name}>
                <div className="group bg-card rounded-2xl p-7 shadow-soft hover:shadow-elegant border border-border/50 transition-all hover:-translate-y-1">
                  <div className="h-14 w-14 rounded-xl bg-gradient-dark flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform">
                    {i.icon}
                  </div>
                  <h3 className="font-serif text-xl text-primary font-semibold">{i.name}</h3>
                  <p className="mt-2 text-md text-muted-foreground leading-relaxed">{i.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section >

      {/* WHY CHOOSE US — replaces workers image with cooking image */}
      {/* <section className="py-20 md:py-28 bg-secondary/40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <Image src={cooking2} alt="" fill className="object-cover" />
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
                  <p className="mt-2 text-md text-muted-foreground leading-relaxed">{w.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section> */}

      {/* CERTIFICATIONS */}
      {/* <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <FadeUp>
            <p className="text-center text-md font-semibold tracking-[0.3em] text-muted-foreground uppercase mb-8">Certifications & Compliance</p>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
              {certifications.map((c) => (
                <div key={c} className="text-center group cursor-default">
                  <div className="h-20 w-20 mx-auto rounded-full border-2 border-primary/20 flex items-center justify-center font-serif font-bold text-primary group-hover:border-accent group-hover:text-accent transition-colors">
                    {c.split(" ")[0]}
                  </div>
                  <div className="mt-2 text-[13px] tracking-widest text-muted-foreground uppercase">Certified</div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section> */}

      {/* CTA */}
      {/* <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={ctaBg} alt="" fill className="object-cover" />
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
      </section> */}
    </>
  );
}
