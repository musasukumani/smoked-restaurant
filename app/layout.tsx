import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteChrome } from "@/components/site-chrome";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Smoked 1804 | Restaurant in Orlando West, Soweto", template: "%s | Smoked 1804" },
  description: "Discover Smoked 1804, also known as Smoked Orlando West: bold food, music and social events at this Smoked Soweto destination.",
  keywords: ["smoked orlando west", "Smoked 1804", "Smoked Soweto", "restaurant in Orlando West", "Soweto restaurant", "Johannesburg restaurant", "food and events Soweto"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    siteName: "Smoked 1804",
    title: "Smoked 1804 | Beats. Grub. Vibes.",
    description: "Discover Smoked Orlando West: bold food, music and social events at Smoked 1804 in Soweto.",
    images: [{ url: "/assets/hero-burger.jpg", width: 736, height: 1104, alt: "A flame-grilled burger at Smoked 1804" }],
  },
  twitter: { card: "summary_large_image", title: "Smoked 1804 | Beats. Grub. Vibes.", description: "Discover Smoked Orlando West, a food and social destination in Soweto.", images: ["/assets/hero-burger.jpg"] },
  icons: { icon: "/assets/smoked-logo-cropped.png" },
};

export const viewport: Viewport = { themeColor: "#080808" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Smoked 1804",
    slogan: "Beats. Grub. Vibes.",
    url: siteUrl,
    image: `${siteUrl}/assets/hero-burger.jpg`,
    hasMenu: `${siteUrl}/shop`,
    telephone: "+27694622422",
    address: { "@type": "PostalAddress", streetAddress: "63 Nkabinoe St", addressLocality: "Orlando West", addressRegion: "Gauteng", postalCode: "1804", addressCountry: "ZA" },
    sameAs: ["https://www.instagram.com/smoked1804/", "https://www.facebook.com/profile.php?id=61561468379801", "https://www.tiktok.com/@smoked1804"],
  };
  return (
    <html lang="en">
      <body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness).replace(/</g, "\\u003c") }} />
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
