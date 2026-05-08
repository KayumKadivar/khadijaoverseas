import "./page.css";
import React from "react";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import {
  ArrowRight,
  Package,
  Settings,
  Truck,
} from "lucide-react";
import { FadeUp } from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import { extractedPages } from "@/data/websiteProductSpecifications";
import { findProductSpec } from "@/lib/parse-specs";
import { buildSeoMetadata, productSeo } from "@/lib/seo";
import { buildProductJsonLd } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import DownloadButton from "@/components/DownloadButton";

/* ──────────────────────────── helpers ──────────────────────────── */

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

function SpecTableRows({ items, fallback }) {
  if (!items?.length) {
    return (
      <div className="py-6 text-center text-muted-foreground italic text-sm">
        {fallback || "Specification details are available on request."}
      </div>
    );
  }
  return (
    <div className="spec-table-rows">
      {items.map((item, i) => (
        <div
          key={`${item.label}-${item.value}`}
          className={`spec-table-row ${i !== items.length - 1 ? "spec-table-row--bordered" : ""}`}
        >
          <span className="spec-table-row__label">{item.label}</span>
          <span className="spec-table-row__value">{item.value}</span>
        </div>
      ))}
    </div>
  );
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const resolvedSlug = Array.isArray(slug) ? slug[0] : slug;
  const product = products.find((item) => item.slug === resolvedSlug);

  if (!product) {
    return {
      title: "Product Not Found | Khadija Exim",
    };
  }

  const seo = productSeo[resolvedSlug];

  if (seo) {
    return buildSeoMetadata(seo);
  }

  return {
    title: `${product.name} | Khadija Exim`,
    description: product.description,
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetailPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  const resolvedSlug = Array.isArray(slug) ? slug[0] : slug;
  const product = products.find((item) => item.slug === resolvedSlug);

  if (!product) {
    redirect("/products");
  }

  const pdfSpecs = findProductSpec(product.name, extractedPages);

  const origin = getSectionValue(pdfSpecs?.general, "Origin") || getProductSpecValue(product, "Origin") || "India";
  const hsnCode = getSectionValue(pdfSpecs?.general, "HSN Code") || getProductSpecValue(product, "HSN Code") || "On request";
  const quality = getSectionValue(pdfSpecs?.general, "Quality Grade") || getProductSpecValue(product, ["Quality", "Grade"]) || "Export grade";

  const related = products.filter((p) => p.slug !== resolvedSlug).slice(0, 4);
  const productJsonLd = buildProductJsonLd({
    product,
    seo: productSeo[resolvedSlug],
    hsnCode,
    quality,
    origin,
    pdfSpecs,
  });

  return (
    <>
      <JsonLd data={productJsonLd} />
      <main className="pdp-container pt-24 pb-16">
        <div className="container mx-auto px-4">
          
          {/* Centered Product Name at the very top */}
          <FadeUp>
            <h1 className="pdp-title">{product.name}</h1>
          </FadeUp>

          {/* Two-Column Grid: Photo (left) and Product Profile (right) */}
          <div className="pdp-hero-grid mt-8">
            {/* Left Column: Product Photo */}
            <FadeUp className="pdp-image-col">
              <div className="pdp-image-wrapper">
                <Image
                  src={product.image}
                  alt={product.name}
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="pdp-image"
                />
              </div>
            </FadeUp>

            {/* Right Column: Product Profile */}
            <FadeUp delay={0.06} className="pdp-profile-col">
              <div className="pdp-profile-card">
                <h2 className="pdp-profile-card__title">Product Profile</h2>
                
                <div className="pdp-profile-card__body">
                  <div className="pdp-profile-row">
                    <span className="pdp-profile-row__label">HSN Code</span>
                    <span className="pdp-profile-row__value">{hsnCode}</span>
                  </div>
                  <div className="pdp-profile-row">
                    <span className="pdp-profile-row__label">Quality Grade</span>
                    <span className="pdp-profile-row__value">{quality}</span>
                  </div>
                  <div className="pdp-profile-row">
                    <span className="pdp-profile-row__label">Origin</span>
                    <span className="pdp-profile-row__value">{origin}</span>
                  </div>
                </div>

                {/* Side-by-Side Buttons at the bottom */}
                <div className="pdp-profile-actions">
                  <Link href={`/contact?product=${product.slug}`} className="pdp-btn-redesign pdp-btn-redesign--primary">
                    Inquiry Now
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <DownloadButton
                    slug={product.slug}
                    className="pdp-btn-redesign pdp-btn-redesign--outline"
                    text="Download Datasheet"
                  />
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Technical Specifications Dossier: Stacked boxes */}
          <div className="pdp-specifications-stack mt-16 max-w-4xl mx-auto">
            
            {/* Quality Parameters */}
            <FadeUp delay={0.1}>
              <div className="pdp-spec-box" id="spec-technical">
                <div className="pdp-spec-box__header">
                  <Settings className="pdp-spec-box__icon" />
                  <h3 className="pdp-spec-box__title">Quality Parameters</h3>
                </div>
                <div className="pdp-spec-box__body">
                  <SpecTableRows items={pdfSpecs?.technical || product.specs} fallback="Detailed quality parameters are available on request." />
                </div>
              </div>
            </FadeUp>

            {/* Packing Details */}
            <FadeUp delay={0.14}>
              <div className="pdp-spec-box" id="spec-packaging">
                <div className="pdp-spec-box__header">
                  <Package className="pdp-spec-box__icon" />
                  <h3 className="pdp-spec-box__title">Packing Details</h3>
                </div>
                <div className="pdp-spec-box__body">
                  <SpecTableRows items={pdfSpecs?.packaging} fallback="Standard bulk export packing in corrugated boxes or paper bags is available on request." />
                </div>
              </div>
            </FadeUp>

            {/* Container Capacity */}
            <FadeUp delay={0.18}>
              <div className="pdp-spec-box" id="spec-container">
                <div className="pdp-spec-box__header">
                  <Truck className="pdp-spec-box__icon" />
                  <h3 className="pdp-spec-box__title">Container Capacity</h3>
                </div>
                <div className="pdp-spec-box__body">
                  <SpecTableRows items={pdfSpecs?.container} fallback="Custom containers loading parameters can be organized on request." />
                </div>
              </div>
            </FadeUp>

          </div>

          {/* Related Products Grid */}
          <section className="pdp-related-redesign mt-20">
            <div className="pdp-related-redesign__header">
              <div>
                <p className="pdp-related-redesign__tag">Continue Browsing</p>
                <h2 className="pdp-related-redesign__title">Related Products</h2>
              </div>
              <Link href="/products" className="pdp-related-redesign__all group">
                View All Products
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="pdp-related-redesign__grid">
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
