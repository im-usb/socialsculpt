"use client";
import { motion } from "framer-motion";

const logos = [
  { label: "GR", bg: "#FBE7E7" },
  { label: "VR", bg: "#E9E4FF" },
  { label: "FP", bg: "#D6F5E3" },
  { label: "CB", bg: "#111111", text: "#FFFFFF" },
];

export default function LogoStack() {
  return (
    <span className="inline-flex items-center -space-x-3 align-middle mx-2">
      {logos.map((l, i) => (
        <motion.span
          key={i}
          className="grid place-items-center h-10 w-10 sm:h-14 sm:w-14 rounded-full border-2 border-paper text-xs sm:text-sm font-bold"
          style={{ backgroundColor: l.bg, color: l.text ?? "#111111" }}
          initial={{ opacity: 0, scale: 0.5, x: -10 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
        >
          {l.label}
        </motion.span>
      ))}
    </span>
  );
}
