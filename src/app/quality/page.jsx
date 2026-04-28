"use client";

import { CheckCircle2, ShieldCheck, FlaskConical, Microscope, Award } from "lucide-react";
import workersImg from "@/assets/workers.webp";
import { certifications } from "@/data/products";
import SectionHeading from "@/components/SectionHeading";
import { FadeUp, Stagger, StaggerItem } from "@/components/Reveal";

export default function QualityPage() {
  return (
    <>
      <section className="pt-22 pb-16 text-center">
        <div className="container mx-auto px-4">
          <FadeUp>
            <h1 className="mt-6 font-serif text-4xl md:text-6xl text-primary font-bold">Quality You Can Trust</h1>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
              Every batch is processed and tested under strict international quality standards.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="  ">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <FadeUp>
            <div className="rounded-2xl overflow-hidden shadow-elegant">
              <img src={workersImg.src || workersImg} alt="Quality control" className="w-full h-auto" loading="lazy" />
            </div>
          </FadeUp>
          <FadeUp delay={0.15}>
            <h2 className="font-serif text-3xl md:text-4xl text-primary font-bold">Our Quality Process</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We follow a rigorous multi-stage quality process — from raw material selection to final packaging — ensuring every shipment meets the highest international standards.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Hand-picked premium raw materials from trusted farms",
                "Advanced dehydration technology for nutrient retention",
                "Multi-stage quality checks at every processing step",
                "Hygienic packaging with international export standards",
                "Lab-tested for moisture, microbial and pesticide content",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" /> <span className="text-foreground/80">{p}</span>
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </section>

      <section className="py-20 bg-secondary/40">
        <div className="container mx-auto px-4">
          <SectionHeading kicker="Process" title="Our 4-Step Quality Process" />
          <Stagger className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { i: ShieldCheck, t: "Sourcing", d: "Premium raw onions and garlic from trusted farms." },
              { i: FlaskConical, t: "Processing", d: "Advanced dehydration with hygiene control." },
              { i: Microscope, t: "Testing", d: "Lab tests for moisture, color and microbial safety." },
              { i: Award, t: "Packaging", d: "Export-grade packaging for global shipping." },
            ].map((s, idx) => (
              <StaggerItem key={s.t}>
                <div className="relative bg-card rounded-2xl p-7 shadow-soft hover:shadow-elegant transition-all h-full border border-border/50">
                  <div className="absolute -top-4 -right-4 h-12 w-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-serif font-bold shadow-gold">
                    {idx + 1}
                  </div>
                  <div className="h-14 w-14 rounded-xl bg-gradient-dark flex items-center justify-center mb-4">
                    <s.i className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="font-serif text-lg text-primary font-semibold">{s.t}</h4>
                  <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading kicker="Compliance" title="Certifications" />
          <div className="mt-10 flex flex-wrap justify-center items-center gap-10">
            {certifications.map((c) => (
              <div key={c} className="text-center group cursor-default">
                <div className="h-24 w-24 mx-auto rounded-full border-2 border-primary/20 flex items-center justify-center font-serif font-bold text-primary text-sm group-hover:border-accent group-hover:text-accent transition-colors shadow-soft">
                  {c.split(" ")[0]}
                </div>
                <div className="mt-2 text-[10px] tracking-widest text-muted-foreground uppercase">Certified</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
