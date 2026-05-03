"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Leaf, CheckCircle2, Phone } from "lucide-react";
import { motion } from "framer-motion";

// Assets
import heroSpread from "@/assets/hero-spread.jpg";
import ingredientsFlatlay from "@/assets/ingredients-flatlay.webp";
import cooking2 from "@/assets/cooking-2.webp";
import ctaBg from "@/assets/cta-bg.webp";

// Data and Components
import { products, industries, certifications } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import { FadeUp, Stagger, StaggerItem } from "@/components/Reveal";

// Range card item list — exact order matching the reference
const onionRange = [
  { slug: "onion-flakes", label: "Onion Flakes", icon: "🧅" },
  { slug: "onion-powder", label: "Onion Powder", icon: "🥣" },
  { slug: "onion-granules", label: "Onion Granules", icon: "🌰" },
  { slug: "onion-minced", label: "Minced Onion", icon: "🍥" },
  { slug: "onion-chopped", label: "Chopped Onion", icon: "🍥" },
];
const garlicRange = [
  { slug: "garlic-flakes", label: "Garlic Flakes", icon: "🧄" },
  { slug: "garlic-powder", label: "Garlic Powder", icon: "🥣" },
  { slug: "garlic-granules", label: "Garlic Granules", icon: "🌰" },
  { slug: "garlic-minced", label: "Chopped Garlic", icon: "🌿" },
  { slug: "garlic-chopped", label: "Minced Garlic", icon: "🍥" },
];


const RangeItem = ({ slug, label, icon }) => (
  <li>
    <Link
      href={`/products/${slug}`}
      className="flex items-center justify-between gap-2 px-2 py-2 rounded-lg hover:bg-primary-foreground/10 transition-colors group"
    >
      <span className="flex items-center gap-3">
        <span className="h-8 w-8 rounded-full border border-accent/70 flex items-center justify-center text-sm bg-primary-foreground/[0.03]">
          {icon}
        </span>
        <span className="font-medium text-sm">{label}</span>
      </span>
      <ArrowRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-0.5" />
    </Link>
  </li>
);

export default function Home() {
  return (
    <>
      {/* HERO — exact match to reference: cream left, food image right, centered range card, trust bar */}
      <section className="relative overflow-hidden bg-gradient-hero">
        {/* Decorative leaves stay fixed during scroll */}
        <div className="pointer-events-none fixed top-24 left-2 text-7xl opacity-30 animate-float-slow -z-0" aria-hidden>🌿</div>
        <div className="pointer-events-none fixed top-40 right-6 text-6xl opacity-25 animate-float -z-0" aria-hidden>🍃</div>
        <div className="pointer-events-none fixed bottom-32 left-10 text-5xl opacity-20 animate-float -z-0" aria-hidden>🌱</div>

        {/* Cream/beige background on the LEFT 50% */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 bg-background z-0" />

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

        <div className="container mx-auto px-4 pt-36 pb-32 relative z-10">
          <div className="grid xl:grid-cols-12 gap-6 items-center min-h-[600px]">
            {/* LEFT: copy (4 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="xl:col-span-6"
            >
              <div className="mb-6">
                <div className="text-xs tracking-[0.3em] font-bold text-primary uppercase">Welcome to Khadija Overseas</div>
                <div className="mt-2 flex items-center gap-2">
                  <span className="h-[2px] w-16 bg-accent" />
                  <Leaf className="h-3.5 w-3.5 text-accent" />
                </div>
              </div>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-[4.25rem] font-bold text-primary leading-[1.05] text-balance">
                <span className="">Premium Dehydrated</span> <br />
                <motion.span
                  className="text-accent italic font-script capitalize"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                >Food Products </motion.span> <br />
                <span className="">Exporter from India</span>
              </h1>
              <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-md leading-relaxed">
                Khadija Overseas is a trusted exporter of premium dehydrated food products from Gujarat, India. Supplying high-quality dehydrated onion and garlic products to food manufacturers and bulk buyers worldwide.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/products" className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-lg text-xs font-bold tracking-[0.15em] uppercase hover:bg-primary-glow shadow-soft hover:shadow-elegant transition-all">
                  Explore Products
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="/contact" className="group inline-flex items-center gap-2 border-2 border-primary text-primary px-7 py-4 rounded-lg text-xs font-bold tracking-[0.15em] uppercase hover:bg-primary hover:text-primary-foreground transition-all">
                  Get a Quote
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>

            {/* CENTER: floating range card (4 cols, centered between text and image) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-sapn-4 xl:col-span-3 flex justify-start"
            >
              <div className="bg-gradient-dark text-primary-foreground rounded-3xl p-6 shadow-2xl shadow-primary/30 border border-accent/30 w-full max-w-[320px] ring-1 ring-black/5">
                <div className="text-center mb-3">
                  <h3 className="font-script text-4xl text-accent leading-none italic">Our Range</h3>
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
      </section>

      {/* PRODUCTS — premium framed section */}
      <section className="relative py-28  overflow-hidden bg-gradient-dark">
        {/* Background Texture Only */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 opacity-[0.03] grayscale invert" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')" }} />
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

          {/* Featured Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.slice(0, 4).map((p, idx) => (
              <FadeUp key={p.slug} delay={idx * 0.1}>
                <ProductCard product={p} />
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
      </section>

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
