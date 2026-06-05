import { motion } from "framer-motion";
import heroImg from "@/assets/hero-perfume.jpg";
import { waLink } from "@/lib/whatsapp";

const trust = [
  "Export Quality Products",
  "Bulk Supply Available",
  "Private Label Manufacturing",
  "International Shipping",
  "Premium Packaging",
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-28 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Luxury Arabic attar bottles" className="w-full h-full object-cover opacity-60" width={1920} height={1280} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-gold mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs tracking-[0.3em] uppercase text-primary">Wholesale & Export Only</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] mb-6">
            Premium <span className="text-gradient-gold italic">Attar</span> & Perfume Oils
            <br /> Exported <span className="text-gradient-gold italic">Worldwide</span>
          </h1>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
            Supplying luxury fragrances, attars, oud oils, and private label perfume
            solutions to retailers, distributors, and perfume brands across UAE, Saudi
            Arabia, and international markets.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href={waLink("Hello, please send me the Arabian Essence wholesale catalogue.")}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gradient-gold text-primary-foreground font-medium shadow-gold-glow hover:scale-[1.03] transition-transform"
            >
              Get Wholesale Catalogue on WhatsApp
            </a>
            <a
              href={waLink("Hello, I would like to request bulk pricing for your perfume range.")}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full glass border border-primary/40 text-foreground hover:bg-primary/10 transition-colors"
            >
              Request Bulk Pricing
            </a>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {trust.map((t) => (
              <div key={t} className="flex items-center gap-2 text-xs text-foreground/70">
                <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {t}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.3 }}
          className="hidden lg:block relative"
        >
          <div className="absolute -inset-20 bg-primary/20 blur-[100px] rounded-full" />
          <div className="relative glass-gold rounded-3xl p-6 shadow-luxe">
            <img src={heroImg} alt="Luxury attar collection" className="w-full h-[520px] object-cover rounded-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}