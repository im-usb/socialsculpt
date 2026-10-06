import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <p className="font-display text-2xl mb-3">
            Social<span className="text-lime">Sculpt</span>
          </p>
          <p className="text-sm text-paper/70 max-w-xs">
            We shape content that gets remembered, not scrolled past.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-paper/50 mb-4">Company</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/case-studies" className="hover:text-lime">Case Studies</Link></li>
            <li><Link href="/blogs" className="hover:text-lime">Blogs</Link></li>
            <li><Link href="/about" className="hover:text-lime">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-lime">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-paper/50 mb-4">Services</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services#smm" className="hover:text-lime">Social Media Management</Link></li>
            <li><Link href="/services#ugc" className="hover:text-lime">User-Generated Content</Link></li>
            <li><Link href="/services#performance" className="hover:text-lime">Performance Marketing</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-paper/50 mb-4">Get in touch</p>
          <p className="text-sm text-paper/70">hello@socialsculpt.in</p>
          <p className="text-sm text-paper/70 mt-1">Gwalior, India</p>
        </div>
      </div>
      <div className="border-t border-paper/20 py-6 text-center text-xs text-paper/50">
        © {new Date().getFullYear()} SocialSculpt. All Rights Reserved.
      </div>
    </footer>
  );
}
