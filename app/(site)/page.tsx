"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import StatsCounter from "@/components/StatsCounter";
import LogoMarquee from "@/components/LogoMarquee";
import PlatformBadges from "@/components/PlatformBadges";
import FloatingCard from "@/components/FloatingCard";
import LogoStack from "@/components/LogoStack";
import Reveal from "@/components/Reveal";
import MotionLink from "@/components/MotionLink";
import { ArrowUpRight } from "lucide-react";
import { services, myths, caseStudies, testimonials } from "@/lib/content";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative grid-guides overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pt-14 pb-16 md:pt-20 md:pb-24">
          <PlatformBadges />

          <div className="relative mt-10 grid grid-cols-1 lg:grid-cols-[1fr_2.2fr_1fr] items-center gap-6">
            {/* LEFT FLOATING CARDS */}
            <div className="hidden lg:flex flex-col items-center gap-6">
              <FloatingCard
                variant="reel"
                size="lg"
                gradient="linear-gradient(160deg,#2d2d2d,#6b6b6b)"
                rotate={-6}
                glow="lime"
                floatDelay={0}
              />
              <div className="flex gap-4">
                <FloatingCard
                  variant="quote"
                  size="md"
                  gradient="linear-gradient(160deg,#e9d76a,#b8c93f)"
                  caption="Homesick?"
                  rotate={-8}
                  glow="lime"
                  floatDelay={1}
                />
                <FloatingCard
                  variant="reel"
                  size="md"
                  gradient="linear-gradient(160deg,#4b6cb7,#182848)"
                  rotate={6}
                  glow="lime"
                  floatDelay={2}
                />
              </div>
            </div>

            {/* HEADLINE */}
            <div className="text-center">
              <Reveal>
                <h1 className="font-display text-5xl sm:text-6xl md:text-7xl leading-[0.95]">
                  Don&apos;t just{" "}
                  <span className="font-accent italic font-normal">Get</span>
                  <br className="hidden sm:block" /> Viewed
                  <LogoStack />
                  get
                  <br className="hidden sm:block" /> LOVED!!
                </h1>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-6 max-w-md mx-auto text-sm md:text-base text-ink/60">
                  If you&apos;re tired of the plain, boring, repetitive content
                  that gets ignored in less than 3 seconds, we are here to
                  make your brand not just viewed but LOVED by your
                  to-be customers.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-8 flex items-center justify-center gap-3">
                  <Link
                    href="/contact"
                    className="flex items-center gap-3 bg-ink text-paper pl-6 pr-1.5 py-1.5 rounded-full text-sm hover:gap-4 transition-all"
                  >
                    Get In Touch
                    <span className="grid place-items-center h-9 w-9 rounded-full bg-lime text-ink">
                      <ArrowUpRight size={16} />
                    </span>
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* RIGHT FLOATING CARDS */}
            <div className="hidden lg:flex flex-col items-center gap-6">
              <FloatingCard
                variant="reel"
                size="lg"
                gradient="linear-gradient(160deg,#5f7161,#2f3e35)"
                rotate={6}
                glow="lime"
                floatDelay={0.5}
              />
              <div className="flex gap-4">
                <FloatingCard
                  variant="quote"
                  size="md"
                  gradient="linear-gradient(160deg,#1f6f54,#0e3d2c)"
                  caption="If Snacks had Tinder Bios"
                  rotate={-6}
                  glow="lime"
                  floatDelay={1.5}
                />
                <FloatingCard
                  variant="quote"
                  size="md"
                  gradient="linear-gradient(160deg,#3a3a3a,#111111)"
                  caption="Embrace Luxury"
                  rotate={8}
                  glow="lime"
                  floatDelay={2.5}
                />
              </div>
            </div>

            {/* MOBILE: compact row of cards below headline */}
            <div className="flex lg:hidden justify-center gap-4 col-span-full mt-4">
              <FloatingCard
                variant="reel"
                size="md"
                gradient="linear-gradient(160deg,#2d2d2d,#6b6b6b)"
                rotate={-4}
                glow="lime"
                floatDelay={0}
              />
              <FloatingCard
                variant="quote"
                size="md"
                gradient="linear-gradient(160deg,#1f6f54,#0e3d2c)"
                caption="Snacks & Bios"
                rotate={4}
                glow="lime"
                floatDelay={1}
              />
              <FloatingCard
                variant="reel"
                size="md"
                gradient="linear-gradient(160deg,#4b6cb7,#182848)"
                rotate={-3}
                glow="lime"
                floatDelay={2}
              />
            </div>
          </div>
        </div>
      </section>

      <LogoMarquee />

      {/* SERVICES OVERVIEW */}
      <section className="mx-auto max-w-6xl px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <Reveal key={s.id} delay={i * 0.08}>
            <MotionLink
              href={`/services#${s.id}`}
              className="group border-2 border-ink rounded-2xl p-6 flex flex-col justify-between min-h-[220px] hover:bg-ink hover:text-paper transition-colors"
            >
              <div>
                <h3 className="font-display text-2xl leading-tight">{s.title}</h3>
                <p className="mt-3 text-sm text-ink/70 group-hover:text-paper/70">
                  {s.blurb}
                </p>
              </div>
              <span className="mt-6 text-xs font-bold uppercase tracking-wide text-coral">
                {s.tag}
              </span>
            </MotionLink>
          </Reveal>
        ))}
      </section>

      {/* MYTHS */}
      <section className="bg-ink text-paper py-20 overflow-hidden">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="font-display text-3xl md:text-5xl leading-tight">
              We bet you still believe these three myths:
            </p>
          </Reveal>
          <ul className="mt-8 space-y-4">
            {myths.map((m, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <li className="font-display text-2xl md:text-4xl text-paper/50">
                  Myth {i + 1}: <span className="myth-strike text-paper/70">{m}</span>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={0.3}>
            <p className="mt-10 font-display text-3xl md:text-5xl">
              We replace the guesswork with <span className="text-lime">psychology.</span>
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <Link
              href="/contact"
              className="inline-block mt-8 bg-lime text-ink px-7 py-3 rounded-full font-mono text-sm font-bold hover:bg-coral hover:text-paper transition-colors"
            >
              Ready to grow? →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <StatsCounter />
      </section>

      {/* CASE STUDIES */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-coral mb-3">
            Case Studies
          </p>
          <h2 className="font-display text-4xl md:text-6xl mb-12">
            Success stories that speak
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 3) * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="h-full"
              >
              <Link
                href={`/case-studies/${c.slug}`}
                className="border-2 border-ink rounded-2xl p-6 flex flex-col justify-between h-full"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-wide text-coral">
                    {c.type}
                  </span>
                  <h3 className="font-display text-2xl mt-2">{c.brand}</h3>
                  <p className="text-xs text-ink/50 mb-3">{c.category}</p>
                  <p className="text-sm text-ink/70">{c.summary}</p>
                </div>
                <div className="mt-6 flex gap-6">
                  <div>
                    <p className="font-display text-2xl text-coral">{c.stat1.value}</p>
                    <p className="text-xs text-ink/60">{c.stat1.label}</p>
                  </div>
                  <div>
                    <p className="font-display text-2xl text-coral">{c.stat2.value}</p>
                    <p className="text-xs text-ink/60">{c.stat2.label}</p>
                  </div>
                </div>
              </Link>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-lime/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="font-display text-4xl md:text-6xl mb-12">
              They said it, not us.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={(i % 2) * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-paper border-2 border-ink rounded-2xl p-6 h-full"
                >
                  <p className="text-sm md:text-base text-ink/80">&ldquo;{t.quote}&rdquo;</p>
                  <p className="mt-4 text-xs font-bold uppercase tracking-wide">
                    {t.name}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <Reveal>
        <h2 className="font-display text-4xl md:text-7xl">
          Ready to <span className="text-coral">Social Sculpt?</span>
        </h2>
        <p className="mt-4 text-ink/70 max-w-lg mx-auto">
          Book a slot below or fill in your details so our team can get in touch.
        </p>
        </Reveal>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-ink text-paper px-7 py-3 rounded-full hover:bg-coral transition-colors"
          >
            Send a message
          </Link>
          <a
            href="#"
            className="border-2 border-ink px-7 py-3 rounded-full hover:bg-lime hover:border-lime transition-colors"
          >
            Schedule a call
          </a>
        </div>
      </section>
    </main>
  );
}
