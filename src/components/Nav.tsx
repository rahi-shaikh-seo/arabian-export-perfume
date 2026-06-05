import { waLink } from "@/lib/whatsapp";
import { useEffect, useState } from "react";

const links = [
  { href: "#products", label: "Products" },
  { href: "#why", label: "Why Us" },
  { href: "#private-label", label: "Private Label" },
  { href: "#markets", label: "Global Reach" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled ? "glass py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-gold flex items-center justify-center font-serif text-primary-foreground text-lg font-bold">A</div>
          <div className="leading-tight">
            <div className="font-serif text-lg text-gradient-gold" style={{ fontFamily: "var(--font-display)" }}>Arabian Essence</div>
            <div className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">Exports</div>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-foreground/80 hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={waLink("Hello, I am interested in wholesale inquiry with Arabian Essence Exports.")}
          target="_blank" rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-gold text-primary-foreground text-sm font-medium shadow-gold-glow hover:scale-105 transition-transform"
        >
          WhatsApp Inquiry
        </a>
      </div>
    </header>
  );
}