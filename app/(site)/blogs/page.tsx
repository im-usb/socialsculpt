import Link from "next/link";
import Image from "next/image";
import { getPosts } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";
import { isSanityConfigured } from "@/sanity/env";

export const metadata = { title: "Blogs | SocialSculpt" };
export const revalidate = 60;

export default async function BlogsPage() {
  const posts = await getPosts();

  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-widest text-coral mb-3">
        Blogs
      </p>
      <h1 className="font-display text-4xl md:text-6xl mb-12">
        Notes on scroll-stopping content
      </h1>

      {!isSanityConfigured && (
        <div className="border-2 border-dashed border-ink/30 rounded-2xl p-8 text-sm text-ink/60">
          Blogs are powered by Sanity and aren&apos;t connected yet. Add your
          project credentials to <code>.env.local</code>, then publish a post
          from <Link href="/studio" className="underline">/studio</Link> — it
          will show up here automatically.
        </div>
      )}

      {isSanityConfigured && posts.length === 0 && (
        <p className="text-sm text-ink/60">
          No posts published yet — add one at{" "}
          <Link href="/studio" className="underline">/studio</Link>.
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((p) => (
          <Link
            key={p._id}
            href={`/blogs/${p.slug}`}
            className="border-2 border-ink rounded-2xl overflow-hidden flex flex-col hover:-translate-y-1 transition-transform"
          >
            {p.coverImage && (
              <div className="relative aspect-video w-full">
                <Image
                  src={urlForImage(p.coverImage).width(640).height(360).url()}
                  alt={p.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="p-5">
              <h2 className="font-display text-xl leading-tight">{p.title}</h2>
              {p.excerpt && (
                <p className="mt-2 text-sm text-ink/60 line-clamp-3">
                  {p.excerpt}
                </p>
              )}
              <p className="mt-3 text-xs text-ink/40">
                {new Date(p.publishedAt).toLocaleDateString()}
                {p.author ? ` · ${p.author}` : ""}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
