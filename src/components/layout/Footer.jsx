import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";
import Image from "next/image";

const WhatsAppIcon = ({ className }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.149-.67-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.172-.008-.369-.01-.567-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.001 0C5.37 0 .001 5.368.001 11.999c0 2.115.553 4.18 1.606 5.997L0 24l6.195-1.625a11.78 11.78 0 005.806 1.559h.005c6.63 0 11.999-5.368 12.001-12.001a11.78 11.78 0 00-3.483-8.336z" />
  </svg>
)

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
              <Link href="/">
                <Image src={logo} alt="Khadija Overseas" className="h-14 w-auto object-contain" />
              </Link>
            </div>
            <p className="text-primary-foreground/70 text-md leading-relaxed mb-5">
              Premium quality dehydrated onion and garlic products, exported worldwide from India.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, href: "https://www.facebook.com/share/18ZVbBxn91/" },
                { Icon: Instagram, href: "https://www.instagram.com/khadija_exim" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/rahil-sherasiya-ba4239292" },
                { Icon: WhatsAppIcon, href: "https://wa.me/918128695587" },
              ].map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all"
                >
                  <social.Icon className="h-5 w-5" />
                </Link>
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
                { to: "/contact", label: "Contact Us" },
              ].map((l) => (
                <li key={l.to}>
                  <Link href={l.to} className="text-primary-foreground/70 hover:text-accent transition-colors text-lg">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-accent text-lg mb-5">Our Products</h4>
            <ul className="space-y-2.5 text-sm">
              {footerProducts.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-primary-foreground/70 hover:text-accent transition-colors text-lg">{p.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-accent text-lg mb-5">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">Wankaner, Morbi,<br /> Gujarat – 363 621, India</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <Link href="tel:+916351403200" className="text-primary-foreground/80 hover:text-accent">+91 81286 95587</Link>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <Link href="mailto:info@khadijaoverseas.com" className="text-primary-foreground/80 hover:text-accent">info@khadijaoverseas.com</Link>
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
