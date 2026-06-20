import type { Metadata } from "next";
import { Breadcrumb } from "@/components/breadcrumb";
import { GalleryGrid } from "@/components/gallery-grid";

export const metadata: Metadata = { title: "Gallery" };
export default function GalleryPage() { return <><Breadcrumb title="Gallery"/><GalleryGrid/></>; }
