import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";

export const revalidate = 60;

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);
  if (!post) return notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-xs text-ink/40 mb-3">
        {new Date(post.publishedAt).toLocaleDateString()}
        {post.author ? ` · ${post.author}` : ""}
      </p>
      <h1 className="font-display text-4xl md:text-6xl mb-8">{post.title}</h1>
      {post.coverImage && (
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-10">
          <Image
            src={urlForImage(post.coverImage).width(1200).height(675).url()}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="prose prose-neutral max-w-none prose-headings:font-display">
        {post.body && <PortableText value={post.body} />}
      </div>
    </main>
  );
}
