"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, X } from "lucide-react";
import { useState } from "react";
import { galleryImages } from "@/lib/data";

export function GalleryGrid() {
  const [active, setActive] = useState<string | null>(null);
  return <>
    <section className="gallery-grid shell">{galleryImages.map((file, index) => <motion.button key={file} className={`gallery-item item-${index+1}`} onClick={() => setActive(file)} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (index%2)*.12 }}><Image src={`/assets/img/gallery/${file}`} alt={`Smoked kitchen and dining gallery view ${index+1}`} fill sizes="(max-width: 768px) 100vw, 50vw"/><span><Plus/>View image</span></motion.button>)}</section>
    <AnimatePresence>{active && <motion.div className="lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActive(null)}><button aria-label="Close image"><X/></button><motion.div initial={{ scale: .9 }} animate={{ scale: 1 }} onClick={e => e.stopPropagation()}><Image src={`/assets/img/gallery/${active}`} alt="Expanded Smoked gallery view" width={1200} height={800}/></motion.div></motion.div>}</AnimatePresence>
  </>;
}
