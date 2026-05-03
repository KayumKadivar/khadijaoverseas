"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Home as HomeIcon, Info, ShoppingBag, Factory, ShieldCheck, Mail, ArrowRight, Menu, X, Phone, Globe, Newspaper } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png"
import Image from "next/image";

const links = [
  { to: "/", label: "Home", icon: HomeIcon },
  { to: "/about", label: "About Us", icon: Info },
  { to: "/products", label: "Products", icon: ShoppingBag },
  { to: "/industries", label: "Industries", icon: Factory },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          scrolled 
            ? "bg-background/95 backdrop-blur-xl shadow-sm py-2 border-b border-border/50" 
            : "bg-transparent py-4 border-b border-transparent"
        )}
      >
        <nav className="container mx-auto px-4 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="KHADIJA EXIM" width={250} height={250} />
          </Link>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => {
              const isActive = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
              return (
                <li key={l.to} className="relative">
                  <Link
                    href={l.to}
                    className={cn(
                      "px-4 py-2 text-md font-semibold transition-all rounded-full",
                      isActive ? "text-primary font-bold" : "text-foreground/70 hover:text-primary"
                    )}
                  >
                    {l.label}
                    {isActive && (
                      <motion.span 
                        layoutId="nav-active"
                        className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent rounded-full" 
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-4">
            <Link href="/contact"
              className="hidden lg:inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-bold hover:bg-primary-glow shadow-soft transition-all group"
            >
              GET A QUOTE
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <button 
              onClick={() => setOpen(true)} 
              className="lg:hidden p-2.5 rounded-xl bg-primary/5 text-primary hover:bg-primary/10 transition-colors"
              aria-label="Open Menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[100] lg:hidden">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-primary/20 backdrop-blur-md"
            />
            
            {/* Sidebar */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 h-full w-[95%] max-w-[400px] bg-background shadow-[-20px_0_60px_-15px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden"
            >
              {/* Decorative background element */}
              <div className="absolute -right-20 -top-20 opacity-[0.03] pointer-events-none">
                <Globe className="h-80 w-80 text-primary rotate-12" />
              </div>

              {/* Menu Header */}
              <div className="relative flex items-center justify-between p-6 border-b border-border/50 bg-secondary/20">
                <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2">
                  <Image src={logo} alt="KHADIJA EXIM" className="h-10 w-auto object-contain" />
                </Link>
                <button 
                  onClick={() => setOpen(false)} 
                  className="p-3 rounded-2xl bg-white shadow-soft text-primary hover:text-accent transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Menu Links */}
              <div className="flex-1 overflow-y-auto no-scrollbar p-6 space-y-4">
                
                <div className="flex flex-col gap-2.5">
                  {links.map((l, idx) => {
                    const isActive = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
                    const Icon = l.icon;
                    return (
                      <motion.div
                        key={l.to}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + idx * 0.05 }}
                      >
                        <Link
                          href={l.to}
                          onClick={() => setOpen(false)}
                          className={cn(
                            "group flex items-center gap-4 px-5 py-4 rounded-2xl text-[1.1rem] font-bold transition-all border relative overflow-hidden",
                            isActive 
                              ? "bg-primary text-primary-foreground border-primary shadow-elegant" 
                              : "bg-white text-primary border-primary/5 hover:bg-primary/5 hover:border-primary/20"
                          )}
                        >
                          <div className={cn(
                            "h-10 w-10 rounded-xl flex items-center justify-center transition-colors",
                            isActive ? "bg-white/10" : "bg-primary/5 group-hover:bg-primary/10"
                          )}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <span className="flex-1">{l.label}</span>
                          <ArrowRight className={cn(
                            "h-5 w-5 transition-transform",
                            isActive ? "opacity-100" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                          )} />
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-10"
                >
                  <Link 
                    href="/contact" 
                    onClick={() => setOpen(false)}
                    className="relative group block w-full bg-gradient-gold p-[2px] rounded-2xl shadow-gold active:scale-95 transition-transform"
                  >
                    <div className="bg-primary text-primary-foreground px-6 py-5 rounded-2xl text-lg font-bold tracking-[0.2em] text-center uppercase flex items-center justify-center gap-3">
                      <span>Get A Quote</span>
                      <Phone className="h-5 w-5 animate-pulse" />
                    </div>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
