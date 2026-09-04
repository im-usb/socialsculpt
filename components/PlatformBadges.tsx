"use client";
import { motion } from "framer-motion";

const platforms = [
  { label: "Meta", bg: "#1877F2" },
  { label: "IG", bg: "#C13584" },
  { label: "in", bg: "#0A66C2" },
  { label: "YT", bg: "#FF0000" },
];

export default function PlatformBadges() {
  return (
    <motion.div
      className="flex items-center justify-center gap-3"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <span className="text-sm text-ink/60 mr-1">Experts in</span>
      {platforms.map((p, i) => (
        <motion.span
          key={i}
          className="grid place-items-center h-9 w-9 rounded-full text-white text-[11px] font-bold"
          style={{ backgroundColor: p.bg }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
          whileHover={{ scale: 1.15 }}
        >
          {p.label}
        </motion.span>
      ))}
    </motion.div>
  );
}
