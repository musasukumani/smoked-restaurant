"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, ShoppingBasket, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const links = [{ href: "/", label: "Home page" }, { href: "/shop", label: "Shop" }, { href: "/gallery", label: "Gallery" }, { href: "/contact", label: "Contact" }];

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loaded, setLoaded] = useState(false);
  const [menu, setMenu] = useState(false);
  const [cart, setCart] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => { const timer = setTimeout(() => setLoaded(true), 1050); return () => clearTimeout(timer); }, []);
  useEffect(() => { setMenu(false); }, [pathname]);
  useEffect(() => {
    const add = () => setCount((value) => value + 1);
    window.addEventListener("smoked:add", add);
    return () => window.removeEventListener("smoked:add", add);
  }, []);

  return <>
    <AnimatePresence>{!loaded && <motion.div className="loader" exit={{ y: "-100%" }} transition={{ duration: .7, ease: [.76, 0, .24, 1] }}>
      <motion.div initial={{ scale: .78, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: .45 }}><Image src="/assets/smoked-logo-cropped.png" alt="Smoked" width={430} height={211} priority /></motion.div>
      <span className="loader-line"><i /></span>
    </motion.div>}</AnimatePresence>
    <header className="site-header">
      <div className="shell nav-row">
        <Link href="/" className="brand" aria-label="Smoked home"><Image src="/assets/smoked-logo-cropped.png" alt="Smoked - Beats, Grubs, Vibes" width={268} height={132} priority /></Link>
        <nav aria-label="Main navigation">{links.map(link => <Link key={link.href} className={pathname === link.href ? "active" : ""} href={link.href}>{link.label}</Link>)}</nav>
        <div className="nav-actions"><button className="cart-button" aria-label={`Open cart with ${count} items`} onClick={() => setCart(true)}><ShoppingBasket /><span>{count}</span></button><Link href="/contact" className="red-button">Contact us</Link><button className="menu-button" aria-label="Open menu" onClick={() => setMenu(true)}><Menu /></button></div>
      </div>
    </header>
    <main id="main-content">{children}</main>
    <footer className="footer"><div className="shell footer-grid"><div><Image src="/assets/smoked-logo-cropped.png" alt="Smoked" width={240} height={118} /><p>Smoke on the plate. Rhythm in the room. Good nights start here.</p></div><div><h3>Quick links</h3>{links.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}</div><div><h3>Find us</h3><p>4518 Firehouse Lane<br/>Los Angeles, CA 90013</p><a href="tel:+13235550198">+1 (323) 555-0198</a></div><div><h3>Opening hours</h3><p>Mon - Thu: 11am - 11pm<br/>Fri - Sun: 11am - 2am</p></div></div><div className="copyright"><div className="shell">© 2026 Smoked. All rights reserved.<span><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></span></div></div></footer>
    <AnimatePresence>{menu && <><motion.button aria-label="Close menu" className="drawer-scrim" onClick={() => setMenu(false)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}/><motion.aside className="drawer menu-drawer" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ ease: [.76,0,.24,1], duration: .5 }}><button aria-label="Close navigation" className="drawer-close" onClick={() => setMenu(false)}><X /></button><Image src="/assets/smoked-logo-cropped.png" alt="Smoked" width={220} height={108}/>{links.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}</motion.aside></>}</AnimatePresence>
    <AnimatePresence>{cart && <><motion.button aria-label="Close cart" className="drawer-scrim" onClick={() => setCart(false)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}/><motion.aside className="drawer cart-drawer" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}><button aria-label="Close cart drawer" className="drawer-close" onClick={() => setCart(false)}><X /></button><h2>Your order</h2>{count ? <><p>{count} delicious item{count > 1 ? "s" : ""} ready to go.</p><Link className="red-button" href="/contact">Checkout</Link></> : <div className="empty-cart"><ShoppingBasket /><p>Your basket is empty.</p><Link href="/shop">Browse the menu</Link></div>}</motion.aside></>}</AnimatePresence>
  </>;
}
