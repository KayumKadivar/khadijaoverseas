"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
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

const specificationSections = [
  {
    key: "general",
    id: "general-information",
    title: "General Information",
    description: "Core trade details used for buyer validation and export documentation.",
    icon: Info,
  },
  {
    key: "technical",
    id: "technical-analysis",
    title: "Technical Analysis",
    description: "Standard quality parameters presented in a scan-friendly format for quick review.",
    icon: Settings,
  },
  {
    key: "packaging",
    id: "packaging-details",
    title: "Packaging Details",
    description: "Packing format and customization notes for wholesale and private label supply.",
    icon: Package,
  },
  {
    key: "container",
    id: "container-capacity",
    title: "Container Capacity",
    description: "Approximate shipment planning information for containerized export orders.",
    icon: Truck,
  },
];

function getSectionValue(section, labels) {
  const labelList = Array.isArray(labels) ? labels : [labels];

  return (
    section?.find((item) =>
      labelList.some((label) => item.label.toLowerCase() === label.toLowerCase())
    )?.value ?? null
  );
}

function getProductSpecValue(product, labels) {
  const labelList = Array.isArray(labels) ? labels : [labels];

  return (
    product?.specs?.find((item) =>
      labelList.some((label) => item.label.toLowerCase() === label.toLowerCase())
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
  if (name.includes("powder")) {
    return ["Seasoning blends", "Snack flavor systems", "Instant soup premixes", "Dry rub formulations"];
  }
  if (name.includes("granules")) {
    return ["Masala and spice blends", "Ready meal manufacturing", "Soup and sauce bases", "Industrial food processing"];
  }
  if (name.includes("minced") || name.includes("chopped")) {
    return ["HoReCa kitchens", "Sauces and gravies", "Marinade mixes", "Frozen and ready-to-cook lines"];
  }
  return ["Soups and sauces", "Ready-to-eat products", "Seasoning applications", "Bulk food manufacturing"];
}

function SpecificationCard({ id, title, description, icon: Icon, items, highlighted = false }) {
  if (!items?.length) return null;

  return (
    <section
      id={id}
      className={`overflow-hidden rounded-[2rem] border shadow-soft ${
        highlighted
          ? "border-primary/15 bg-gradient-to-br from-primary/[0.03] via-white to-white"
          : "border-border/80 bg-white"
      }`}
    >
      <div
        className={`border-b px-6 py-6 sm:px-8 ${
          highlighted
            ? "border-primary/10 bg-gradient-dark text-primary-foreground"
            : "border-border/70 bg-secondary/45"
        }`}
      >
        <div className="flex items-start gap-4">
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
              highlighted
                ? "bg-accent text-primary"
                : "bg-white text-primary shadow-soft"
            }`}
          >
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <p
              className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${
                highlighted ? "text-white/60" : "text-muted-foreground"
              }`}
            >
              Readable Section
            </p>
            <h3 className="mt-2 text-2xl font-bold md:text-[1.75rem]">{title}</h3>
            <p
              className={`mt-2 max-w-2xl text-sm leading-relaxed ${
                highlighted ? "text-white/75" : "text-muted-foreground"
              }`}
            >
              {description}
            </p>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-full">
          <tbody>
            {items.map((item, index) => (
              <tr
                key={`${item.label}-${item.value}`}
                className={`align-top ${
                  index !== items.length - 1
                    ? highlighted
                      ? "border-b border-primary/10"
                      : "border-b border-border/70"
                    : ""
                }`}
              >
                <th
                  scope="row"
                  className={`w-[38%] px-6 py-4 text-left text-[11px] font-semibold uppercase tracking-[0.2em] sm:px-8 ${
                    highlighted ? "text-primary/55" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </th>
                <td
                  className={`px-6 py-4 text-sm leading-relaxed sm:px-8 sm:text-[15px] ${
                    highlighted ? "font-semibold text-primary" : "text-primary"
                  }`}
                >
                  {item.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function FallbackSpecificationCard({ product }) {
  return (
    <section className="overflow-hidden rounded-[2rem] border border-border/80 bg-card shadow-soft">
      <div className="border-b border-border/70 bg-secondary/35 px-6 py-6 sm:px-8">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-primary shadow-soft">
            <FileText className="h-5 w-5" />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Quick Overview
            </p>
            <h3 className="mt-2 text-2xl font-bold text-primary">Product Summary</h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Detailed PDF specifications are not mapped for this item yet, so this page is showing the available
              catalog information in a clean reading format.
            </p>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-full">
          <tbody>
            {buildFallbackRows(product).map((item, index, rows) => (
              <tr
                key={`${item.label}-${item.value}`}
                className={index !== rows.length - 1 ? "border-b border-border/70 align-top" : "align-top"}
              >
                <th
                  scope="row"
                  className="w-[38%] px-6 py-4 text-left text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:px-8"
                >
                  {item.label}
                </th>
                <td className="px-6 py-4 text-sm leading-relaxed text-primary sm:px-8 sm:text-[15px]">
                  {item.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

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
    if (resolvedSlug && !product) {
      router.replace("/products");
    }
  }, [resolvedSlug, product, router]);

  const handleDownload = () => {
    if (!pdfBase64 || !product) return;

    const linkSource = `data:application/pdf;base64,${pdfBase64}`;
    const downloadLink = document.createElement("a");

    downloadLink.href = linkSource;
    downloadLink.download = `${product.slug}-specifications.pdf`;
    downloadLink.click();
  };

  if (!product) return null;

  const hasDetailedSpecs = Boolean(
    pdfSpecs && Object.values(pdfSpecs).some((section) => Array.isArray(section) && section.length)
  );

  const displayName = product.name.replace(/^Dehydrated\s+/i, "");
  const related = products.filter((item) => item.slug !== resolvedSlug).slice(0, 4);

  const heroFacts = [
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
        "Customizable as required",
    },
    {
      label: "Moisture",
      value:
        getSectionValue(pdfSpecs?.technical, "Moisture Content") ||
        getProductSpecValue(product, "Moisture") ||
        "As per product standard",
    },
  ];

  const buyerSummary = [
    {
      label: "Quality Grade",
      value:
        getSectionValue(pdfSpecs?.general, "Quality Grade") ||
        getProductSpecValue(product, ["Quality", "Grade"]) ||
        "Export grade",
    },
    {
      label: "Standard Packing",
      value:
        getSectionValue(pdfSpecs?.packaging, "Standard Packing") ||
        getProductSpecValue(product, "Packing") ||
        "Bulk export packing available",
    },
    {
      label: "20 FT Container",
      value: getSectionValue(pdfSpecs?.container, "20 FT Container") || "Available by product format",
    },
    {
      label: "40 FT Container",
      value: getSectionValue(pdfSpecs?.container, "40 FT Container") || "Available by product format",
    },
  ];

  const visibleSections = specificationSections.filter(
    (section) => pdfSpecs?.[section.key] && pdfSpecs[section.key].length
  );
  const useCases = buildUseCases(product.name);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-hero pb-20 pt-10 md:pt-14">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_85%_10%,rgba(184,145,44,0.18),transparent_46%)]" />
        <div className="pointer-events-none absolute -left-20 top-40 h-72 w-72 rounded-full bg-primary/8 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-14 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

        <div className="container mx-auto px-4">
        

          <div className="mt-8 grid gap-10 xl:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] xl:items-start">
            <FadeUp className="xl:sticky xl:top-24">
              <div className="rounded-[2rem] border border-primary/10 bg-white/95 p-4 shadow-elegant backdrop-blur">
                <div className="relative overflow-hidden rounded-[1.6rem] bg-secondary/40">
                  <div className="absolute right-4 top-4 z-10 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-foreground shadow-soft">
                    <ShieldCheck className="h-4 w-4 text-accent" />
                    Export Ready
                  </div>

                  <Image
                    src={product.image}
                    alt={product.name}
                    priority
                    sizes="(min-width: 1280px) 42vw, 100vw"
                    className="aspect-[5/4.35] w-full object-cover"
                  />
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.4rem] bg-secondary/55 p-5 border border-border/60">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                      Product Form
                    </p>
                    <p className="mt-3 text-xl font-semibold text-primary">{displayName}</p>
                  </div>

                  <div className="rounded-[1.4rem] bg-gradient-dark p-5 text-primary-foreground">
                    <div className="flex items-start gap-3">
                      <FileText className="mt-1 h-5 w-5 shrink-0 text-accent" />
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">
                          Reading Mode
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-white/80">
                          {hasDetailedSpecs
                            ? "Structured from the technical sheet so buyers can review faster."
                            : "Showing the available catalog information in a cleaner, read-first layout."}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {[
                    { label: "Supply Type", value: "Bulk Export" },
                    { label: "MOQ", value: "As per inquiry" },
                    { label: "Lead Time", value: "Discuss at quote stage" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-2xl border border-border/70 bg-white px-4 py-3 shadow-soft">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">{item.label}</p>
                      <p className="mt-2 text-xs font-semibold text-primary">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.08}>
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-white/85 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary shadow-soft backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  Prepared for wholesale buyers and technical review
                </div>

                <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.03] text-primary md:text-6xl">
                  {product.name}
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/75">
                  {product.description}
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {heroFacts.map((fact) => (
                    <div
                      key={fact.label}
                      className="rounded-[1.4rem] border border-border/80 bg-white/90 p-5 shadow-soft backdrop-blur"
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                        {fact.label}
                      </p>
                      <p className="mt-3 text-base font-semibold leading-relaxed text-primary">{fact.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-[1.8rem] border border-border/80 bg-white/90 p-6 shadow-soft backdrop-blur sm:p-7">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-accent shadow-soft">
                      <ClipboardList className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                        Readability Focus
                      </p>
                      <h2 className="mt-2 text-2xl font-bold text-primary">Built for wholesale teams who need clear specs</h2>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        The section below separates general trade details, technical limits, packing information, and
                        shipment planning so procurement teams can scan confidently without getting lost in decorative
                        cards.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {product.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3 rounded-2xl border border-border/70 bg-secondary/35 px-4 py-4"
                      >
                        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/20">
                          <CheckCircle2 className="h-4 w-4 text-accent" />
                        </div>
                        <p className="text-sm font-medium leading-relaxed text-primary">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 rounded-[1.8rem] border border-border/80 bg-white/90 p-6 shadow-soft backdrop-blur sm:p-7">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-accent shadow-soft">
                      <Factory className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                        Industry Applications
                      </p>
                      <h2 className="mt-2 text-2xl font-bold text-primary">Application mapping for your teams</h2>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        Typical use-case mapping for purchase and product development teams.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {useCases.map((item) => (
                      <div key={item} className="flex items-start gap-3 rounded-2xl border border-border/70 bg-secondary/30 px-4 py-4">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <p className="text-sm font-medium text-primary">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-3 rounded-xl bg-primary px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-primary-foreground shadow-elegant transition-all hover:-translate-y-0.5 hover:bg-primary-glow"
                  >
                    Get Wholesale Quote
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <button
                    onClick={handleDownload}
                    className="inline-flex items-center gap-3 rounded-xl border-2 border-primary/20 bg-white/60 px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-primary transition-all hover:border-primary hover:bg-white"
                  >
                    <Download className="h-4 w-4" />
                    Download Specs
                  </button>
                </div>

                <div className="mt-6 flex flex-wrap gap-3 text-sm text-muted-foreground">
                  <div className="inline-flex items-center gap-2 rounded-full bg-secondary/80 px-4 py-2">
                    <Factory className="h-4 w-4 text-primary" />
                    Bulk production support
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-secondary/80 px-4 py-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    Origin: Gujarat, India
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="border-t border-border/70 bg-white py-20">
        <div className="container mx-auto px-4">
          <FadeUp>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-accent" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">
                  Specification Dossier
                </span>
              </div>

              <h2 className="mt-4 text-3xl font-bold text-primary md:text-5xl">Technical specification dossier</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                Complete information is organized like a professional export sheet: general profile, technical values,
                packaging details, and container planning.
              </p>
            </div>
          </FadeUp>

          {hasDetailedSpecs ? (
            <FadeUp delay={0.05}>
              <div className="mt-8 flex flex-wrap gap-3">
                {visibleSections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-2 text-sm font-medium text-primary transition-colors hover:border-primary/30 hover:bg-secondary"
                  >
                    <section.icon className="h-4 w-4 text-accent" />
                    {section.title}
                  </a>
                ))}
              </div>
            </FadeUp>
          ) : null}

          <div className="mt-10 grid gap-8 xl:grid-cols-[minmax(0,1fr)_340px]">
            <div className="space-y-6">
              {hasDetailedSpecs ? (
                <>
                  <FadeUp delay={0.07}>
                    <SpecificationCard
                      id="general-information"
                      title="General Information"
                      description="Commercial identity, trade code, grade, and origin details for this product."
                      icon={Info}
                      items={pdfSpecs.general}
                    />
                  </FadeUp>

                  <FadeUp delay={0.11}>
                    <SpecificationCard
                      id="technical-analysis"
                      title="Technical Analysis"
                      description="Primary technical limits used for procurement review and product qualification."
                      icon={Settings}
                      items={pdfSpecs.technical}
                      highlighted
                    />
                  </FadeUp>

                  <div className="grid gap-6 lg:grid-cols-2">
                    <FadeUp delay={0.14}>
                      <SpecificationCard
                        id="packaging-details"
                        title="Packaging Details"
                        description="Standard packing and customization notes for export dispatch."
                        icon={Package}
                        items={pdfSpecs.packaging}
                      />
                    </FadeUp>

                    <FadeUp delay={0.17}>
                      <SpecificationCard
                        id="container-capacity"
                        title="Container Capacity"
                        description="Approximate loading guidance to support order planning."
                        icon={Truck}
                        items={pdfSpecs.container}
                      />
                    </FadeUp>
                  </div>
                </>
              ) : (
                <FadeUp delay={0.08}>
                  <FallbackSpecificationCard product={product} />
                </FadeUp>
              )}
            </div>

            <FadeUp delay={0.12} className="self-start xl:sticky xl:top-24">
              <div className="space-y-5">
                <div className="rounded-[1.8rem] border border-primary/10 bg-secondary/40 p-6 shadow-soft">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-accent shadow-soft">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                        Quick Buyer Summary
                      </p>
                      <h3 className="mt-2 text-2xl font-bold text-primary">Key buyer snapshot</h3>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    {buyerSummary.map((item) => (
                      <div key={item.label} className="rounded-2xl bg-white/80 px-4 py-4 shadow-soft">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                          {item.label}
                        </p>
                        <p className="mt-2 text-sm font-semibold leading-relaxed text-primary">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.8rem] bg-gradient-dark p-6 text-primary-foreground shadow-elegant">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">Offline Share</p>
                  <h3 className="mt-2 text-2xl font-bold">Need the sheet as PDF?</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">
                    Download the technical sheet and send it directly to your purchase, QA, or logistics team.
                  </p>

                  <button
                    onClick={handleDownload}
                    className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-white px-5 py-4 text-sm font-bold uppercase tracking-[0.18em] text-primary transition-transform hover:-translate-y-0.5"
                  >
                    <Download className="h-4 w-4" />
                    Download Specifications
                  </button>
                </div>

                <div className="rounded-[1.8rem] border border-border/80 bg-white p-6 shadow-soft">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    Suggested Reading Order
                  </p>
                  <div className="mt-5 space-y-4">
                    {[
                      "Confirm identity and trade parameters in General Information.",
                      "Validate moisture, size/mesh, and quality limits in Technical Analysis.",
                      "Finalize dispatch planning from Packaging and Container Capacity.",
                    ].map((step, index) => (
                      <div key={step} className="flex items-start gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary font-semibold text-primary">
                          {index + 1}
                        </div>
                        <p className="pt-1 text-sm leading-relaxed text-muted-foreground">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.8rem] border border-border/80 bg-card p-6 shadow-soft">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    Need Customization?
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-primary">Mesh, packing, and label customization</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Tell us your target specification and market. We can align product format, packing style, and dispatch planning.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-5 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-3 text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-primary-glow"
                  >
                    Request Custom Quote
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-secondary/35 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">Continue Browsing</p>
              <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">Related Products</h2>
              <p className="mt-2 max-w-xl text-muted-foreground">
                Explore more formats from the same dehydrated range if you want alternatives for texture, size, or use case.
              </p>
            </div>

            <Link href="/products" className="group inline-flex items-center gap-2 font-semibold text-primary">
              View All Products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {related.map((item, index) => (
              <FadeUp key={item.slug} delay={index * 0.08}>
                <ProductCard product={item} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
