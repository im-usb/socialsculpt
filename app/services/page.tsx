import { services } from "@/lib/content";
import Link from "next/link";

export const metadata = { title: "Services | SocialSculpt" };

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-widest text-coral mb-3">
        Our Services
      </p>
      <h1 className="font-display text-4xl md:text-6xl mb-4">
        Services that drive real growth
      </h1>
      <p className="max-w-xl text-ink/70 mb-16">
        We don&apos;t chase empty views — we engineer brand love. Every asset we
        deliver has one purpose: turning passive scrollers into loyal customers.
      </p>

      <div className="space-y-16">
        {services.map((s, i) => (
          <div
            key={s.id}
            id={s.id}
            className="scroll-mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 border-t-2 border-ink pt-10"
          >
            <div>
              <span className="font-display text-6xl text-coral">
                0{i + 1}
              </span>
              <h2 className="font-display text-3xl mt-2">{s.title}</h2>
              <span className="text-xs font-bold uppercase tracking-wide text-ink/50">
                {s.tag}
              </span>
            </div>
            <div className="md:col-span-2">
              <p className="text-ink/70 mb-6">{s.blurb}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm">
                    <span className="text-lime">●</span> {p}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-block mt-6 text-sm font-bold border-b-2 border-coral"
              >
                Talk to us about this →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
