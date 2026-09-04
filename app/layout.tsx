import type { Metadata } from "next";
import "@fontsource/anton";
import "@fontsource/space-mono/400.css";
import "@fontsource/space-mono/700.css";
import "@fontsource/playfair-display/400-italic.css";
import "@fontsource/playfair-display/500-italic.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SocialSculpt | UGC & Social Media Growth Agency",
  description:
    "SocialSculpt shapes scroll-stopping UGC and social campaigns that turn passive scrollers into paying customers.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-mono antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
