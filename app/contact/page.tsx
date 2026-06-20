import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = { title: "Contact" };
export default function ContactPage() { return <><Breadcrumb title="Contact us"/><section className="contact-cards shell"><Reveal><article><MapPin/><h2>Our address</h2><p>4518 Firehouse Lane<br/>Los Angeles, CA 90013</p></article></Reveal><Reveal delay={.1}><article className="green-card"><Phone/><h2>Phone number</h2><a href="tel:+13235550198">+1 (323) 555-0198</a><a href="tel:+13235550144">+1 (323) 555-0144</a></article></Reveal><Reveal delay={.2}><article><Mail/><h2>Email address</h2><a href="mailto:hello@smokedla.com">hello@smokedla.com</a><a href="mailto:events@smokedla.com">events@smokedla.com</a></article></Reveal></section><section className="contact-main shell"><Reveal><div className="contact-intro"><p className="section-kicker">Talk to us</p><h2>Get in touch</h2><p>Planning a night out, private event, or catering order? Drop us a line and our crew will get back to you.</p></div></Reveal><Reveal delay={.1}><ContactForm/></Reveal></section><section className="map-panel"><div><MapPin/><strong>Smoked LA</strong><span>4518 Firehouse Lane</span></div></section></>; }
