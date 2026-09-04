"use client";
import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/content";

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

function Counter({ value, inView }: { value: string; inView: boolean }) {
  const numeric = parseFloat(value.replace(/[^\d.]/g, ""));
  const suffix = value.replace(/[\d.]/g, "");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView || isNaN(numeric)) return;
    let frame: number;
    const duration = 1400;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(numeric * progress);
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, numeric]);

  const display = isNaN(numeric)
    ? value
    : `${numeric % 1 === 0 ? Math.floor(count) : count.toFixed(1)}${suffix}`;

  return <span>{display}</span>;
}

export default function StatsCounter() {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6">
      {stats.map((s) => (
        <div key={s.label} className="text-center md:text-left">
          <p className="font-display text-4xl md:text-5xl text-coral">
            <Counter value={s.value} inView={inView} />
          </p>
          <p className="mt-2 text-sm font-bold uppercase tracking-wide">{s.label}</p>
          <p className="mt-1 text-xs text-ink/60 hidden md:block">{s.desc}</p>
        </div>
      ))}
    </div>
  );
}
