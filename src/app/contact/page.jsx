"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Send, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
import { toast } from "sonner";
import { FadeUp } from "@/components/Reveal";
import Link from "next/link";

const WhatsAppIcon = ({ className }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.149-.67-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.172-.008-.369-.01-.567-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.001 0C5.37 0 .001 5.368.001 11.999c0 2.115.553 4.18 1.606 5.997L0 24l6.195-1.625a11.78 11.78 0 005.806 1.559h.005c6.63 0 11.999-5.368 12.001-12.001a11.78 11.78 0 00-3.483-8.336z" />
  </svg>
)

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const onSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Sending your message...");

    try {
      const formData = new FormData(e.target);
      formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thank you! We'll get back to you within 24 hours.", { id: toastId });
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Something went wrong. Please try again later.", { id: toastId });
      }
    } catch (error) {
      toast.error("Connection error. Please check your internet.", { id: toastId });
    }
  };

  return (
    <>
      <section className="pt-22 pb-16 text-center">
        <div className="container mx-auto px-4">
          <FadeUp>
            <span className="text-xs font-semibold tracking-[0.3em] text-accent uppercase">Contact Us</span>
            <h1 className="mt-6 font-serif text-4xl md:text-6xl text-primary font-bold">Get In Touch</h1>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Have a question or want to request a quote? Send us a message and we'll get back to you.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-4 grid lg:grid-cols-5 gap-10">
          <FadeUp className="lg:col-span-2">
            <h3 className="font-serif text-2xl text-primary font-bold">Contact Information</h3>
            <p className="mt-2 text-muted-foreground text-sm">We're here to help with bulk orders, samples and partnership inquiries.</p>

            <ul className="mt-8 space-y-6">
              {[
                { i: MapPin, t: "Address", v: "Wankaner,\nMorbi, Gujarat – 363 621, India" },
                { i: Phone, t: "Phone", v: "+91 81286 95587" },
                { i: Mail, t: "Email", v: "info@khadijaexim.com" },
              ].map((c) => (
                <li key={c.t} className="flex gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-dark flex items-center justify-center shrink-0">
                    <c.i className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">{c.t}</div>
                    <div className="text-foreground whitespace-pre-line mt-1">{c.v}</div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {[
                  { Icon: Facebook, href: "https://www.facebook.com/share/18ZVbBxn91/", color: "hover:text-[#1877F2]" },
                  { Icon: Instagram, href: "https://www.instagram.com/khadija_exim", color: "hover:text-[#E4405F]" },
                  { Icon: Linkedin, href: "https://www.linkedin.com/in/rahil-sherasiya-ba4239292", color: "hover:text-[#0A66C2]" },
                  { Icon: WhatsAppIcon, href: "https://wa.me/918128695587", color: "hover:text-[#25D366]" },
                ].map((social, i) => (
                  <Link 
                    key={i} 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`h-11 w-11 rounded-full bg-secondary border border-border flex items-center justify-center text-primary/60 transition-all ${social.color} hover:bg-white hover:shadow-soft hover:scale-110`}
                  >
                    <social.Icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.15} className="lg:col-span-3">
            <form onSubmit={onSubmit} className="bg-card rounded-2xl p-6 md:p-8 shadow-elegant border border-border/50">
              <div className="grid sm:grid-cols-2 gap-4">
                <input name="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your Name" className="px-4 py-3 rounded-lg bg-secondary border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition" />
                <input name="email" required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Your Email" className="px-4 py-3 rounded-lg bg-secondary border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition" />
              </div>
              <input name="subject" required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="Subject" className="mt-4 w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition" />
              <textarea name="message" required rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Your Message" className="mt-4 w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition resize-none" />
              <button type="submit" className="mt-5 inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-lg text-sm font-semibold tracking-wider uppercase hover:bg-primary-glow shadow-soft transition-all">
                <Send className="h-4 w-4" /> Send Message
              </button>
            </form>
          </FadeUp>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl overflow-hidden shadow-elegant border border-border">
            <iframe
              title="Khadija Exim Location"
              src="https://www.google.com/maps?q=Wankaner,Rajkot,Gujarat,India&output=embed"
              className="w-full h-[400px] border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
