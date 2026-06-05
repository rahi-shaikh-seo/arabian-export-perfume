import { motion } from "framer-motion";
import attar from "@/assets/product-attar.jpg";
import oud from "@/assets/product-oud.jpg";
import perfume from "@/assets/product-perfume.jpg";
import bakhoor from "@/assets/product-bakhoor.jpg";
import giftset from "@/assets/product-giftset.jpg";
import label from "@/assets/product-private-label.jpg";
import { waLink } from "@/lib/whatsapp";

const products = [
  { name: "Attars", desc: "Traditional alcohol-free Arabic attars in premium concentrations.", img: attar },
  { name: "Pure Oud Oils", desc: "Distilled Cambodian, Indian & Hindi oud oils for connoisseurs.", img: oud },
  { name: "Arabic Perfumes", desc: "Signature Arabian EDP sprays with long-lasting silage.", img: perfume },
  { name: "Concentrated Perfume Oils", desc: "High-grade fragrance oils ready for bulk reformulation.", img: oud },
  { name: "Bakhoor & Incense", desc: "Hand-blended bakhoor chips, woods & resins.", img: bakhoor },
  { name: "Luxury Gift Sets", desc: "Premium presentation boxes for retail & corporate.", img: giftset },
  { name: "White Label Perfumes", desc: "Ready stock perfumes, your label, fast turnaround.", img: label },
  { name: "Private Label Collections", desc: "Custom-built bespoke fragrance lines for your brand.", img: label },
];

export function Products() {
  return (
    <section id="products" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader eyebrow="Our Collection" title={<>Crafted for <span className="text-gradient-gold italic">Distributors</span></>} subtitle="A curated portfolio of luxury Arabic fragrances — every category available in bulk, white label and bespoke private label." />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              whileHover={{ y: -8 }}
              className="group glass rounded-2xl overflow-hidden flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <img src={p.img} alt={p.name} loading="lazy" width={800} height={800}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-xl mb-2 text-foreground">{p.name}</h3>
                <p className="text-sm text-muted-foreground mb-5 flex-1">{p.desc}</p>
                <a
                  href={waLink(`Hi, I'd like a wholesale quote for: ${p.name}.`)}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-primary/40 text-primary text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  WhatsApp Inquiry →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, subtitle, center = true }: { eyebrow: string; title: React.ReactNode; subtitle?: string; center?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`mb-16 ${center ? "text-center mx-auto max-w-2xl" : ""}`}
    >
      <div className="text-xs tracking-[0.4em] uppercase text-primary mb-4">{eyebrow}</div>
      <h2 className="text-4xl md:text-5xl font-medium mb-4 leading-tight">{title}</h2>
      {subtitle && <p className="text-muted-foreground leading-relaxed">{subtitle}</p>}
      <div className="gold-divider mt-8 max-w-[120px] mx-auto" />
    </motion.div>
  );
}