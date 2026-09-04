"use client";
import { motion } from "framer-motion";
import { Play, Volume2 } from "lucide-react";

type Variant = "reel" | "quote";

export default function FloatingCard({
  variant = "reel",
  gradient,
  caption,
  rotate = 0,
  glow = "lime",
  size = "md",
  floatDelay = 0,
  className = "",
}: {
  variant?: Variant;
  gradient: string;
  caption?: string;
  rotate?: number;
  glow?: "lime" | "coral";
  size?: "lg" | "md";
  floatDelay?: number;
  className?: string;
}) {
  const glowColor = glow === "lime" ? "rgba(199,244,100,0.55)" : "rgba(255,90,60,0.4)";
  const dims = size === "lg" ? "w-40 sm:w-48 aspect-[3/4]" : "w-28 sm:w-32 aspect-square";

  return (
    <motion.div
      className={`relative ${dims} ${className}`}
      initial={{ opacity: 0, y: 30, rotate: rotate * 2 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: floatDelay * 0.15, ease: "easeOut" }}
    >
      <motion.div
        className="h-full w-full rounded-2xl overflow-hidden relative"
        style={{
          background: gradient,
          boxShadow: `0 8px 30px ${glowColor}`,
        }}
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 5 + floatDelay,
          repeat: Infinity,
          ease: "easeInOut",
          delay: floatDelay * 0.3,
        }}
        whileHover={{ scale: 1.04, rotate: 0 }}
      >
        {variant === "reel" && (
          <>
            <div className="absolute bottom-3 left-3 flex items-center gap-2">
              <span className="grid place-items-center h-8 w-8 rounded-full bg-white/25 backdrop-blur text-white">
                <Play size={14} fill="white" />
              </span>
            </div>
            <div className="absolute bottom-3 right-3">
              <span className="grid place-items-center h-8 w-8 rounded-full bg-white/25 backdrop-blur text-white">
                <Volume2 size={14} />
              </span>
            </div>
          </>
        )}
        {caption && (
          <div className="absolute inset-0 flex items-start p-4">
            <p className="font-display text-white text-lg leading-tight drop-shadow-sm">
              {caption}
            </p>
          </div>
        )}
      </motion.div>
      {/* sparkle accent */}
      <span className="absolute -top-2 -left-2 h-3 w-3 rounded-full bg-lime animate-sparkle" />
    </motion.div>
  );
}
