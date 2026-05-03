import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SocialSidebar from "@/components/SocialSidebar";
import { Toaster } from "sonner";

export const metadata = {
  title: "Khadija Overseas | Premium Dehydrated Onion & Garlic Supplier from India",
  description: "Khadija Overseas is a leading dehydrated food products supplier and exporter from India. We deliver premium quality products that meet international standards.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <SocialSidebar />
        <Footer />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
