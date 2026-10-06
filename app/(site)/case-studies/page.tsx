import Link from "next/link";
import { getCaseStudies } from "@/sanity/lib/queries";
import { isSanityConfigured } from "@/sanity/env";

export const metadata = { title: "Case Studies | SocialSculpt" };
export const revalidate = 60;

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies();

  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-widest text-coral mb-3">
        Case Studies
      </p>
      <h1 className="font-display text-4xl md:text-6xl mb-4">
        Success stories that speak
      </h1>
      {!isSanityConfigured && (
        <p className="text-xs text-ink/40 mb-8">
          Showing placeholder content — connect Sanity to manage these from{" "}
          <Link href="/studio" className="underline">/studio</Link>.
        </p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {caseStudies.map((c) => (
          <Link
            key={c._id}
            href={`/case-studies/${c.slug}`}
            className="border-2 border-ink rounded-2xl p-8 flex flex-col justify-between hover:-translate-y-1 transition-transform"
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
                <p className="font-display text-3xl text-coral">{c.stat1Value}</p>
                <p className="text-xs text-ink/60">{c.stat1Label}</p>
              </div>
              <div>
                <p className="font-display text-3xl text-coral">{c.stat2Value}</p>
                <p className="text-xs text-ink/60">{c.stat2Label}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
