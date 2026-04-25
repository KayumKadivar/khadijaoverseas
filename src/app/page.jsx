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
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero pt-30 pb-18 lg:pt-34 lg:pb-22">
        <div className="pointer-events-none absolute -left-10 top-24 h-24 w-24 rounded-full bg-primary/8 blur-2xl" aria-hidden />
        <div className="pointer-events-none absolute right-8 top-16 h-20 w-20 rounded-full bg-primary/10 blur-xl" aria-hidden />
        <div className="pointer-events-none absolute -right-6 bottom-20 h-24 w-24 rounded-full bg-primary/8 blur-2xl" aria-hidden />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[1.02fr_1.18fr] gap-8 lg:gap-0 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-14 bg-primary/20" />
                <span className="text-xs tracking-[0.22em] font-semibold text-primary uppercase">Welcome to Khadija Overseas</span>
              </div>
              <h1 className="font-serif text-5xl md:text-6xl xl:text-7xl font-bold text-primary leading-[0.98] text-balance">
                Dehydrated Food <br />
                Products Supplier
              </h1>
              <p className="mt-5 text-base md:text-[1.12rem] text-foreground/80 max-w-xl leading-relaxed">
                Khadija Overseas is a leading dehydrated food products supplier and exporter from India. We deliver premium quality products that meet international standards.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/products" className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-xl text-sm font-semibold tracking-wide uppercase hover:bg-primary-glow shadow-soft transition-all">
                  Explore Products
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="/contact" className="group inline-flex items-center gap-2 border border-primary/30 bg-white/70 text-primary px-7 py-3.5 rounded-xl text-sm font-semibold tracking-wide uppercase hover:bg-white transition-all">
                  Get a Quote
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative min-h-[360px] sm:min-h-[430px] lg:min-h-[560px] flex items-center justify-center"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={herosection.src || herosection}
                  alt="Premium Dehydrated Products"
                  className="w-full h-full object-cover rounded-[1.75rem] lg:rounded-none lg:rounded-l-[4rem] drop-shadow-[0_24px_60px_rgba(14,36,23,0.24)]"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-[linear-gradient(160deg,_hsl(140_65%_10%)_0%,_hsl(140_58%_14%)_55%,_hsl(140_52%_18%)_100%)] backdrop-blur-md text-primary-foreground rounded-[1.7rem] p-5 md:p-6 shadow-[0_26px_60px_rgba(6,20,14,0.5)] border border-accent/45 w-[290px] md:w-[310px] lg:w-[320px] absolute left-1/2 -translate-x-1/2 lg:left-0 lg:-translate-x-18 z-20"
              >
                <div className="mb-4">
                  <h3 className="font-script text-[2.1rem] text-accent leading-none">Our Range</h3>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="h-px w-14 bg-accent/35" />
                    <Leaf className="h-3.5 w-3.5 text-accent/95" />
                  </div>
                </div>

                <ul className="grid grid-cols-1 gap-1">
                  {heroRangeItems.map((item, idx) => (
                    <li key={item.slug} className={idx === 4 ? "mt-1 pt-2 border-t border-accent/25" : ""}>
                      <Link
                        href={`/products/${item.slug}`}
                        className="flex items-center justify-between gap-3 px-2 py-1.5 rounded-lg hover:bg-white/10 transition-all group"
                      >
                        <span className="flex items-center gap-3">
                          <span className="h-8 w-8 rounded-full bg-primary/20 border border-accent/35 flex items-center justify-center text-base text-accent group-hover:scale-110 transition-transform">
                            {rangeIcons[item.slug] ?? "🌿"}
                          </span>
                          <span className="font-medium tracking-wide text-[0.96rem] group-hover:text-accent transition-colors">
                            {item.label}
                          </span>
                        </span>
                        <ArrowRight className="h-4 w-4 text-accent/80 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>

          <div className="mt-8 lg:mt-9 bg-white/95 rounded-2xl border border-border shadow-soft px-4 sm:px-6 py-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: Leaf, title: "100% Natural", sub: "No Preservatives" },
                { icon: Award, title: "Premium Quality", sub: "Assured" },
                { icon: Globe, title: "Global Export", sub: "Worldwide Shipping" },
                { icon: Truck, title: "On-time Delivery", sub: "Every Time" },
              ].map((point) => (
                <div key={point.title} className="flex items-center gap-3 sm:justify-center lg:justify-start">
                  <div className="h-10 w-10 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center shrink-0">
                    <point.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary leading-none">{point.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{point.sub}</p>
                  </div>
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
