import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Flame, Music2, Truck } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/data";

export const metadata = { alternates: { canonical: "/" } };

export default function HomePage() {
  return <>
    <section className="home-hero">
      <div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/>
      <div className="shell hero-inner"><div className="hero-copy"><p className="eyebrow">Smoked Orlando West, Soweto</p><h1>Smoked <br/><span>1804</span></h1><p className="hero-text">Beats. Grub. Vibes. Bold plates, good music and the kind of local energy that turns a meal into a day out in Soweto.</p><Link href="/shop" className="green-button"><Truck/>Explore the menu</Link></div><div className="hero-food"><Image className="hero-burger" src="/assets/hero-burger.jpg" alt="Flame-grilled burger served at Smoked 1804 in Soweto" width={736} height={1104} priority/><span className="hero-word">Smoked</span></div></div>
    </section>
    <section className="feature-strip"><div className="shell"><div><Flame/><p><b>Bold grub</b>Food worth pulling up for</p></div><div><Music2/><p><b>Good energy</b>Music, games and Sundays</p></div><div><Truck/><p><b>In Soweto</b>63 Nkabinoe St</p></div></div></section>
    <section className="section popular"><Reveal><p className="section-kicker">Smoked 1804 menu</p><h2 className="section-title">Come hungry</h2><p className="section-intro">From stacked burgers to generous grill plates, explore food made for sharing around the table.</p></Reveal><div className="shell product-grid home-products">{products.slice(0,4).map((product,index) => <Reveal key={product.name} delay={index*.08}><ProductCard product={product}/></Reveal>)}</div><Link className="outline-button" href="/shop">Explore the menu <ArrowRight/></Link></section>
    <section className="about-section"><div className="shell about-grid"><Reveal className="about-photo"><div className="photo-frame"><Image src="/assets/img/about/burger.png" alt="Signature burger from Smoked 1804" width={650} height={650}/></div><span>Welcome<br/><b>1804</b></span></Reveal><Reveal className="about-copy"><p className="section-kicker">More than a meal</p><h2>Smoked Soweto,<br/>Orlando West energy.</h2><p>Smoked 1804 is a neighbourhood restaurant and social spot in the heart of Orlando West. Come for the grub, stay for the people, the music and a calendar that keeps Soweto moving.</p><ul><li>Bold food in a relaxed setting</li><li>Sunday sessions and games nights</li><li>Community hikes and social events</li></ul><Link href="/gallery" className="red-button">See Smoked 1804</Link></Reveal></div></section>
    <section className="cta-banner"><div className="shell"><p>Your table in Orlando West</p><h2>Bring your people.<br/>We&apos;ll bring the vibe.</h2><a href="https://www.instagram.com/smoked1804/" target="_blank" rel="noreferrer" className="yellow-button">Reserve on Instagram <ArrowRight/></a></div></section>
  </>;
}
