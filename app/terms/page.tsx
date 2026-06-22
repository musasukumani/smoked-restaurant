import type { Metadata } from "next";

export const metadata: Metadata = { title: "Website Terms", description: "Read the Smoked 1804 website terms.", robots: { index: false, follow: true }, alternates: { canonical: "/terms" } };
export default function TermsPage(){return <article className="legal shell"><h1>Website terms</h1><p>Menu items, prices, availability, opening hours and event schedules may change. Call Smoked 1804 or check @smoked1804 on Instagram for current details before travelling.</p><p>Images and website content are provided for general information. Selecting an item on this website does not complete an order or guarantee availability.</p></article>}
