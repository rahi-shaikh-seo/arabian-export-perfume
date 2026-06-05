import { motion } from "framer-motion";
import { SectionHeader } from "./Products";
import { WHATSAPP_DISPLAY, waLink } from "@/lib/whatsapp";

export function Contact() {
  return (
    <section id="contact" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader eyebrow="Contact" title={<>Begin Your <span className="text-gradient-gold italic">Wholesale Partnership</span></>} subtitle="Reach our export desk directly. Most inquiries are answered within an hour." />

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-gold rounded-3xl p-8 md:p-10">
            <h3 className="text-2xl mb-6 text-gradient-gold">Arabian Essence Exports</h3>
            <div className="space-y-6">
              <InfoRow icon="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" label="Address" value="Sakar 9" />
              <InfoRow icon="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" label="WhatsApp" value={WHATSAPP_DISPLAY} />
              <InfoRow icon="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" label="Business Hours" value="Mon – Sat · 9:00 AM – 8:00 PM IST" />
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href={waLink("Hello Arabian Essence, I would like to start a wholesale inquiry.")} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-gold text-primary-foreground font-medium shadow-gold-glow hover:scale-[1.02] transition-transform">
                Chat on WhatsApp
              </a>
              <a href={`tel:+919913298992`} className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full glass border border-primary/40 text-foreground hover:bg-primary/10 transition-colors">
                Call Us
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass rounded-3xl overflow-hidden min-h-[400px] relative">
            <iframe
              title="Arabian Essence Exports location"
              src="https://www.google.com/maps?q=Sakar+9&output=embed"
              className="absolute inset-0 w-full h-full grayscale contrast-125"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="flex gap-4">
      <div className="h-11 w-11 shrink-0 rounded-xl bg-gradient-gold flex items-center justify-center">
        <svg className="h-5 w-5 text-primary-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d={icon} />
        </svg>
      </div>
      <div>
        <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-1">{label}</div>
        <div className="text-foreground text-lg">{value}</div>
      </div>
    </div>
  );
}