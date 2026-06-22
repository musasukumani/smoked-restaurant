import type { Metadata } from "next";
import { Breadcrumb } from "@/components/breadcrumb";
import { GalleryGrid } from "@/components/gallery-grid";

export const metadata: Metadata = { title: "Restaurant Gallery", description: "See the food, atmosphere and social energy at Smoked 1804, a restaurant and events spot in Orlando West, Soweto.", alternates: { canonical: "/gallery" } };
export default function GalleryPage() { return <><Breadcrumb title="Gallery"/><section className="page-intro shell"><p className="section-kicker">Inside Smoked 1804</p><h2>A taste of the Orlando West vibe</h2><p>See the plates, people and atmosphere that make Smoked 1804 a Soweto destination for food and good times.</p></section><GalleryGrid/></>; }
