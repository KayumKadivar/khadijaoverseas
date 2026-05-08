import { buildSeoMetadata, pageSeo } from "@/lib/seo";

export const metadata = buildSeoMetadata(pageSeo.contact);

export default function ContactLayout({ children }) {
  return children;
}
