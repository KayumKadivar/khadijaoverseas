"use client";

import { industries } from "@/data/products";
import { Stagger, StaggerItem, FadeUp } from "@/components/Reveal";

export default function IndustriesPage() {
  return (
    <>
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <FadeUp>
            <h1 className="mt-3 font-serif text-4xl md:text-6xl text-primary font-bold">Industries We Serve</h1>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
              From food processing to HoReCa, our dehydrated products power kitchens and factories across the globe.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((i) => (
              <StaggerItem key={i.name}>
                <div className="group relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-elegant border border-border/50 transition-all hover:-translate-y-1 overflow-hidden">
                  <div className="absolute -right-4 -top-4 text-7xl opacity-10 group-hover:opacity-30 transition-opacity">{i.icon}</div>
                  <div className="h-14 w-14 rounded-xl bg-gradient-dark flex items-center justify-center text-3xl mb-5">{i.icon}</div>
                  <h3 className="font-serif text-xl text-primary font-semibold">{i.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{i.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
