"use client";

import "./page.css";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Download,
  Factory,
  FileText,
  Info,
  MapPin,
  Package,
  Settings,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { FadeUp } from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import { extractedPages, pdfBase64 } from "@/data/websiteProductSpecifications";
import { findProductSpec } from "@/lib/parse-specs";

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

function buildFallbackRows(product) {
  return [
    { label: "Product Name", value: product.name },
    { label: "Origin", value: "India" },
    ...product.specs,
  ];
}

function buildUseCases(productName) {
  const name = productName.toLowerCase();
  if (name.includes("powder"))
    return ["Seasoning blends", "Snack flavor systems", "Instant soup premixes", "Dry rub formulations"];
  if (name.includes("granules"))
    return ["Masala and spice blends", "Ready meal manufacturing", "Soup and sauce bases", "Industrial food processing"];
  if (name.includes("minced") || name.includes("chopped"))
    return ["HoReCa kitchens", "Sauces and gravies", "Marinade mixes", "Frozen and ready-to-cook lines"];
  return ["Soups and sauces", "Ready-to-eat products", "Seasoning applications", "Bulk food manufacturing"];
}

const sectionMeta = {
  general: { title: "General Information", icon: Info, description: "Commercial identity, trade code, grade, and origin." },
  technical: { title: "Technical Analysis", icon: Settings, description: "Key quality parameters for procurement review." },
  packaging: { title: "Packaging Details", icon: Package, description: "Packing format and customization notes." },
  container: { title: "Container Capacity", icon: Truck, description: "Approximate loading guidance for shipment planning." },
};

/* ──────────────────────── sub-components ───────────────────────── */

