import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "./Products";

const faqs = [
  { q: "What is your Minimum Order Quantity (MOQ)?", a: "Our MOQ varies by product category. For ready-stock items we start as low as 50 units; for private label production typical MOQ is 500 units per SKU. Contact us on WhatsApp for category-specific MOQs." },
  { q: "Do you ship internationally?", a: "Yes — we ship by air and sea freight to over 40 countries including the entire GCC, Africa, Europe, and Asia. Full export documentation, fumigation, and CoA are provided." },
  { q: "What private label services do you offer?", a: "End-to-end: fragrance development, bottle selection, custom labels, foiling, boxes, shrink wrap, and barcoding. You receive a retail-ready product under your brand." },
  { q: "What are your payment terms?", a: "We accept TT bank transfer, USD or EUR. Standard terms: 30% advance, 70% before shipment. Letters of Credit available for established distributors." },
  { q: "Can I order samples before bulk?", a: "Absolutely. Sample kits are available for all categories. Sample cost is adjustable against your first bulk order." },
  { q: "What is the typical delivery time?", a: "Ready stock ships within 5–7 days. Custom private label production runs 25–45 days depending on bottle and packaging complexity." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-28">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeader eyebrow="FAQ" title={<>Wholesale <span className="text-gradient-gold italic">Questions</span></>} />
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="glass rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-foreground font-medium">{f.q}</span>
                  <span className={`h-8 w-8 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground text-lg transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-muted-foreground leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}