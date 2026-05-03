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
          <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-center">

            {/* Left: Text Content */}
            <FadeUp>

              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary font-bold leading-tight mb-8">
                A Legacy of <span className="italic text-accent/90">Premium</span> Export
              </h2>

              <div className="space-y-5 text-muted-foreground leading-relaxed text-[15px] sm:text-base">
                <p className="text-lg text-primary/80 font-medium leading-relaxed">
                  We, <strong className="text-primary font-bold">THE KHADIJAH GLOBAL</strong>, are a trusted exporter and supplier of high-quality dehydrated food products, serving food processing, seasoning, snack, and HoReCa industries in India and worldwide.
                </p>
                <p>
                  With a strong sourcing network and good industry experience, we focus on providing consistent quality and value to our customers. Our product range includes Dehydrated White Onion, Red Onion, and Pink Onion, along with Dehydrated Garlic, available in forms such as flakes, chopped, minced, granules, and powder.
                </p>
                <p>
                  All products are processed in certified manufacturing facilities, maintaining proper hygiene, food safety, and quality standards. We work closely with experienced manufacturers and follow strict quality checks at every stage, from raw material sourcing to final delivery, to meet international standards and customer requirements.
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
                  With strong coordination and reliable logistics support, we ensure smooth export operations. Based in Wankaner, Gujarat, India, we have good connectivity to major ports like Mundra. We have the ability to deliver goods on time and as per customer requirements, making us a reliable partner for long-term business.
                </p>
              </div>
            </FadeUp>

            {/* Right: Image & Badge */}
            <FadeUp delay={0.2} className="relative">
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
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-secondary/40">
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
                  <p className="mt-2 text-md text-muted-foreground leading-relaxed">{v.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* In the Kitchen */}
      <section className="py-16">
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


    </>
  );
}
