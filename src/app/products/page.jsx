"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import { Stagger, StaggerItem, FadeUp } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import { Leaf } from "lucide-react";

const tags = [
  { id: "all", label: "All Products" },
  { id: "white", label: "White Onion" },
  { id: "red", label: "Red Onion" },
  { id: "pink", label: "Pink Onion" },
  { id: "garlic", label: "Garlic" },
];

function ProductsContent() {
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
    <div className="container mx-auto px-4">
      <FadeUp>
        <SectionHeading 
          kicker="Our Range" 
          title="Premium Dehydrated Products" 
          subtitle="High quality products processed with care to preserve flavor and aroma." 
        />
      </FadeUp>

      {/* Tags Section - Restored to Light Style */}
      <FadeUp delay={0.1}>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {tags.map((tag) => (
            <button
              key={tag.id}
              onClick={() => setActiveTag(tag.id)}
              className={cn(
                "px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 border-2",
                activeTag === tag.id
                  ? "bg-primary text-primary-foreground border-primary shadow-soft scale-105"
                  : "bg-transparent text-primary/60 border-primary/10 hover:border-primary/30 hover:text-primary hover:bg-primary/5"
              )}
            >
              {tag.label}
            </button>
          ))}
        </div>
      </FadeUp>

      {/* Products Grid - Using Homepage spacing (gap-8) and FadeUp style */}
      <div className="mt-10">
        <Stagger key={activeTag} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((p) => (
            <StaggerItem key={p.slug}>
              <ProductCard product={p} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      {filteredProducts.length === 0 && (
        <div className="mt-20 text-center py-24 bg-secondary/20 rounded-[2rem] border-2 border-dashed border-border">
          <div className="flex justify-center mb-6">
            <Leaf className="h-12 w-12 text-primary/10" />
          </div>
          <p className="text-muted-foreground italic text-lg">No products found in this category.</p>
        </div>
      )}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <main className="bg-background min-h-screen">
      <section className="pt-24 pb-24">
        <Suspense fallback={<div className="container mx-auto px-4 py-20 text-center">Loading Products...</div>}>
          <ProductsContent />
        </Suspense>
      </section>
    </main>
  );
}
