"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { products } from "@/data/products";
import { 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  Download, 
  Info, 
  Settings, 
  Package, 
  Truck,
  ShieldCheck,
  FileText
} from "lucide-react";
import { FadeUp, Stagger, StaggerItem } from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import { extractedPages, pdfBase64 } from "@/data/websiteProductSpecifications";
import { findProductSpec } from "@/lib/parse-specs";

export default function ProductDetailPage() {
  const { slug } = useParams();
  const router = useRouter();
  
  const product = products.find((p) => p.slug === slug);
  const pdfSpecs = React.useMemo(() => {
    if (!product) return null;
    return findProductSpec(product.name, extractedPages);
  }, [product]);

  const handleDownload = () => {
    if (!pdfBase64) return;
    const linkSource = `data:application/pdf;base64,${pdfBase64}`;
    const downloadLink = document.createElement("a");
    const fileName = `${product.slug}-specifications.pdf`;
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  };
  
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
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4 opacity-50" />
            <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
            <ChevronRight className="h-4 w-4 opacity-50" />
            <span className="text-primary font-medium">{product.name}</span>
          </nav>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <FadeUp>
              <div className="relative group">
                <div className="absolute -inset-4 bg-accent/10 rounded-[2.5rem] blur-2xl group-hover:bg-accent/20 transition-all duration-700" />
                <div className="relative rounded-3xl overflow-hidden shadow-elegant bg-white p-2">
                  <img 
                    src={product.image.src || product.image} 
                    alt={product.name} 
                    className="w-full h-auto rounded-2xl transform transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-elegant hidden md:block">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-8 w-8 text-accent" />
                    <div>
                      <div className="text-xs uppercase tracking-widest opacity-70">Quality Assurance</div>
                      <div className="font-bold">100% Export Grade</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="flex items-center gap-2 text-accent mb-4">
                <span className="h-px w-8 bg-accent" />
                <span className="text-xs font-bold uppercase tracking-widest">Premium Collection</span>
              </div>
              <h1 className="font-serif text-4xl md:text-6xl text-primary font-bold leading-tight">{product.name}</h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">{product.description}</p>
              
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {product.features.map((f) => (
                  <div key={f} className="flex items-center gap-3 bg-secondary/30 p-3 rounded-xl border border-border/50">
                    <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-sm font-medium text-primary/80">{f}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/contact" className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl text-sm font-bold tracking-widest uppercase hover:bg-primary-glow shadow-elegant transition-all">
                  Get Wholesale Quote
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <button 
                  onClick={handleDownload}
                  className="inline-flex items-center gap-3 border-2 border-primary/20 text-primary px-8 py-4 rounded-xl text-sm font-bold tracking-widest uppercase hover:border-primary hover:bg-primary/5 transition-all"
                >
                  <Download className="h-4 w-4" />
                  Download Specs
                </button>
              </div>
            </FadeUp>
          </div>

          {/* DETAILED SPECIFICATIONS SECTION */}
          <div className="mt-24">
            <FadeUp>
              <div className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-5xl text-primary font-bold mb-4">Technical Specifications</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">Detailed product parameters ensuring international export standards and premium quality consistency.</p>
              </div>
            </FadeUp>

            {pdfSpecs ? (
              <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* General Information Card */}
                <StaggerItem className="h-full">
                  <div className="bg-card rounded-3xl p-8 border border-border shadow-soft h-full hover:shadow-elegant transition-all group">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="h-14 w-14 rounded-2xl bg-primary flex items-center justify-center group-hover:scale-110 transition-transform shadow-elegant">
                        <Info className="h-7 w-7 text-accent" />
                      </div>
                      <h3 className="font-serif text-xl font-bold text-primary">General Info</h3>
                    </div>
                    <div className="space-y-4">
                      {pdfSpecs.general.map((s) => (
                        <div key={s.label} className="flex justify-between items-start gap-4 border-b border-border/50 pb-3 last:border-0">
                          <span className="text-sm font-medium text-muted-foreground">{s.label}</span>
                          <span className="text-sm font-semibold text-primary text-right">{s.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </StaggerItem>

                {/* Technical Parameters Card */}
                <StaggerItem className="h-full">
                  <div className="bg-gradient-dark rounded-3xl p-8 border border-white/10 shadow-elegant h-full text-white group">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="h-14 w-14 rounded-2xl bg-accent flex items-center justify-center group-hover:scale-110 transition-transform shadow-gold">
                        <Settings className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="font-serif text-xl font-bold">Standard Analysis</h3>
                    </div>
                    <div className="space-y-4">
                      {pdfSpecs.technical.map((s) => (
                        <div key={s.label} className="flex justify-between items-start gap-4 border-b border-white/10 pb-3 last:border-0">
                          <span className="text-sm font-medium text-white/60">{s.label}</span>
                          <span className="text-sm font-semibold text-accent text-right">{s.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </StaggerItem>

                {/* Packaging & Containers Card */}
                <StaggerItem className="h-full lg:col-span-1">
                  <div className="space-y-8 h-full">
                    <div className="bg-secondary/40 rounded-3xl p-8 border border-border shadow-soft h-full hover:shadow-elegant transition-all">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="h-14 w-14 rounded-2xl bg-white flex items-center justify-center shadow-elegant border border-border">
                          <Package className="h-7 w-7 text-primary" />
                        </div>
                        <h3 className="font-serif text-xl font-bold text-primary">Packaging</h3>
                      </div>
                      <div className="space-y-4">
                        {pdfSpecs.packaging.map((s) => (
                          <div key={s.label} className="flex flex-col gap-1 border-b border-border/50 pb-3 last:border-0">
                            <span className="text-xs font-bold text-accent uppercase tracking-widest">{s.label}</span>
                            <span className="text-sm font-medium text-primary/80">{s.value}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-8 pt-8 border-t border-border">
                        <div className="flex items-center gap-4 mb-6">
                          <Truck className="h-6 w-6 text-primary" />
                          <h4 className="font-serif text-lg font-bold text-primary">Container Capacity</h4>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          {pdfSpecs.container.map((s) => (
                            <div key={s.label} className="bg-white p-4 rounded-2xl border border-border">
                              <div className="text-[10px] font-bold text-muted-foreground uppercase mb-1">{s.label}</div>
                              <div className="text-sm font-bold text-primary">{s.value}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              </Stagger>
            ) : (
              /* Fallback if no PDF data found for this specific slug/name */
              <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-soft max-w-2xl mx-auto">
                <div className="bg-secondary px-8 py-5 font-serif text-primary text-xl font-semibold border-b border-border flex items-center gap-3">
                  <FileText className="h-6 w-6 text-accent" />
                  Product Specifications
                </div>
                <table className="w-full text-base">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-8 py-4 font-medium text-muted-foreground w-1/2">Product Name</td>
                      <td className="px-8 py-4 text-primary font-semibold">{product.name}</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-8 py-4 font-medium text-muted-foreground">Origin</td>
                      <td className="px-8 py-4 text-primary font-semibold">India</td>
                    </tr>
                    {product.specs.map((s) => (
                      <tr key={s.label} className="border-b border-border last:border-0">
                        <td className="px-8 py-4 font-medium text-muted-foreground">{s.label}</td>
                        <td className="px-8 py-4 text-primary font-semibold">{s.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent pointer-events-none" />
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-primary font-bold">Related Products</h2>
              <p className="text-muted-foreground mt-2">Explore more from our dehydrated collection.</p>
            </div>
            <Link href="/products" className="text-primary font-bold flex items-center gap-2 group">
              View All Products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {related.map((p, idx) => (
              <FadeUp key={p.slug} delay={idx * 0.1}>
                <ProductCard product={p} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

