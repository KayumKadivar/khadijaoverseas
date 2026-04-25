"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { products } from "@/data/products";
import { CheckCircle2, ArrowRight, ChevronRight, Download } from "lucide-react";
import { FadeUp } from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";

export default function ProductDetailPage() {
  const { slug } = useParams();
  const router = useRouter();
  
  const product = products.find((p) => p.slug === slug);
  
  React.useEffect(() => {
    if (slug && !product) {
      router.replace("/products");
    }
  }, [slug, product, router]);

  if (!product) return null;

  const related = products.filter((p) => p.slug !== slug).slice(0, 4);

  return (
    <>
      <section className="bg-gradient-hero py-10">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/products" className="hover:text-primary">Products</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-primary font-medium">{product.name}</span>
          </nav>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <FadeUp>
              <div className="rounded-2xl overflow-hidden shadow-elegant bg-secondary/40">
                <img src={product.image.src || product.image} alt={product.name} className="w-full h-auto" />
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <h1 className="font-serif text-3xl md:text-5xl text-primary font-bold leading-tight">{product.name}</h1>
              <p className="mt-5 text-muted-foreground leading-relaxed">{product.description}</p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                {product.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-accent" /> {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-lg text-sm font-semibold tracking-wider uppercase hover:bg-primary-glow shadow-soft transition-all">
                  Request a Quote
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <button className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3.5 rounded-lg text-sm font-semibold tracking-wider uppercase hover:bg-primary hover:text-primary-foreground transition-all">
                  <Download className="h-4 w-4" />
                  Download Spec
                </button>
              </div>

              <div className="mt-10 bg-card rounded-2xl border border-border overflow-hidden shadow-soft">
                <div className="bg-secondary px-5 py-3 font-serif text-primary font-semibold">Product Specifications</div>
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-5 py-3 font-medium text-muted-foreground w-1/2">Product Name</td>
                      <td className="px-5 py-3">{product.name}</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-5 py-3 font-medium text-muted-foreground">Origin</td>
                      <td className="px-5 py-3">India</td>
                    </tr>
                    {product.specs.map((s) => (
                      <tr key={s.label} className="border-b border-border last:border-0">
                        <td className="px-5 py-3 font-medium text-muted-foreground">{s.label}</td>
                        <td className="px-5 py-3">{s.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/40">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl text-primary font-bold text-center mb-10">Related Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {related.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
        </div>
      </section>
    </>
  );
}
