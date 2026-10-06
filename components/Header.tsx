"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About Us" },
  { href: "/blogs", label: "Blogs" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b border-ink/10">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-5">
        <Link href="/" className="font-accent italic text-2xl">
          SocialSculpt
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-ink/50">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative flex items-center gap-2 transition-colors ${
                  active ? "text-ink" : "hover:text-ink"
                }`}
              >
                {active && (
                  <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                )}
                {l.label}
              </Link>
            );
          })}
        </nav>
        <Link
          href="/contact"
          className="hidden md:flex items-center gap-3 bg-ink text-paper pl-5 pr-1.5 py-1.5 rounded-full text-sm hover:gap-4 transition-all"
        >
          Contact Us
          <span className="grid place-items-center h-8 w-8 rounded-full bg-lime text-ink">
            <ArrowUpRight size={16} />
          </span>
        </Link>
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav className="md:hidden flex flex-col gap-4 px-6 pb-6 text-sm">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="bg-ink text-paper px-5 py-2 rounded-full text-center"
          >
            Contact Us
          </Link>
        </nav>
      )}
    </header>
  );
}
