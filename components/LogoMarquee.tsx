import { brandTags } from "@/lib/content";

export default function LogoMarquee() {
  const row = [...brandTags, ...brandTags];
  return (
    <div className="overflow-hidden border-y-2 border-ink bg-ink py-5">
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
        {row.map((name, i) => (
          <span
            key={i}
            className="font-display text-2xl md:text-3xl text-paper/80 tracking-wide"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
