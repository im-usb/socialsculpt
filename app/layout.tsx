import type { Metadata } from "next";
import "@fontsource/anton";
import "@fontsource/space-mono/400.css";
import "@fontsource/space-mono/700.css";
import "@fontsource/playfair-display/400-italic.css";
import "@fontsource/playfair-display/500-italic.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "SocialSculpt | UGC & Social Media Growth Agency",
  description:
    "SocialSculpt shapes scroll-stopping UGC and social campaigns that turn passive scrollers into paying customers.",
};

// Root layout stays minimal (fonts + global styles only) so the embedded
// Sanity Studio at /studio can render full-screen without our site chrome.
// Header/Footer live in app/(site)/layout.tsx instead.
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-mono antialiased">{children}</body>
    </html>
  );
}
