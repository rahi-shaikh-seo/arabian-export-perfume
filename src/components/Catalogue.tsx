import { motion } from "framer-motion";
import { waLink } from "@/lib/whatsapp";

export function Catalogue() {
  return (
    <section className="py-28 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative glass-gold rounded-3xl p-10 md:p-16 text-center overflow-hidden"
        >
          <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-secondary/30 blur-3xl" />

          <div className="relative">
            <div className="text-xs tracking-[0.4em] uppercase text-primary mb-4">Wholesale Catalogue</div>
            <h2 className="text-4xl md:text-5xl font-medium mb-6">Request Our <span className="text-gradient-gold italic">Full Catalogue</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Complete product range, bulk pricing tiers and MOQ details delivered to
              your WhatsApp within minutes. No forms. No waiting.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-10">
              {[
                { l: "8+", s: "Product Categories" },
                { l: "Flexible", s: "Bulk Pricing" },
                { l: "Low", s: "MOQ Options" },
              ].map((s) => (
                <div key={s.s} className="glass rounded-xl py-5">
                  <div className="text-2xl text-gradient-gold font-medium">{s.l}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.s}</div>
                </div>
              ))}
            </div>

            <a
              href={waLink("Hello, please send me your full wholesale catalogue with bulk pricing and MOQ.")}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-gold text-primary-foreground font-medium shadow-gold-glow hover:scale-[1.03] transition-transform"
            >
              Get Catalogue on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}