"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import { Stagger, StaggerItem, FadeUp } from "@/components/Reveal";
import { cn } from "@/lib/utils";

const tags = [
  { id: "all", label: "All Products" },
  { id: "white", label: "White Onion" },
  { id: "red", label: "Red Onion" },
  { id: "pink", label: "Pink Onion" },
  { id: "garlic", label: "Garlic" },
];

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const [activeTag, setActiveTag] = useState("all");

  useEffect(() => {
    const category = searchParams.get("category");
    const validTagIds = tags.map((tag) => tag.id);
    if (category && validTagIds.includes(category)) {
      setActiveTag(category);
    } else {
      setActiveTag("all");
    }
  }, [searchParams]);

  const filteredProducts = products.filter((p) => {
    if (activeTag === "all") return true;
    if (activeTag === "white") return p.name.toLowerCase().includes("white onion");
    if (activeTag === "red") return p.name.toLowerCase().includes("red onion");
    if (activeTag === "pink") return p.name.toLowerCase().includes("pink onion");
    if (activeTag === "garlic") return p.name.toLowerCase().includes("garlic");
    return true;
  });

  return (
    <>
      <section className="py-24">
        <div className="container mx-auto px-4">
          <FadeUp>
            <SectionHeading kicker="Range" title="Our Product Range" subtitle="High quality dehydrated products for every need" />
          </FadeUp>

          {/* Tags Section */}
          <FadeUp delay={0.1}>
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {tags.map((tag) => (
                <button
                  key={tag.id}
                  onClick={() => setActiveTag(tag.id)}
                  className={cn(
                    "px-6 py-2.5 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-300 border-2",
                    activeTag === tag.id
                      ? "bg-primary text-primary-foreground border-primary shadow-elegant scale-105"
                      : "bg-transparent text-primary/60 border-primary/10 hover:border-primary/30 hover:text-primary hover:bg-primary/5"
                  )}
                >
                  {tag.label}
                </button>
              ))}
            </div>
          </FadeUp>

          {/* Products Grid */}
          <Stagger key={activeTag} className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {filteredProducts.map((p) => (
              <StaggerItem key={p.slug}>
                <ProductCard product={p} />
              </StaggerItem>
            ))}
          </Stagger>

          {filteredProducts.length === 0 && (
            <div className="mt-20 text-center py-20 bg-secondary/20 rounded-3xl border-2 border-dashed border-border">
              <p className="text-muted-foreground italic">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
