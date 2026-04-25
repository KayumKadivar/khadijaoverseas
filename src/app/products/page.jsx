"use client";

import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import { Stagger, StaggerItem, FadeUp } from "@/components/Reveal";
import heroImg from "@/assets/hero-products.webp";
import { Leaf, Award, Shield, Globe } from "lucide-react";

export default function ProductsPage() {
  return (
    <>
      <section className="relative bg-gradient-hero py-16 md:py-20 overflow-hidden">
        <div className="absolute top-10 left-10 text-6xl opacity-20 animate-float">🌿</div>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <FadeUp>
              <span className="text-xs font-semibold tracking-[0.3em] text-accent uppercase">Our Products</span>
              <h1 className="mt-3 font-serif text-4xl md:text-6xl text-primary font-bold leading-tight">
                Premium Quality<br /><span className="text-primary">Dehydrated Food Products</span>
              </h1>
              <p className="mt-5 text-muted-foreground text-base md:text-lg max-w-lg">
                We offer a wide range of dehydrated products processed with advanced technology and strict quality control to retain natural taste, color and nutrients.
              </p>
              <div className="mt-6 flex flex-wrap gap-5">
                {[
                  { i: Leaf, t: "100% Natural" },
                  { i: Award, t: "Premium Quality" },
                  { i: Shield, t: "Hygienic" },
                  { i: Globe, t: "Global Export" },
                ].map((b) => (
                  <div key={b.t} className="flex items-center gap-2 text-sm text-primary">
                    <b.i className="h-5 w-5 text-accent" /> {b.t}
                  </div>
                ))}
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="rounded-2xl overflow-hidden shadow-elegant">
                <img src={heroImg.src || heroImg} alt="Dehydrated products range" className="w-full h-auto" />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading kicker="Range" title="Our Product Range" subtitle="High quality dehydrated products for every need" />
          <Stagger className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {products.map((p) => (
              <StaggerItem key={p.slug}>
                <ProductCard product={p} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
