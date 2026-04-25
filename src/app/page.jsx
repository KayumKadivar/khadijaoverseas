"use client";

import Link from "next/link";
import { ArrowRight, Leaf, Award, Globe, Truck, CheckCircle2, Phone } from "lucide-react";
import { motion } from "framer-motion";
import heroBowls from "@/assets/hero-bowls.webp";
import heroFlakesBowl from "@/assets/hero-flakes-bowl.webp";
import ingredientsFlatlay from "@/assets/ingredients-flatlay.webp";
import cooking2 from "@/assets/cooking-2.webp";
import ctaBg from "@/assets/cta-bg.webp";
import { products, industries, certifications } from "@/data/products";
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

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div
          className="pointer-events-none fixed inset-0 -z-0"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(circle at 2% 8%, hsl(var(--primary) / 0.08) 0 2px, transparent 3px), radial-gradient(circle at 98% 92%, hsl(var(--primary) / 0.06) 0 2px, transparent 3px)",
          }}
        />
        <div className="pointer-events-none fixed top-24 left-2 text-7xl opacity-30 animate-float-slow -z-0" aria-hidden>🌿</div>
        <div className="pointer-events-none fixed top-40 right-6 text-6xl opacity-25 animate-float -z-0" aria-hidden>🍃</div>
        <div className="pointer-events-none fixed bottom-20 left-10 text-5xl opacity-20 animate-float -z-0" aria-hidden>🌱</div>

        <div className="container mx-auto px-4 pt-10 pb-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-10 bg-accent" />
                <span className="text-xs tracking-[0.3em] font-semibold text-accent uppercase">Welcome to Khadija Overseas</span>
              </div>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-[1.05] text-balance">
                Dehydrated Food <br />
                Products Supplier
              </h1>
              <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed">
                Khadija Overseas is a leading dehydrated food products supplier and exporter from India. We deliver premium quality products that meet international standards.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/products" className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-lg text-sm font-semibold tracking-wider uppercase hover:bg-primary-glow shadow-soft hover:shadow-elegant transition-all">
                  Explore Products
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="/contact" className="group inline-flex items-center gap-2 border-2 border-primary text-primary px-7 py-4 rounded-lg text-sm font-semibold tracking-wider uppercase hover:bg-primary hover:text-primary-foreground transition-all">
                  Get a Quote
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative min-h-[520px] lg:min-h-[600px] lg:left-[27%]"
            >
              <img
                src={heroBowls.src || heroBowls}
                alt="Premium dehydrated onion and garlic ingredients"
                className="absolute right-[26%] top-[145px] w-full h-auto object-contain z-0"
              />

              <motion.img
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.5 }}
                src={heroFlakesBowl.src || heroFlakesBowl}
                alt="Bowl of dehydrated onion flakes"
                className="absolute right-[28%] bottom-[122px] w-[48%] h-auto object-contain drop-shadow-2xl z-20"
              />

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute left-0 lg:-left-4 top-6 bg-gradient-dark text-primary-foreground rounded-2xl p-5 shadow-elegant border border-accent/30 w-[260px] z-18"
              >
                <div className="text-center mb-3">
                  <h3 className="font-script text-3xl text-accent">Our Range</h3>
                  <div className="flex items-center justify-center gap-2 mt-1">
                    <span className="h-px w-10 bg-accent/50" />
                    <Leaf className="h-3.5 w-3.5 text-accent" />
                    <span className="h-px w-10 bg-accent/50" />
                  </div>
                </div>
                <ul className="space-y-1.5 text-sm">
                  {products.slice(0, 4).map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/products/${p.slug}`}
                        className="flex items-center justify-between gap-2 px-2 py-1.5 rounded hover:bg-primary-foreground/10 transition-colors"
                      >
                        <span className="flex items-center gap-2.5">
                          <span className="h-7 w-7 rounded-full border border-accent/60 flex items-center justify-center text-sm">
                            {rangeIcons[p.slug] ?? "🌿"}
                          </span>
                          <span className="font-medium">{p.name.replace("Dehydrated ", "")}</span>
                        </span>
                        <ArrowRight className="h-3.5 w-3.5 text-accent" />
                      </Link>
                    </li>
                  ))}
                  <li><div className="my-2 h-px bg-accent/20" /></li>
                  {products.slice(4, 8).map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/products/${p.slug}`}
                        className="flex items-center justify-between gap-2 px-2 py-1.5 rounded hover:bg-primary-foreground/10 transition-colors"
                      >
                        <span className="flex items-center gap-2.5">
                          <span className="h-7 w-7 rounded-full border border-accent/60 flex items-center justify-center text-sm">
                            {rangeIcons[p.slug] ?? "🧄"}
                          </span>
                          <span className="font-medium">{p.name.replace("Dehydrated ", "")}</span>
                        </span>
                        <ArrowRight className="h-3.5 w-3.5 text-accent" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>

        </div>
        <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-dark wave-bottom z-10" />
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
