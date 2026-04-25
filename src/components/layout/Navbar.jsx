"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.webp";
import { products } from "@/data/products";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products", hasDropdown: true },
  { to: "/industries", label: "Industries We Serve" },
  { to: "/quality", label: "Quality" },
  { to: "/contact", label: "Contact Us" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "bg-background/90 backdrop-blur-xl shadow-soft py-2" : "bg-background/60 backdrop-blur-sm py-4"
      )}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="leading-tight">
            <div className="font-serif font-bold text-primary text-lg sm:text-xl tracking-tight">KHADIJA</div>
            <div className="font-serif font-bold text-primary text-lg sm:text-xl tracking-tight -mt-1">OVERSEAS</div>
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.to} className="relative" onMouseEnter={() => l.hasDropdown && setProductsOpen(true)} onMouseLeave={() => l.hasDropdown && setProductsOpen(false)}>
              <Link
                href={l.to}
                className={cn(
                  "flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors relative",
                  (l.to === "/" ? pathname === "/" : pathname.startsWith(l.to)) ? "text-primary" : "text-foreground/75 hover:text-primary"
                )}
              >
                {l.label}
                {l.hasDropdown && <ChevronDown className="h-3.5 w-3.5" />}
                {(l.to === "/" ? pathname === "/" : pathname.startsWith(l.to)) && (
                  <span className="absolute -bottom-0.5 left-3 right-3 h-0.5 bg-accent rounded-full" />
                )}
              </Link>

              {l.hasDropdown && productsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-72 bg-card rounded-xl shadow-elegant border border-border p-2 animate-scale-in">
                  {products.slice(0, 8).map((p) => (
                    <Link
                      key={p.slug}
                      href={`/products/${p.slug}`}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-secondary transition-colors text-sm text-foreground/80"
                    >
                      <img src={p.image} alt={p.name} className="h-8 w-8 rounded object-cover" loading="lazy" />
                      {p.name}
                    </Link>
                  ))}
                  <Link href="/products" className="block text-center px-3 py-2 mt-1 text-sm font-semibold text-accent hover:bg-accent/10 rounded-lg">
                    View All Products →
                  </Link>
                </div>
              )}
            </li>
          ))}
        </ul>

        <Link href="/contact"
          className="hidden lg:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-glow shadow-soft hover:shadow-elegant transition-all group"
        >
          GET A QUOTE
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>

        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-primary" aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-up">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                href={l.to}
                className={cn(
                  "px-3 py-3 rounded-lg text-sm font-medium",
                  (l.to === "/" ? pathname === "/" : pathname.startsWith(l.to)) ? "bg-primary text-primary-foreground" : "text-foreground/80 hover:bg-secondary"
                )}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/contact" className="mt-2 bg-primary text-primary-foreground px-4 py-3 rounded-lg text-sm font-semibold text-center">
              GET A QUOTE
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
