import { motion } from "framer-motion";
import labelImg from "@/assets/product-private-label.jpg";
import { waLink } from "@/lib/whatsapp";

const items = [
  { t: "Custom Branding", d: "Your logo, your story, your colour palette." },
  { t: "Custom Packaging", d: "Bespoke boxes, foil stamping & velvet finishes." },
  { t: "Bottle Selection", d: "Hundreds of crystal & decorative bottle shapes." },
  { t: "Fragrance Customization", d: "Blend a signature scent from our perfumers' library." },
  { t: "Flexible MOQ", d: "Start small or scale to container loads." },
];

export function PrivateLabel() {
  return (
    <section id="private-label" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-emerald opacity-30" />
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
          <div className="absolute -inset-10 bg-primary/20 blur-3xl rounded-full" />
          <img src={labelImg} alt="Private label bottles" loading="lazy" width={800} height={800} className="relative rounded-3xl shadow-luxe glass-gold p-4" />
        </motion.div>
        <div>
          <div className="text-xs tracking-[0.4em] uppercase text-primary mb-4">Private Label</div>
          <h2 className="text-4xl md:text-5xl font-medium mb-6 leading-tight">Launch Your Own <span className="text-gradient-gold italic">Perfume Brand</span></h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            From concept to container — we manufacture, bottle, package and ship perfume
            collections under your brand name. End-to-end ownership of every drop.
          </p>
          <div className="space-y-4 mb-10">
            {items.map((it, i) => (
              <motion.div key={it.t} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex gap-4">
                <div className="h-8 w-8 shrink-0 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground text-sm font-semibold">{i + 1}</div>
                <div>
                  <h3 className="text-lg mb-1">{it.t}</h3>
                  <p className="text-sm text-muted-foreground">{it.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <a href={waLink("Hello, I want to discuss launching my own private label perfume brand.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-gold text-primary-foreground font-medium shadow-gold-glow hover:scale-[1.03] transition-transform">
            Discuss Your Brand on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}