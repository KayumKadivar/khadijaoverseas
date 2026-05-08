export const SITE_URL = "https://www.khadijaexim.com";
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const LOCAL_BUSINESS_ID = `${SITE_URL}/#local-business`;

const businessAddress = {
  "@type": "PostalAddress",
  addressLocality: "Wankaner",
  addressRegion: "Gujarat",
  addressCountry: "IN",
};

const sameAs = [
  "https://www.facebook.com/share/18ZVbBxn91/",
  "https://www.instagram.com/khadija_exim",
  "https://www.linkedin.com/in/rahil-sherasiya-ba4239292",
  "https://wa.me/918128695587",
];

function toAbsoluteUrl(value) {
  if (!value) return undefined;
  const src = typeof value === "string" ? value : value.src;
  if (!src) return undefined;
  return new URL(src, SITE_URL).toString();
}

function compactObject(value) {
  if (Array.isArray(value)) {
    return value.map(compactObject).filter((item) => item !== undefined);
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value)
        .map(([key, item]) => [key, compactObject(item)])
        .filter(([, item]) => item !== undefined && item !== null && item !== "")
    );
  }

  return value;
}

function dedupeProperties(properties) {
  const seen = new Set();

  return properties.filter((property) => {
    if (!property?.name || !property?.value) return false;
    const key = `${property.name}:${property.value}`.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export function buildBusinessJsonLd({ logo } = {}) {
  const logoUrl = toAbsoluteUrl(logo);

  return compactObject({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORGANIZATION_ID,
        name: "Khadija Exim",
        url: SITE_URL,
        logo: logoUrl,
        image: logoUrl,
        description:
          "Khadija Exim is a trusted dehydrated food products exporter from Gujarat, India. We supply premium dehydrated onion, garlic and vegetables to importers and food manufacturers worldwide.",
        email: "info@khadijaexim.com",
        telephone: "+918128695587",
        address: businessAddress,
        sameAs,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+918128695587",
          email: "info@khadijaexim.com",
          contactType: "sales",
          areaServed: "Worldwide",
          availableLanguage: ["en", "hi"],
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": LOCAL_BUSINESS_ID,
        name: "Khadija Exim",
        url: SITE_URL,
        logo: logoUrl,
        image: logoUrl,
        description:
          "Premium quality dehydrated onion and garlic products, exported worldwide from India.",
        email: "info@khadijaexim.com",
        telephone: "+918128695587",
        address: businessAddress,
        parentOrganization: {
          "@id": ORGANIZATION_ID,
        },
        areaServed: "Worldwide",
        sameAs,
      },
    ],
  });
}

export function buildProductJsonLd({
  product,
  seo,
  image,
  hsnCode,
  quality,
  origin,
  pdfSpecs,
}) {
  const productUrl = `${SITE_URL}/products/${product.slug}`;
  const additionalProperty = dedupeProperties([
    hsnCode && hsnCode !== "On request"
      ? { "@type": "PropertyValue", name: "HSN Code", value: hsnCode }
      : null,
    quality ? { "@type": "PropertyValue", name: "Quality Grade", value: quality } : null,
    origin ? { "@type": "PropertyValue", name: "Origin", value: origin } : null,
    ...(pdfSpecs?.technical || product.specs || []).map((item) => ({
      "@type": "PropertyValue",
      name: item.label,
      value: item.value,
    })),
    ...(pdfSpecs?.packaging || []).map((item) => ({
      "@type": "PropertyValue",
      name: item.label,
      value: item.value,
    })),
    ...(pdfSpecs?.container || []).map((item) => ({
      "@type": "PropertyValue",
      name: item.label,
      value: item.value,
    })),
  ]);

  return compactObject({
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${productUrl}#product`,
    name: product.name,
    description: seo?.description || product.description,
    image: [toAbsoluteUrl(image || product.image)],
    url: productUrl,
    category: "Dehydrated Food Products",
    brand: {
      "@type": "Brand",
      name: "Khadija Exim",
    },
    manufacturer: {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: "Khadija Exim",
      url: SITE_URL,
    },
    additionalProperty,
  });
}