function SpecTable({ id, sectionKey, items, highlighted = false }) {
  if (!items?.length) return null;
  const meta = sectionMeta[sectionKey] || {};
  const Icon = meta.icon || FileText;

  return (
    <section id={id} className="spec-table-section">
      {/* Section header */}
      <div className={`spec-table-header ${highlighted ? "spec-table-header--highlighted" : ""}`}>
        <div className="spec-table-header__icon-wrap">
          <Icon className="spec-table-header__icon" />
        </div>
        <div>
          <h3 className="spec-table-header__title">{meta.title}</h3>
          <p className="spec-table-header__desc">{meta.description}</p>
        </div>
      </div>

      {/* Rows */}
      <div className="spec-table-body">
        {items.map((item, i) => (
          <div
            key={`${item.label}-${item.value}`}
            className={`spec-row ${i !== items.length - 1 ? "spec-row--bordered" : ""} ${highlighted ? "spec-row--highlighted" : ""}`}
          >
            <span className="spec-row__label">{item.label}</span>
            <span className="spec-row__value">{item.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function FallbackTable({ product }) {
  const rows = buildFallbackRows(product);
  return (
    <section className="spec-table-section">
      <div className="spec-table-header">
        <div className="spec-table-header__icon-wrap">
          <FileText className="spec-table-header__icon" />
        </div>
        <div>
          <h3 className="spec-table-header__title">Product Summary</h3>
          <p className="spec-table-header__desc">
            Detailed PDF specifications are not mapped for this item yet. Showing available catalog information.
          </p>
        </div>
      </div>
      <div className="spec-table-body">
        {rows.map((item, i) => (
          <div
            key={`${item.label}-${item.value}`}
            className={`spec-row ${i !== rows.length - 1 ? "spec-row--bordered" : ""}`}
          >
            <span className="spec-row__label">{item.label}</span>
            <span className="spec-row__value">{item.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ════════════════════════ PAGE COMPONENT ════════════════════════ */

export default function ProductDetailPage() {
  const { slug } = useParams();
  const router = useRouter();

  const resolvedSlug = Array.isArray(slug) ? slug[0] : slug;
  const product = products.find((item) => item.slug === resolvedSlug);

  const pdfSpecs = React.useMemo(() => {
    if (!product) return null;
    return findProductSpec(product.name, extractedPages);
  }, [product]);

  React.useEffect(() => {
    if (resolvedSlug && !product) router.replace("/products");
  }, [resolvedSlug, product, router]);

  const handleDownload = () => {
    if (!pdfBase64 || !product) return;
    const a = document.createElement("a");
    a.href = `data:application/pdf;base64,${pdfBase64}`;
    a.download = `${product.slug}-specifications.pdf`;
    a.click();
  };

  if (!product) return null;

  const hasDetailedSpecs = Boolean(
    pdfSpecs && Object.values(pdfSpecs).some((s) => Array.isArray(s) && s.length)
  );

  const related = products.filter((p) => p.slug !== resolvedSlug).slice(0, 4);
  const useCases = buildUseCases(product.name);

  /* quick-fact pills shown beneath the hero */
  const quickFacts = [
    {
      label: "Origin",
      value: getSectionValue(pdfSpecs?.general, "Origin") || getProductSpecValue(product, "Origin") || "India",
    },
    {
      label: "HSN Code",
      value: getSectionValue(pdfSpecs?.general, "HSN Code") || getProductSpecValue(product, "HSN Code") || "On request",
    },
    {
      label: "Size / Mesh",
      value:
        getSectionValue(pdfSpecs?.technical, ["Size", "Mesh Size"]) ||
        getProductSpecValue(product, ["Size", "Mesh", "Mesh Size"]) ||
        "Customizable",
    },
    {
      label: "Moisture",
      value:
        getSectionValue(pdfSpecs?.technical, "Moisture Content") ||
        getProductSpecValue(product, "Moisture") ||
        "As per standard",
    },
    {
      label: "Quality",
      value:
        getSectionValue(pdfSpecs?.general, "Quality Grade") ||
        getProductSpecValue(product, ["Quality", "Grade"]) ||
        "Export grade",
    },
    {
      label: "Packing",
      value:
        getSectionValue(pdfSpecs?.packaging, "Standard Packing") ||
        getProductSpecValue(product, "Packing") ||
        "Bulk packing",
    },
  ];

  /* ─── render ──────────────────────────────────────────────────── */
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="pdp-hero mt-16">
        {/* decorative blurs */}
        <div className="pdp-hero__blur pdp-hero__blur--left" />
        <div className="pdp-hero__blur pdp-hero__blur--right" />

        <div className="container mx-auto px-4">
       

          {/* two-column hero */}
          <div className="pdp-hero__grid">
            {/* image column */}
            <FadeUp className="pdp-hero__image-col">
              <div className="pdp-hero__image-frame">
                <div className="pdp-hero__badge">
                  <ShieldCheck className="pdp-hero__badge-icon" />
                  Export Ready
                </div>
                <Image
                  src={product.image}
                  alt={product.name}
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="pdp-hero__image"
                />
              </div>
            </FadeUp>

            {/* text column */}
            <FadeUp delay={0.06} className="pdp-hero__text-col">
              <div className="pdp-hero__tag">
                <span className="pdp-hero__tag-dot" />
                Dehydrated Product — Wholesale Supply
              </div>

              <h1 className="pdp-hero__title">{product.name}</h1>

              <p className="pdp-hero__description">{product.description}</p>

              {/* CTA row */}
              <div className="pdp-hero__cta-row">
                <Link href="/contact" className="pdp-btn pdp-btn--primary">
                  Get Wholesale Quote
                  <ArrowRight className="pdp-btn__icon" />
                </Link>
                <button onClick={handleDownload} className="pdp-btn pdp-btn--outline">
                  <Download className="pdp-btn__icon" />
                  Download Specs
                </button>
              </div>

              {/* origin + production badges */}
              <div className="pdp-hero__badges">
                <span className="pdp-badge"><Factory className="pdp-badge__icon" /> Bulk production support</span>
                <span className="pdp-badge"><MapPin className="pdp-badge__icon" /> Gujarat, India</span>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ============== QUICK FACTS STRIP ============== */}
      <section className="pdp-facts-strip">
        <div className="container mx-auto px-4">
          <FadeUp>
            <div className="pdp-facts-grid">
              {quickFacts.map((f) => (
                <div key={f.label} className="pdp-fact">
                  <span className="pdp-fact__label">{f.label}</span>
                  <span className="pdp-fact__value">{f.value}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ============= FEATURES + USE CASES ============= */}
      <section className="pdp-features-section">
        <div className="container mx-auto px-4">
          <div className="pdp-two-col">
            {/* Features */}
            <FadeUp>
              <div className="pdp-card">
                <div className="pdp-card__header">
                  <CheckCircle2 className="pdp-card__header-icon" />
                  <h2 className="pdp-card__header-title">Key Features</h2>
                </div>
                <ul className="pdp-feature-list">
                  {product.features.map((feat) => (
                    <li key={feat} className="pdp-feature-item">
                      <span className="pdp-feature-item__check">
                        <CheckCircle2 className="pdp-feature-item__check-icon" />
                      </span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>

            {/* Use Cases */}
            <FadeUp delay={0.06}>
              <div className="pdp-card">
                <div className="pdp-card__header">
                  <Factory className="pdp-card__header-icon" />
                  <h2 className="pdp-card__header-title">Industry Applications</h2>
                </div>
                <ul className="pdp-feature-list">
                  {useCases.map((uc) => (
                    <li key={uc} className="pdp-feature-item">
                      <span className="pdp-feature-item__check">
                        <CheckCircle2 className="pdp-feature-item__check-icon" />
                      </span>
                      {uc}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* =========== SPECIFICATIONS DOSSIER =========== */}
      <section className="pdp-specs-section" id="specifications">
        <div className="container mx-auto px-4">
          <FadeUp>
            <div className="pdp-specs-header">
              <div className="pdp-specs-header__tag">
                <span className="pdp-specs-header__tag-line" />
                <span className="pdp-specs-header__tag-text">Specification Dossier</span>
              </div>
              <h2 className="pdp-specs-header__title">Technical Specifications</h2>
              <p className="pdp-specs-header__subtitle">
                Complete product information organized for procurement review — general profile,
                technical values, packaging details, and container capacity.
              </p>
            </div>
          </FadeUp>

          {/* Spec jump links */}
          {hasDetailedSpecs && (
            <FadeUp delay={0.04}>
              <div className="pdp-specs-nav">
                {Object.entries(sectionMeta).map(([key, meta]) => {
                  if (!pdfSpecs?.[key]?.length) return null;
                  const Icon = meta.icon;
                  return (
                    <Link key={key} href={`#spec-${key}`} className="pdp-specs-nav__link">
                      <Icon className="pdp-specs-nav__link-icon" />
                      {meta.title}
                    </Link>
                  );
                })}
              </div>
            </FadeUp>
          )}

          {/* Spec tables */}
          <div className="pdp-specs-tables">
            {hasDetailedSpecs ? (
              <>
                <FadeUp delay={0.06}>
                  <SpecTable id="spec-general" sectionKey="general" items={pdfSpecs.general} />
                </FadeUp>
                <div className="pdp-specs-tables__row items-start">
                  <div className="flex flex-col gap-[1.75rem]">
                    <FadeUp delay={0.1}>
                      <SpecTable id="spec-technical" sectionKey="technical" items={pdfSpecs.technical} highlighted />
                    </FadeUp>
                    <FadeUp delay={0.13}>
                      <SpecTable id="spec-packaging" sectionKey="packaging" items={pdfSpecs.packaging} />
                    </FadeUp>
                  </div>
                  <FadeUp delay={0.16}>
                    <SpecTable id="spec-container" sectionKey="container" items={pdfSpecs.container} />
                  </FadeUp>
                </div>
              </>
            ) : (
              <FadeUp delay={0.06}>
                <FallbackTable product={product} />
              </FadeUp>
            )}
          </div>

          {/* download CTA inside specs */}
          <FadeUp delay={0.12}>
            <div className="pdp-specs-download">
              <div className="pdp-specs-download__inner">
                <div>
                  <h3 className="pdp-specs-download__title">Need the sheet as PDF?</h3>
                  <p className="pdp-specs-download__text">
                    Download the technical sheet and send it directly to your purchase, QA, or logistics team.
                  </p>
                </div>
                <button onClick={handleDownload} className="pdp-btn pdp-btn--white">
                  <Download className="pdp-btn__icon" />
                  Download Specifications
                </button>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* =============== CTA BAND =============== */}
      <section className="pdp-cta-band">
        <div className="container mx-auto px-4">
          <FadeUp>
            <div className="pdp-cta-band__inner">
              <div>
                <h2 className="pdp-cta-band__title">Need custom specifications?</h2>
                <p className="pdp-cta-band__text">
                  Tell us your target mesh, packing style, and market. We'll align the product to your exact requirements.
                </p>
              </div>
              <Link href="/contact" className="pdp-btn pdp-btn--accent">
                Request Custom Quote
                <ArrowRight className="pdp-btn__icon" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ============ RELATED PRODUCTS ============ */}
      <section className="pdp-related">
        <div className="container mx-auto px-4">
          <div className="pdp-related__header">
            <div>
              <p className="pdp-related__tag">Continue Browsing</p>
              <h2 className="pdp-related__title">Related Products</h2>
              <p className="pdp-related__subtitle">
                Explore more formats from the same dehydrated range for alternatives in texture, size, or use case.
              </p>
            </div>
            <Link href="/products" className="pdp-related__all group">
              View All Products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="pdp-related__grid">
            {related.map((item, i) => (
              <FadeUp key={item.slug} delay={i * 0.06}>
                <ProductCard product={item} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
