"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function MotionLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25, ease: "easeOut" }}>
      <Link href={href} className={className}>
        {children}
      </Link>
    </motion.div>
  );
}
