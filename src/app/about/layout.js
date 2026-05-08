import { buildSeoMetadata, pageSeo } from "@/lib/seo";

export const metadata = buildSeoMetadata(pageSeo.about);

export default function AboutLayout({ children }) {
  return children;
}
