import { buildSeoMetadata, pageSeo } from "@/lib/seo";

export const metadata = buildSeoMetadata(pageSeo.industries);

export default function IndustriesLayout({ children }) {
  return children;
}
