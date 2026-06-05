import { motion } from "framer-motion";
import { SectionHeader } from "./Products";

const countries = [
  { n: "United Arab Emirates", f: "🇦🇪" },
  { n: "Saudi Arabia", f: "🇸🇦" },
  { n: "Qatar", f: "🇶🇦" },
  { n: "Kuwait", f: "🇰🇼" },
  { n: "Oman", f: "🇴🇲" },
  { n: "Bahrain", f: "🇧🇭" },
  { n: "South Africa", f: "🇿🇦" },
  { n: "Kenya", f: "🇰🇪" },
  { n: "Nigeria", f: "🇳🇬" },
];

export function Markets() {
  return (
    <section id="markets" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader eyebrow="Global Reach" title={<>Trusted Across <span className="text-gradient-gold italic">Continents</span></>} subtitle="Serving wholesale buyers, distributors and luxury retailers in the GCC, Africa, and international markets." />

        <div className="relative glass-gold rounded-3xl p-8 md:p-12 overflow-hidden">
          {/* World map SVG */}
          <svg viewBox="0 0 1000 500" className="absolute inset-0 w-full h-full opacity-20" aria-hidden>
            <defs>
              <radialGradient id="dot" cx="50%" cy="50%">
                <stop offset="0%" stopColor="oklch(0.78 0.14 85)" />
                <stop offset="100%" stopColor="oklch(0.78 0.14 85 / 0)" />
              </radialGradient>
            </defs>
            {Array.from({ length: 400 }).map((_, i) => {
              const x = (i % 40) * 25 + 10;
              const y = Math.floor(i / 40) * 25 + 10;
              return <circle key={i} cx={x} cy={y} r="1.5" fill="oklch(0.78 0.14 85 / 0.4)" />;
            })}
          </svg>

          {/* Animated pulse pings */}
          {[
            { x: "62%", y: "42%" }, { x: "60%", y: "44%" }, { x: "58%", y: "55%" },
            { x: "55%", y: "65%" }, { x: "57%", y: "72%" }, { x: "30%", y: "30%" },
          ].map((p, i) => (
            <span key={i} className="absolute" style={{ left: p.x, top: p.y }}>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inset-0 rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary shadow-gold-glow" />
              </span>
            </span>
          ))}

          <div className="relative grid sm:grid-cols-3 lg:grid-cols-3 gap-4">
            {countries.map((c, i) => (
              <motion.div
                key={c.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-xl px-5 py-4 flex items-center gap-3 hover:border-primary/50 transition-colors"
              >
                <span className="text-3xl">{c.f}</span>
                <span className="text-foreground/90">{c.n}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}