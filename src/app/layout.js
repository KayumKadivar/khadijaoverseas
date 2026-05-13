import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SocialSidebar from "@/components/SocialSidebar";
import JsonLd from "@/components/JsonLd";
import { buildBusinessJsonLd } from "@/lib/schema";
import logo from "@/assets/logo.webp";
import { Toaster } from "sonner";
import Script from "next/script";

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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0F7LDMTZXM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-0F7LDMTZXM');
          `}
        </Script>
      </head>
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
