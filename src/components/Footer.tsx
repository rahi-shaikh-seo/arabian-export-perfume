import { WHATSAPP_DISPLAY, waLink } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="relative border-t border-primary/20 pt-20 pb-10 mt-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground font-bold">A</div>
              <div className="font-serif text-gradient-gold text-lg" style={{ fontFamily: "var(--font-display)" }}>Arabian Essence</div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">Premium attar, perfume oils and private label manufacturing exported worldwide.</p>
          </div>
          <FooterCol title="Quick Links" links={[
            { l: "Products", h: "#products" },
            { l: "Why Us", h: "#why" },
            { l: "Private Label", h: "#private-label" },
            { l: "Markets", h: "#markets" },
            { l: "Contact", h: "#contact" },
          ]} />
          <FooterCol title="Categories" links={[
            { l: "Attars", h: "#products" }, { l: "Oud Oils", h: "#products" },
            { l: "Arabic Perfumes", h: "#products" }, { l: "Bakhoor", h: "#products" },
            { l: "Gift Sets", h: "#products" }, { l: "Private Label", h: "#private-label" },
          ]} />
          <div>
            <h4 className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Wholesale</h4>
            <p className="text-sm text-muted-foreground mb-2">Sakar 9</p>
            <p className="text-sm text-muted-foreground mb-4">{WHATSAPP_DISPLAY}</p>
            <a href={waLink("Hello, I would like wholesale information.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-gold text-primary-foreground text-sm font-medium hover:scale-105 transition-transform">
              WhatsApp Us
            </a>
          </div>
        </div>
        <div className="gold-divider mb-6" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Arabian Essence Exports. All rights reserved.</div>
          <div>Wholesale & Export Inquiries Only — Not for Retail Sales</div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { l: string; h: string }[] }) {
  return (
    <div>
      <h4 className="text-primary text-sm tracking-[0.3em] uppercase mb-4">{title}</h4>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l.l}><a href={l.h} className="text-sm text-muted-foreground hover:text-primary transition-colors">{l.l}</a></li>
        ))}
      </ul>
    </div>
  );
}