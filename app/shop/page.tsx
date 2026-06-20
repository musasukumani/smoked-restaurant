import type { Metadata } from "next";
import { Breadcrumb } from "@/components/breadcrumb";
import { ShopGrid } from "@/components/shop-grid";

export const metadata: Metadata = { title: "Shop" };
export default function ShopPage() { return <><Breadcrumb title="Shop"/><ShopGrid/></>; }
