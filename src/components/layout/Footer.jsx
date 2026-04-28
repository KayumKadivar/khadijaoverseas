import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.webp";

const footerProducts = [
  { label: "White Onion", href: "/products?category=white" },
  { label: "Red Onion", href: "/products?category=red" },
  { label: "Pink Onion", href: "/products?category=pink" },
  { label: "Garlic", href: "/products?category=garlic" },
];

const Footer = () => {
  return (
    <footer className="relative bg-gradient-dark text-primary-foreground overflow-hidden">
      {/* Decorative leaves */}
      <div className="absolute -left-10 top-10 text-9xl opacity-10 animate-float-slow">🌿</div>
      <div className="absolute -right-10 bottom-10 text-9xl opacity-10 animate-float">🍃</div>

      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo.src || logo} alt="Khadija Overseas" className="h-12 w-12 bg-primary-foreground/10 rounded-lg p-1" />
              <div>
                <div className="font-serif font-bold text-lg leading-tight">KHADIJA<br />OVERSEAS</div>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-5">
              Premium quality dehydrated onion and garlic products, exported worldwide from India.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin, MessageCircle].map((Icon, i) => (
                <a key={i} href="#" className="h-9 w-9 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-accent text-lg mb-5">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/products", label: "Products" },
                { to: "/industries", label: "Industries We Serve" },
                { to: "/quality", label: "Quality" },
                { to: "/contact", label: "Contact Us" },
              ].map((l) => (
                <li key={l.to}>
                  <Link href={l.to} className="text-primary-foreground/70 hover:text-accent transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-accent text-lg mb-5">Our Products</h4>
            <ul className="space-y-2.5 text-sm">
              {footerProducts.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-primary-foreground/70 hover:text-accent transition-colors">{p.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-accent text-lg mb-5">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">Survey No. 165, Plot No. 2,<br />Jamnagar Road, Wankaner,<br />Rajkot, Gujarat – 363 621, India</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <a href="tel:+916351403200" className="text-primary-foreground/80 hover:text-accent">+91 63514 03200</a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a href="mailto:info@khadijaoverseas.com" className="text-primary-foreground/80 hover:text-accent">info@khadijaoverseas.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-primary-foreground/60">
          <p>© 2026 Khadija Overseas. All Rights Reserved.</p>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
