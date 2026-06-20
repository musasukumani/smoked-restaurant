import Link from "next/link";

export function Breadcrumb({ title }: { title: string }) {
  return (
    <section className="breadcrumb-hero" aria-labelledby="page-title">
      <div className="breadcrumb-inner">
        <h1 id="page-title">{title}</h1>
        <div><Link href="/">Home page</Link><span aria-hidden="true">›</span><b>{title}</b></div>
      </div>
    </section>
  );
}
