import type { Metadata } from "next";
import { Breadcrumb } from "@/components/breadcrumb";
import { ShopGrid } from "@/components/shop-grid";

export const metadata: Metadata = { title: "Menu", description: "Explore the Smoked 1804 menu, including burgers, grilled dishes, chicken, pizza, pasta and sides in Orlando West, Soweto.", alternates: { canonical: "/shop" } };
export default function ShopPage() { return <><Breadcrumb title="Menu"/><section className="page-intro shell"><p className="section-kicker">Food at Smoked 1804</p><h2>Grub for every kind of appetite</h2><p>Browse crowd-ready burgers, grill plates, chicken, pizza, pasta and sides. Prices and availability may change, so contact us for the latest menu before you visit.</p></section><ShopGrid/></>; }
