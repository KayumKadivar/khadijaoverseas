import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

export const metadata = {
  title: "Khadija Overseas | Premium Dehydrated Onion & Garlic Supplier from India",
  description: "Khadija Overseas is a leading dehydrated food products supplier and exporter from India. We deliver premium quality products that meet international standards.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        <TooltipProvider>
          <Navbar />
          <main className="flex-1 pt-24">{children}</main>
          <Footer />
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </body>
    </html>
  );
}
