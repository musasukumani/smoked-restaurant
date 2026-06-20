import Link from "next/link";
export default function NotFound() { return <section className="not-found"><span>404</span><h1>This plate is empty.</h1><p>The page you ordered is not on the menu.</p><Link href="/" className="red-button">Back home</Link></section>; }
