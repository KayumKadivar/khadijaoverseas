import HomePageClient from "./HomePageClient";
import { buildSeoMetadata, pageSeo } from "@/lib/seo";

export const metadata = buildSeoMetadata(pageSeo.home);

export default function HomePage() {
  return <HomePageClient />;
}
