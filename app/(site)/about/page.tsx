export const metadata = { title: "About Us | SocialSculpt" };

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-widest text-coral mb-3">
        About Us
      </p>
      <h1 className="font-display text-4xl md:text-6xl mb-8 max-w-2xl">
        We&apos;re a small team obsessed with why people stop scrolling.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <p className="text-ink/70">
          SocialSculpt was built on a simple idea: most brand content fails not
          because the product is weak, but because the content ignores how people
          actually behave on their feeds. We combine creator-led production with
          scroll psychology and performance data to build content that earns
          attention on purpose, not by accident.
        </p>
        <p className="text-ink/70">
          We work end-to-end — sourcing creators, scripting hooks, editing,
          running paid amplification, and reporting on what actually moved the
          needle. No vanity metrics, no one-size-fits-all templates.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Strategy first", desc: "Every campaign starts with research into your audience and competitors, not a content calendar template." },
          { title: "Built for scroll", desc: "We design hooks and edits around how people actually watch — the first 3 seconds decide everything." },
          { title: "Numbers, not vibes", desc: "We report on reach, engagement, and conversion — and adjust fast when something isn't working." },
        ].map((v) => (
          <div key={v.title} className="border-2 border-ink rounded-2xl p-6">
            <h3 className="font-display text-2xl mb-2">{v.title}</h3>
            <p className="text-sm text-ink/70">{v.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
