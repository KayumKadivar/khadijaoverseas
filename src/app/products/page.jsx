import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import { Stagger, StaggerItem, FadeUp } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import { buildSeoMetadata, pageSeo, productCategorySeo } from "@/lib/seo";
import { Leaf } from "lucide-react";
import Link from "next/link";

const tags = [
  { id: "all", label: "All Products" },
  { id: "white", label: "White Onion" },
  { id: "red", label: "Red Onion" },
  { id: "pink", label: "Pink Onion" },
  { id: "garlic", label: "Garlic" },
];

export async function generateMetadata({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const category = Array.isArray(resolvedSearchParams?.category)
    ? resolvedSearchParams.category[0]
    : resolvedSearchParams?.category;
  const seo = productCategorySeo[category] || pageSeo.products;

  return buildSeoMetadata(seo);
}

export default async function ProductsPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const activeTag = resolvedSearchParams?.category || "all";

  const filteredProducts = products.filter((p) => {
    if (activeTag === "all") return true;
    if (activeTag === "white") return p.name.toLowerCase().includes("white onion");
    if (activeTag === "red") return p.name.toLowerCase().includes("red onion");
    if (activeTag === "pink") return p.name.toLowerCase().includes("pink onion");
    if (activeTag === "garlic") return p.name.toLowerCase().includes("garlic");
    return true;
  });

  return (
    <main className="bg-background min-h-screen">
      <section className="pt-24 pb-10">
        <div className="container mx-auto px-4">
          <FadeUp>
            <SectionHeading 
              title="Premium Dehydrated Products" 
              subtitle="High quality products processed with care to preserve flavor and aroma." 
            />
          </FadeUp>

          {/* Tags Section - Restored to Light Style */}
          <FadeUp delay={0.1}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {tags.map((tag) => (
                <Link
                  key={tag.id}
                  href={tag.id === "all" ? "/products" : `/products?category=${tag.id}`}
                  className={cn(
                    "px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 border-2 inline-block",
                    activeTag === tag.id
                      ? "bg-primary text-primary-foreground border-primary shadow-soft scale-105"
                      : "bg-transparent text-primary/60 border-primary/10 hover:border-primary/30 hover:text-primary hover:bg-primary/5"
                  )}
                >
                  {tag.label}
                </Link>
              ))}
            </div>
          </FadeUp>

          {/* Products Grid - Using Homepage spacing (gap-8) and FadeUp style */}
          <div className="mt-10">
            <Stagger key={activeTag} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
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
      </section>
    </main>
  );
}
