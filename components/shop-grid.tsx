"use client";

import { useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { products } from "@/lib/data";
import { ProductCard } from "./product-card";

export function ShopGrid() {
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");
  const categories = ["All", ...Array.from(new Set(products.map(item => item.category)))];
  const visible = useMemo(() => {
    const list = category === "All" ? [...products] : products.filter(item => item.category === category);
    if (sort === "low") list.sort((a,b) => a.price-b.price);
    if (sort === "high") list.sort((a,b) => b.price-a.price);
    return list;
  }, [category, sort]);
  return <section className="shop-section shell" aria-label="Smoked 1804 food menu">
    <aside className="shop-sidebar"><h2>Categories</h2>{categories.map(item => <button key={item} className={category === item ? "selected" : ""} onClick={() => setCategory(item)}>{item}<span>{item === "All" ? products.length : products.filter(p => p.category === item).length}</span></button>)}<div className="delivery-promo"><p>Planning a visit?</p><h3>Call 069 462 2422</h3></div></aside>
    <div className="shop-main"><div className="shop-toolbar"><p>Showing <b>{visible.length}</b> menu choices</p><label><SlidersHorizontal/><span className="sr-only">Sort menu</span><select value={sort} onChange={e => setSort(e.target.value)}><option value="featured">Featured first</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option></select></label></div><div className="product-grid">{visible.map(product => <ProductCard key={product.name} product={product}/>)}</div></div>
  </section>;
}
