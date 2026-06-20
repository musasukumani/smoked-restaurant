"use client";

import Image from "next/image";
import { ShoppingBasket, Star } from "lucide-react";
import type { products } from "@/lib/data";

type Product = (typeof products)[number];

const rand = new Intl.NumberFormat("en-ZA", {
  style: "currency",
  currency: "ZAR",
  minimumFractionDigits: 2,
});

export function ProductCard({ product }: { product: Product }) {
  const add = () => window.dispatchEvent(new Event("smoked:add"));
  return <article className="product-card">
    <div className="product-image"><span>Hot</span><Image src={product.image} alt={product.name} width={430} height={350} /></div>
    <div className="stars" aria-label="5 out of 5 stars">{[1,2,3,4,5].map(n => <Star key={n} fill="currentColor" />)}</div>
    <p>{product.category}</p><h3>{product.name}</h3>
    <div className="product-bottom"><strong>{rand.format(product.price)}</strong><button onClick={add} aria-label={`Add ${product.name} to cart`}><ShoppingBasket /></button></div>
  </article>;
}
