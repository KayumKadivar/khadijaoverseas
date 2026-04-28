"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Send, Clock } from "lucide-react";
import { toast } from "sonner";
import { FadeUp } from "@/components/Reveal";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you within 24 hours.");
    setForm({ name: "", email: "", subject: "", message: "" });
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
                { i: MapPin, t: "Address", v: "Survey No. 165, Plot No. 2,\nJamnagar Road, Wankaner,\nRajkot, Gujarat – 363 621, India" },
                { i: Phone, t: "Phone", v: "+91 63514 03200" },
                { i: Mail, t: "Email", v: "info@khadijaoverseas.com" },
                { i: Clock, t: "Working Hours", v: "Mon - Sat: 9:00 AM - 7:00 PM" },
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
          </FadeUp>

          <FadeUp delay={0.15} className="lg:col-span-3">
            <form onSubmit={onSubmit} className="bg-card rounded-2xl p-6 md:p-8 shadow-elegant border border-border/50">
              <div className="grid sm:grid-cols-2 gap-4">
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your Name" className="px-4 py-3 rounded-lg bg-secondary border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition" />
                <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Your Email" className="px-4 py-3 rounded-lg bg-secondary border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition" />
              </div>
              <input required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="Subject" className="mt-4 w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition" />
              <textarea required rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Your Message" className="mt-4 w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition resize-none" />
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
              title="Khadija Overseas Location"
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
