import type { Metadata } from "next";
import "./globals.css";
import { SiteChrome } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: { default: "Smoked | Beats, Grubs, Vibes", template: "%s | Smoked" },
  description: "Big smoke, bold flavor, good music, and late-night energy.",
  icons: { icon: "/assets/smoked-logo-cropped.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
