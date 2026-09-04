import { caseStudies } from "@/lib/content";

export const metadata = { title: "Case Studies | SocialSculpt" };

export default function CaseStudiesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-widest text-coral mb-3">
        Case Studies
      </p>
      <h1 className="font-display text-4xl md:text-6xl mb-12">
        Success stories that speak
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {caseStudies.map((c) => (
          <div
            key={c.slug}
            className="border-2 border-ink rounded-2xl p-8 flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-wide text-coral">
                {c.type}
              </span>
              <h2 className="font-display text-3xl mt-2">{c.brand}</h2>
              <p className="text-xs text-ink/50 mb-4">{c.category}</p>
              <p className="text-sm text-ink/70">{c.summary}</p>
            </div>
            <div className="mt-8 flex gap-10">
              <div>
                <p className="font-display text-3xl text-coral">{c.stat1.value}</p>
                <p className="text-xs text-ink/60">{c.stat1.label}</p>
              </div>
              <div>
                <p className="font-display text-3xl text-coral">{c.stat2.value}</p>
                <p className="text-xs text-ink/60">{c.stat2.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
