import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "./Products";

const reviews = [
  { name: "Ahmed Al-Mansoori", role: "Distributor, Dubai UAE", text: "Their oud quality is unmatched in the wholesale market. Consistent batches, premium packaging, and shipments always arrive on schedule." },
  { name: "Fatima Al-Saud", role: "Retail Chain Owner, Riyadh KSA", text: "We've been sourcing private label attars from Arabian Essence for over two years. Our customers cannot tell the difference from luxury brands." },
  { name: "James Okonkwo", role: "Importer, Lagos Nigeria", text: "Extremely professional team. Documentation, freight, and after-sales support are world-class. Highly recommended for African distributors." },
  { name: "Mohammed Al-Khalifa", role: "Boutique Owner, Manama Bahrain", text: "The presentation of every shipment feels like opening a luxury brand. This is exactly what our market expects." },
  { name: "Priya Naidoo", role: "Distributor, Johannesburg ZA", text: "Pricing is genuinely competitive, and the private label flexibility allowed us to launch a full range within 60 days." },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % reviews.length), 6000);
    return () => clearInterval(t);
  }, []);
  const r = reviews[i];
  return (
    <section className="py-28">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader eyebrow="Testimonials" title={<>Trusted by <span className="text-gradient-gold italic">Buyers Worldwide</span></>} />
        <div className="relative glass-gold rounded-3xl p-10 md:p-14 min-h-[280px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full text-center"
            >
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} viewBox="0 0 24 24" className="h-5 w-5 text-primary" fill="currentColor">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-xl md:text-2xl font-serif italic text-foreground/90 mb-6 leading-relaxed" style={{ fontFamily: "var(--font-display)" }}>
                "{r.text}"
              </p>
              <div className="text-primary font-medium">{r.name}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{r.role}</div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              aria-label={`Show testimonial ${k + 1}`}
              className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-primary" : "w-1.5 bg-primary/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}