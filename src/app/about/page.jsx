"use client";

import { CheckCircle2, Award, Globe, Users, Factory, Leaf } from "lucide-react";
import ingredientsFlatlay from "@/assets/ingredients-flatlay.webp";
import ourStoryImg from "@/assets/our-story.webp";
import cooking1 from "@/assets/cooking-1.webp";
import cooking2 from "@/assets/cooking-2.webp";
import SectionHeading from "@/components/SectionHeading";
import { FadeUp, Stagger, StaggerItem } from "@/components/Reveal";

const stats = [
  { v: "10+", l: "Years of Experience", icon: Factory },
  { v: "25+", l: "Countries Exported", icon: Globe },
  { v: "50+", l: "Products", icon: Leaf },
  { v: "100%", l: "Customer Satisfaction", icon: Users },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <FadeUp>
            <span className="text-xs font-semibold tracking-[0.3em] text-accent uppercase">About Us</span>
            <h1 className="mt-3 font-serif text-4xl md:text-6xl text-primary font-bold">Who We Are</h1>
            <p className="mt-4 text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              A trusted name in the dehydrated food industry with over a decade of experience delivering premium quality products from India to the world.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <h2 className="font-serif text-3xl md:text-5xl text-primary font-bold leading-tight">Our Story</h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Khadija Overseas is a trusted name in the dehydrated food industry. With over a decade of experience, we are a leading manufacturer, supplier and exporter of premium quality dehydrated products from India.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "State-of-the-art processing unit",
                  "Strict quality control at every step",
                  "Hygienic packaging & handling",
                  "Customer satisfaction is our priority",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{p}</span>
                  </li>
                ))}
              </ul>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-elegant border border-border/50">
                  <img src={ourStoryImg.src || ourStoryImg} alt="Premium dehydrated onion and garlic ingredients" className="w-full h-auto object-cover" loading="lazy" />
                </div>
                <div className="hidden md:block absolute -bottom-10 -right-6 w-2/3 rounded-2xl overflow-hidden shadow-elegant border-4 border-background">
                  <img src={cooking2.src || cooking2} alt="Chef seasoning gourmet dish with dehydrated flakes" className="w-full h-auto" loading="lazy" />
                </div>
                <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-accent/20 animate-float" />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary/40 mt-20">
        <div className="container mx-auto px-4">
          <SectionHeading kicker="Our Values" title="What Drives Us" />
          <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "Our Commitment", d: "Delivering safe, natural and high-quality dehydrated food products.", icon: Award },
              { t: "Our Quality", d: "Quality is at the heart of everything. We follow international standards.", icon: CheckCircle2 },
              { t: "Our Reach", d: "Our products are exported to various countries with trusted partners.", icon: Globe },
              { t: "Our Team", d: "Experienced team works passionately to meet client expectations every day.", icon: Users },
            ].map((v) => (
              <StaggerItem key={v.t}>
                <div className="bg-card rounded-2xl p-7 shadow-soft hover:shadow-elegant transition-all h-full border border-border/50">
                  <div className="h-14 w-14 rounded-xl bg-gradient-dark flex items-center justify-center mb-5">
                    <v.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-serif text-lg text-primary font-semibold">{v.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* In the Kitchen */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading kicker="In The Kitchen" title="From Our Kitchens to Yours" subtitle="See how our dehydrated ingredients elevate everyday cooking and gourmet dishes." />
          <Stagger className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { img: cooking1, t: "Chef-Grade Cooking" },
              { img: ingredientsFlatlay, t: "Versatile Ingredients" },
              { img: cooking2, t: "Gourmet Seasoning" },
            ].map((c) => (
              <StaggerItem key={c.t}>
                <div className="group relative rounded-2xl overflow-hidden shadow-elegant">
                  <img src={c.img.src || c.img} alt={c.t} className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-5">
                    <h3 className="font-serif text-xl text-primary-foreground font-semibold">{c.t}</h3>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-dark text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -left-20 top-10 text-9xl">🌿</div>
          <div className="absolute -right-20 bottom-10 text-9xl">🍃</div>
        </div>
        <div className="container mx-auto px-4 relative">
          <Stagger className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <StaggerItem key={s.l}>
                <div className="text-center">
                  <div className="h-16 w-16 mx-auto rounded-full border-2 border-accent/40 flex items-center justify-center mb-4">
                    <s.icon className="h-7 w-7 text-accent" />
                  </div>
                  <div className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground">{s.v}</div>
                  <div className="mt-2 text-accent text-sm font-semibold tracking-wider">{s.l}</div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
