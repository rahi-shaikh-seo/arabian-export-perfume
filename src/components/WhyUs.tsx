import { motion } from "framer-motion";
import { SectionHeader } from "./Products";

const features = [
  { t: "Export Quality Manufacturing", d: "ISO-grade facility, batch-tested for global compliance.", i: "M3 7l9-4 9 4-9 4-9-4zm0 5l9 4 9-4M3 17l9 4 9-4" },
  { t: "Competitive Wholesale Pricing", d: "Direct-from-source pricing on every category.", i: "M12 8c-2.21 0-4 1.343-4 3s1.79 3 4 3 4 1.343 4 3-1.79 3-4 3m0-12V4m0 16v2" },
  { t: "Custom Branding", d: "Logo, label and box design tailored to your market.", i: "M15.232 5.232l3.536 3.536M9 11l6 6M3 21l4-1 12-12-3-3L4 17l-1 4z" },
  { t: "Private Label Solutions", d: "Full bespoke fragrance development with your name.", i: "M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" },
  { t: "Fast International Shipping", d: "Air & sea freight to 40+ countries with full docs.", i: "M3 12h18M3 6h18M3 18h18" },
  { t: "Premium Packaging", d: "Velvet boxes, gold foiling, retail-ready finishing.", i: "M20 7l-8-4-8 4m16 0v10l-8 4m8-14l-8 4m0 0l-8-4m8 4v10" },
  { t: "Long Lasting Fragrances", d: "12+ hour sillage on signature attars and EDPs.", i: "M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" },
  { t: "Dedicated Business Support", d: "Personal account manager from sample to shipment.", i: "M17 20h5v-2a4 4 0 0 0-3-3.87M9 20H4v-2a4 4 0 0 1 3-3.87m6-4a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm6 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" },
];

export function WhyUs() {
  return (
    <section id="why" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader eyebrow="Why Choose Us" title={<>The <span className="text-gradient-gold italic">Standard</span> of Arabian Luxury</>} subtitle="Partnering with retailers and distributors who refuse to compromise on quality, presentation, or pricing." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.t}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="glass rounded-2xl p-6 hover:border-primary/40 transition-colors group"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-gold flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-primary-foreground" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={f.i} />
                </svg>
              </div>
              <h3 className="text-lg mb-2">{f.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}