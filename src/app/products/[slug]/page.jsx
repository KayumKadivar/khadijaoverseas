import React from "react";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { products, industries } from "@/data/products";
import { ArrowRight, Package, Settings, Truck } from "lucide-react";
import { FadeUp } from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import { extractedPages } from "@/data/websiteProductSpecifications";
import { findProductSpec } from "@/lib/parse-specs";
import { buildSeoMetadata, productSeo } from "@/lib/seo";
import { buildProductJsonLd } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import DownloadButton from "@/components/DownloadButton";

/* ─── helpers ─── */

function getSectionValue(section, labels) {
  const labelList = Array.isArray(labels) ? labels : [labels];
  return (
    section?.find((item) =>
      labelList.some((l) => item.label.toLowerCase() === l.toLowerCase())
    )?.value ?? null
  );
}

function getProductSpecValue(product, labels) {
  const labelList = Array.isArray(labels) ? labels : [labels];
  return (
    product?.specs?.find((item) =>
      labelList.some((l) => item.label.toLowerCase() === l.toLowerCase())
    )?.value ?? null
  );
}

/* ─── metadata ─── */

export async function generateMetadata({ params }) {
  const { slug: rawSlug } = await params;
  const slug = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug;
  const product = products.find((p) => p.slug === slug);

  if (!product) return { title: "Product Not Found | Khadija Exim" };

  const seo = productSeo[slug];
  return seo
    ? buildSeoMetadata(seo)
    : { title: `${product.name} | Khadija Exim`, description: product.description };
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

/* ─── page ─── */

export default async function ProductDetailPage({ params }) {
  const { slug: rawSlug } = await params;
  const slug = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug;
  const product = products.find((p) => p.slug === slug);

  if (!product) redirect("/products");

  const pdfSpecs = findProductSpec(product.name, extractedPages);

  const origin = getSectionValue(pdfSpecs?.general, "Origin") || getProductSpecValue(product, "Origin") || "India";
  const hsnCode = getSectionValue(pdfSpecs?.general, "HSN Code") || getProductSpecValue(product, "HSN Code") || "On request";
  const quality = getSectionValue(pdfSpecs?.general, "Quality Grade") || getProductSpecValue(product, ["Quality", "Grade"]) || "Export grade";

  const related = products.filter((p) => p.slug !== slug).slice(0, 4);
  const productJsonLd = buildProductJsonLd({ product, seo: productSeo[slug], hsnCode, quality, origin, pdfSpecs });

  // Reusable inline spec renderer — no separate component needed
  function specRows(items, fallback) {
    if (!items?.length) {
      return (
        <div className="py-6 text-center text-muted-foreground italic text-sm">
          {fallback}
        </div>
      );
    }
    return (
      <div className="flex flex-col">
        {items.map((item, i, arr) => (
          <div
            key={item.label}
            className={`flex flex-col py-[0.95rem] gap-[0.35rem] sm:flex-row sm:items-baseline sm:justify-between sm:gap-6 ${i !== arr.length - 1 ? "border-b border-[hsl(42,25%,86%,0.4)]" : ""
              }`}
          >
            <span className="text-[0.72rem] font-bold uppercase tracking-[0.15em] text-[hsl(140,15%,45%)] sm:flex-[0_0_32%]">{item.label}</span>
            <span className="text-[0.95rem] font-medium text-[hsl(140,55%,14%)] leading-snug sm:flex-1">{item.value}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <JsonLd data={productJsonLd} />
      <main className="min-h-screen bg-[hsl(44,33%,98%)] pt-24 pb-16">
        <div className="container mx-auto px-4">

          {/* Product Title */}
          <FadeUp>
            <h1 className="font-['Playfair_Display',Georgia,serif] text-4xl md:text-5xl font-extrabold text-[hsl(140,55%,14%)] text-center leading-[1.2] tracking-[-0.01em] mb-8 md:mb-12 capitalize">{product.name}</h1>
          </FadeUp>

          {/* Hero Grid */}
          <div className="grid gap-8 items-stretch lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 mt-8">
            <FadeUp className="flex items-center justify-center">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-3xl bg-white border border-[hsl(140,55%,14%,0.08)] shadow-[0_15px_40px_-15px_hsl(140,40%,15%,0.12)] transition-all duration-500 ease-in-out hover:-translate-y-1 hover:shadow-[0_25px_50px_-15px_hsl(140,40%,15%,0.18)] group">
                <Image
                  src={product.image}
                  alt={product.name}
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                />
              </div>
            </FadeUp>

            <FadeUp delay={0.06} className="flex">
              <div className="w-full bg-white border border-[hsl(42,25%,86%,0.7)] rounded-[1.5rem] p-8 md:p-10 shadow-[0_12px_30px_-10px_hsl(140,40%,15%,0.05)] flex flex-col justify-between">
                <h2 className="font-['Playfair_Display',Georgia,serif] text-[1.65rem] font-bold text-[hsl(140,55%,14%)] border-b-2 border-[hsl(42,78%,52%,0.3)] pb-3 mb-6">Product Profile</h2>
                <div className="flex flex-col gap-[1.15rem] flex-1">
                  {[
                    { label: "HSN Code", value: hsnCode },
                    { label: "Quality Grade", value: quality },
                    { label: "Origin", value: origin },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between items-center border-b border-[hsl(42,25%,86%,0.5)] pb-[0.85rem] last:border-b-0 last:pb-0">
                      <span className="text-md font-bold uppercase tracking-[0.16em] text-[#202d24]">{label}</span>
                      <span className="text-base font-semibold text-[#29352d]">{value}</span>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 gap-4 mt-8 min-[480px]:grid-cols-2 min-[480px]:gap-5">
                  <Link href={`/contact?product=${slug}`} className="inline-flex items-center justify-center gap-2 px-6 py-[0.95rem] rounded-[0.85rem] text-[0.78rem] font-bold uppercase tracking-[0.12em] cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] whitespace-nowrap w-full text-center bg-[hsl(140,55%,14%)] text-white shadow-[0_8px_24px_-8px_hsl(140,55%,14%,0.3)] hover:bg-[hsl(140,45%,20%)] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-6px_hsl(140,55%,14%,0.4)]">
                    Inquiry Now
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <DownloadButton
                    slug={slug}
                    className="inline-flex items-center justify-center gap-2 px-6 py-[0.95rem] rounded-[0.85rem] text-[0.78rem] font-bold uppercase tracking-[0.12em] cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] whitespace-nowrap w-full text-center bg-transparent text-[hsl(140,55%,14%)] border-2 border-[hsl(140,55%,14%,0.2)] hover:border-[hsl(140,55%,14%)] hover:bg-[hsl(140,55%,14%,0.03)] hover:-translate-y-0.5"
                    text="Download Datasheet"
                  />
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Description */}
          {product.description && (
            <FadeUp delay={0.08}>
              <div className="mt-10 max-w-4xl mx-auto">
                <h3 className="font-['Playfair_Display',Georgia,serif] text-2xl md:text-3xl font-bold text-[hsl(140,55%,14%)] mb-4">About this Product</h3>
                <p className="text-base text-[hsl(140,15%,45%)] leading-relaxed">{product.description}</p>
              </div>
            </FadeUp>
          )}

          {/* Spec Boxes */}
          <div className="flex flex-col gap-9 mt-10 max-w-4xl mx-auto">

            <FadeUp delay={0.1}>
              <div className="bg-white rounded-[1.25rem] border border-[hsl(42,25%,86%,0.7)] shadow-[0_10px_25px_-10px_hsl(140,40%,15%,0.04)] overflow-hidden transition-shadow duration-300 ease-in-out hover:shadow-[0_15px_35px_-10px_hsl(140,40%,15%,0.08)]" id="spec-technical">
                <div className="flex items-center gap-[0.85rem] px-6 py-5 bg-[hsl(140,55%,14%)] text-white border-b border-[hsl(140,55%,14%,0.1)]">
                  <Settings className="w-[1.35rem] h-[1.35rem] text-[hsl(42,78%,52%)] shrink-0" />
                  <h3 className="font-['Playfair_Display',Georgia,serif] text-xl font-bold tracking-[0.01em]">Quality Parameters</h3>
                </div>
                <div className="px-6 py-4">
                  {specRows(
                    pdfSpecs?.technical || product.specs,
                    "Detailed quality parameters are available on request."
                  )}
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.14}>
              <div className="bg-white rounded-[1.25rem] border border-[hsl(42,25%,86%,0.7)] shadow-[0_10px_25px_-10px_hsl(140,40%,15%,0.04)] overflow-hidden transition-shadow duration-300 ease-in-out hover:shadow-[0_15px_35px_-10px_hsl(140,40%,15%,0.08)]" id="spec-packaging">
                <div className="flex items-center gap-[0.85rem] px-6 py-5 bg-[hsl(140,55%,14%)] text-white border-b border-[hsl(140,55%,14%,0.1)]">
                  <Package className="w-[1.35rem] h-[1.35rem] text-[hsl(42,78%,52%)] shrink-0" />
                  <h3 className="font-['Playfair_Display',Georgia,serif] text-xl font-bold tracking-[0.01em]">Packing Details</h3>
                </div>
                <div className="px-6 py-4">
                  {specRows(
                    pdfSpecs?.packaging,
                    "Standard bulk export packing available on request."
                  )}
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.18}>
              <div className="bg-white rounded-[1.25rem] border border-[hsl(42,25%,86%,0.7)] shadow-[0_10px_25px_-10px_hsl(140,40%,15%,0.04)] overflow-hidden transition-shadow duration-300 ease-in-out hover:shadow-[0_15px_35px_-10px_hsl(140,40%,15%,0.08)]" id="spec-container">
                <div className="flex items-center gap-[0.85rem] px-6 py-5 bg-[hsl(140,55%,14%)] text-white border-b border-[hsl(140,55%,14%,0.1)]">
                  <Truck className="w-[1.35rem] h-[1.35rem] text-[hsl(42,78%,52%)] shrink-0" />
                  <h3 className="font-['Playfair_Display',Georgia,serif] text-xl font-bold tracking-[0.01em]">Container Capacity</h3>
                </div>
                <div className="px-6 py-4">
                  {specRows(
                    pdfSpecs?.container,
                    "Custom container loading parameters available on request."
                  )}
                </div>
              </div>
            </FadeUp>

          </div>

          {/* {product.whyhead} && ( */}
          {product.whyhead && (
            <FadeUp delay={0.22}>
              <div className="mt-10 max-w-4xl mx-auto">
                <h3 className="font-['Playfair_Display',Georgia,serif] text-2xl md:text-3xl font-bold text-[hsl(140,55%,14%)] mb-4">{product.whyhead}</h3>
                <h4 className="text-lg font-semibold text-[hsl(140,55%,14%)] mb-6">{product.whysubhead}</h4>
                <div className="prose prose-sm max-w-none">
                  {product.whycon?.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-base text-[hsl(140,15%,45%)] leading-relaxed mb-4 last:mb-0">
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>
              </div>
            </FadeUp>
          )}

          {/* Industry Applications */}
          {product.applications?.length > 0 && (
            <FadeUp delay={0.26}>
              <div className="mt-10 max-w-4xl mx-auto">
                <h3 className="font-['Playfair_Display',Georgia,serif] text-2xl md:text-3xl font-bold text-[hsl(140,55%,14%)] mb-6">Industry Applications</h3>
                <p className="text-sm font-semibold text-[hsl(42,78%,52%)] mb-6 uppercase tracking-[0.12em]">Where Is This Product Used?</p>
                <div className="grid grid-cols-1 gap-3">
                  {product.applications.map((app, idx) => (
                    <div key={idx} className="flex items-start gap-2 rounded-lg hover:bg-[hsl(42,78%,52%,0.05)] transition-colors">
                      <svg className="w-5 h-5 text-[hsl(42,78%,52%)] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.293 5.293a1 1 0 011.414 0L10 6.586l.293-.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      <span className="text-base text-[hsl(140,15%,45%)] leading-relaxed">{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          )}
     

          {/* Related Products */}
          <section className="border-t border-[hsl(42,25%,86%,0.6)] pt-10 mt-10">
            <div className="flex flex-col gap-3 mb-8 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[hsl(42,78%,52%)]">Continue Browsing</p>
                <h2 className="font-['Playfair_Display',Georgia,serif] text-[1.85rem] font-bold text-[hsl(140,55%,14%)] mt-1">Related Products</h2>
              </div>
              <Link href="/products" className="inline-flex items-center gap-2 text-sm font-bold text-[hsl(140,55%,14%)] whitespace-nowrap hover:text-[hsl(140,45%,20%)] group">
                View All Products
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-2">
              {related.map((item, i) => (
                <FadeUp key={item.slug} delay={i * 0.06}>
                  <ProductCard product={item} />
                </FadeUp>
              ))}
            </div>
          </section>

        </div>
      </main>
    </>
  );
}