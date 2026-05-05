"use client";

import { CheckCircle2, Award, Globe, Users, Factory, Leaf } from "lucide-react";
import ingredientsFlatlay from "@/assets/ingredients-flatlay.webp";
import premiumIngredientsImg from "@/assets/premium-ingredients.png";
import cooking1 from "@/assets/cooking-1.webp";
import cooking2 from "@/assets/cooking-2.webp";
import SectionHeading from "@/components/SectionHeading";
import { FadeUp, Stagger, StaggerItem } from "@/components/Reveal";

export default function AboutPage() {
  return (
    <>

      {/* Story */}
      <section className="py-16 relative overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 py-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">

            {/*Left: Image & Badge */}
            <FadeUp delay={0.2} className="relative lg:col-span-5">
              {/* Decorative Frame */}
              <div className="absolute inset-0 -translate-x-4 translate-y-4 border-2 border-accent/30 rounded-2xl -z-10" />

              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={premiumIngredientsImg.src || premiumIngredientsImg}
                  alt="Premium dehydrated onion and garlic ingredients in elegant wooden bowls"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </FadeUp>

            {/* Right: Text Content */}
            <FadeUp className="lg:col-span-7">
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary font-bold leading-tight mb-8">
                A Legacy of <span className="italic text-accent/90">Premium</span> Export
              </h2>

              <div className="space-y-5 text-muted-foreground leading-relaxed text-[15px] sm:text-base">
                <p className="text-lg text-primary/80 font-medium leading-relaxed">
                  <strong className="text-primary font-bold">Khadija Exim</strong> is a leading dehydrated food products exporter and supplier based in Wankaner, Gujarat, India. We specialize in exporting premium quality dehydrated onion and garlic products — including onion flakes, onion powder, onion granules, garlic flakes, garlic powder and garlic granules — to food manufacturers, importers, distributors and bulk buyers worldwide.
                </p>
                <p>
                  Gujarat is India's leading agri-export hub, home to some of the country's most reliable dehydrated vegetable suppliers and exporters. Operating from this strategic location, we have built strong sourcing networks with certified manufacturing facilities and reliable logistics support through major ports including Mundra — one of India's largest ports for agri commodity exports.
                </p>
                <p>
                  Every product we supply goes through strict quality checks at every stage — from raw material sourcing and processing to final packaging and shipment — ensuring consistent quality, hygiene and food safety standards that meet international buyer requirements.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 py-4">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Globe className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-sm">Global Reach</h4>
                      <p className="text-xs mt-1">Serving clients worldwide efficiently.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <Award className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-sm">Certified Quality</h4>
                      <p className="text-xs mt-1">Maintaining international food standards.</p>
                    </div>
                  </div>
                </div>

                <p>
                  We supply bulk quantities of dehydrated onion powder, garlic powder, onion flakes and garlic flakes to food processors, seasoning manufacturers, instant food producers, snack manufacturers and importers worldwide.
                </p>
                <p className="font-medium text-primary/80">
                  Our goal is simple: to be a reliable, long-term dehydrated food products export partner for importers and food manufacturers across the globe.
                </p>
              </div>
            </FadeUp>


          </div>
        </div>
      </section>
    </>
  );
}
