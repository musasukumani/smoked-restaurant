import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Flame, Music2, Truck } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/data";

export default function HomePage() {
  return <>
    <section className="home-hero">
      <div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/>
      <div className="shell hero-inner"><div className="hero-copy"><p className="eyebrow">Low, slow, and loud</p><h1>Smoke hits<br/><span>different.</span></h1><p className="hero-text">Pit-fired comfort food, stacked burgers, and late-night beats made for pulling up hungry.</p><Link href="/shop" className="green-button"><Truck/>Order now</Link></div><div className="hero-food"><Image className="hero-burger" src="/assets/hero-burger.jpg" alt="Double cheeseburger grilling over open flames" width={736} height={1104} priority/><span className="hero-word">Smoked</span></div></div>
    </section>
    <section className="feature-strip"><div className="shell"><div><Flame/><p><b>Real smoke</b>12-hour flavor</p></div><div><Music2/><p><b>Live energy</b>Beats every weekend</p></div><div><Truck/><p><b>Fast delivery</b>Hot at your door</p></div></div></section>
    <section className="section popular"><Reveal><p className="section-kicker">Popular dishes</p><h2 className="section-title">Fire favorites</h2></Reveal><div className="shell product-grid home-products">{products.slice(0,4).map((product,index) => <Reveal key={product.name} delay={index*.08}><ProductCard product={product}/></Reveal>)}</div><Link className="outline-button" href="/shop">View full menu <ArrowRight/></Link></section>
    <section className="about-section"><div className="shell about-grid"><Reveal className="about-photo"><div className="photo-frame"><Image src="/assets/img/about/burger.png" alt="Smoked signature burger" width={650} height={650}/></div><span>Since<br/><b>2026</b></span></Reveal><Reveal className="about-copy"><p className="section-kicker">The Smoked story</p><h2>Built around fire.<br/>Soundtracked by the city.</h2><p>We bring proper smokehouse technique into a room that feels more like your favorite night out. The menu runs deep, the speakers stay warm, and nobody leaves hungry.</p><ul><li>Fresh cuts, seasoned in-house</li><li>Low-and-slow smoking every day</li><li>Full bar and weekend DJ sets</li></ul><Link href="/gallery" className="red-button">See the vibe</Link></Reveal></div></section>
    <section className="cta-banner"><div className="shell"><p>Friday night at Smoked</p><h2>Big plates.<br/>Bigger energy.</h2><Link href="/contact" className="yellow-button">Book your table <ArrowRight/></Link></div></section>
  </>;
}
