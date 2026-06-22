"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, ShoppingBasket, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const links = [{ href: "/", label: "Home" }, { href: "/shop", label: "Menu" }, { href: "/gallery", label: "Gallery" }, { href: "/contact", label: "Visit us" }];

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
        <Link href="/" className="brand" aria-label="Smoked 1804 home"><Image src="/assets/smoked-logo-cropped.png" alt="Smoked 1804 - Beats, Grub, Vibes" width={268} height={132} priority /></Link>
        <nav aria-label="Main navigation">{links.map(link => <Link key={link.href} className={pathname === link.href ? "active" : ""} href={link.href}>{link.label}</Link>)}</nav>
        <div className="nav-actions"><button className="cart-button" aria-label={`Open cart with ${count} items`} onClick={() => setCart(true)}><ShoppingBasket /><span>{count}</span></button><Link href="/contact" className="red-button">Plan your visit</Link><button className="menu-button" aria-label="Open menu" onClick={() => setMenu(true)}><Menu /></button></div>
      </div>
    </header>
    <main id="main-content">{children}</main>
    <footer className="footer"><div className="shell footer-grid"><div><Image src="/assets/smoked-logo-cropped.png" alt="Smoked 1804" width={240} height={118} /><p>Smoked Orlando West. Beats. Grub. Vibes. Proudly Soweto.</p><p><strong>4.3 on Google reviews</strong></p></div><div><h3>Explore</h3>{links.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}</div><div><h3>Find us</h3><p>63 Nkabinoe St, Orlando West, Johannesburg, 1804</p><a href="tel:+27694622422">069 462 2422</a></div><div><h3>Stay connected</h3><p>Follow us for current opening hours, reservations and the latest events.</p><a href="https://www.instagram.com/smoked1804/" target="_blank" rel="noreferrer">Instagram</a><a href="https://www.facebook.com/profile.php?id=61561468379801" target="_blank" rel="noreferrer">Facebook</a><a href="https://www.tiktok.com/@smoked1804" target="_blank" rel="noreferrer">TikTok</a></div></div><div className="copyright"><div className="shell">&copy; 2026 Smoked 1804. All rights reserved.<span><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></span></div></div></footer>
    <AnimatePresence>{menu && <><motion.button aria-label="Close menu" className="drawer-scrim" onClick={() => setMenu(false)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}/><motion.aside className="drawer menu-drawer" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ ease: [.76,0,.24,1], duration: .5 }}><button aria-label="Close navigation" className="drawer-close" onClick={() => setMenu(false)}><X /></button><Image src="/assets/smoked-logo-cropped.png" alt="Smoked" width={220} height={108}/>{links.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}</motion.aside></>}</AnimatePresence>
    <AnimatePresence>{cart && <><motion.button aria-label="Close cart" className="drawer-scrim" onClick={() => setCart(false)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}/><motion.aside className="drawer cart-drawer" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}><button aria-label="Close cart drawer" className="drawer-close" onClick={() => setCart(false)}><X /></button><h2>Your picks</h2>{count ? <><p>{count} menu item{count > 1 ? "s" : ""} selected. Contact Smoked 1804 to confirm availability and place your order.</p><Link className="red-button" href="/contact">Contact Smoked 1804</Link></> : <div className="empty-cart"><ShoppingBasket /><p>You have not selected anything yet.</p><Link href="/shop">Explore the menu</Link></div>}</motion.aside></>}</AnimatePresence>
  </>;
}
