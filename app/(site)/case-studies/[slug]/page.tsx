import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getCaseStudyBySlug } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";

export const revalidate = 60;

export default async function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const study = await getCaseStudyBySlug(params.slug);
  if (!study) return notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <span className="text-xs font-bold uppercase tracking-wide text-coral">
        {study.type}
      </span>
      <h1 className="font-display text-4xl md:text-6xl mt-2 mb-2">
        {study.brand}
      </h1>
      <p className="text-sm text-ink/50 mb-8">{study.category}</p>

      {study.coverImage && (
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-10">
          <Image
            src={urlForImage(study.coverImage).width(1200).height(675).url()}
            alt={study.brand}
            fill
            className="object-cover"
          />
        </div>
      )}

      <div className="flex gap-10 mb-10">
        <div>
          <p className="font-display text-3xl text-coral">{study.stat1Value}</p>
          <p className="text-xs text-ink/60">{study.stat1Label}</p>
        </div>
        <div>
          <p className="font-display text-3xl text-coral">{study.stat2Value}</p>
          <p className="text-xs text-ink/60">{study.stat2Label}</p>
        </div>
      </div>

      <p className="text-ink/70 mb-8">{study.summary}</p>

      {study.body && (
        <div className="prose prose-neutral max-w-none prose-headings:font-display">
          <PortableText value={study.body} />
        </div>
      )}
    </main>
  );
}
