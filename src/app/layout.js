import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SocialSidebar from "@/components/SocialSidebar";
import JsonLd from "@/components/JsonLd";
import { buildBusinessJsonLd } from "@/lib/schema";
import logo from "@/assets/logo.webp";
import { Toaster } from "sonner";

export const metadata = {
  title: "Khadija Exim | Premium Dehydrated Onion & Garlic Supplier from India",
  description: "Khadija Exim is a leading dehydrated food products supplier and exporter from India. We deliver premium quality products that meet international standards.",
  openGraph: {
    title: "Khadija Exim | Dehydrated Onion Exporter India",
    description: "Premium bulk dehydrated onion & garlic supplier from Gujarat",
    images: [
      {
        url: "https://www.khadijaexim.com/og-image.jpg",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  const businessJsonLd = buildBusinessJsonLd({ logo });

  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        <JsonLd data={businessJsonLd} />
        <Header />
        <main>{children}</main>
        <SocialSidebar />
        <Footer />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
