import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { WhyUs } from "@/components/WhyUs";
import { PrivateLabel } from "@/components/PrivateLabel";
import { Markets } from "@/components/Markets";
import { Catalogue } from "@/components/Catalogue";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arabian Essence Exports — Wholesale Attar, Oud & Private Label Perfume" },
      { name: "description", content: "Bulk supplier of luxury attars, oud oils, Arabic perfumes & private label perfume manufacturing. Exporting worldwide — UAE, Saudi Arabia, GCC, Africa & beyond." },
      { name: "keywords", content: "wholesale attar, bulk perfume oils, oud oil supplier, private label perfume, Arabic perfume exporter, perfume manufacturer UAE Saudi Arabia" },
      { property: "og:title", content: "Arabian Essence Exports — Wholesale Perfume & Attar" },
      { property: "og:description", content: "Premium attar, oud and private label perfume manufacturing for distributors worldwide." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Arabian Essence Exports",
          description: "Wholesale manufacturer and exporter of attars, oud oils, Arabic perfumes and private label fragrances.",
          address: { "@type": "PostalAddress", streetAddress: "Sakar 9" },
          contactPoint: { "@type": "ContactPoint", telephone: "+91-9913298992", contactType: "sales", availableLanguage: ["English", "Arabic", "Hindi"] },
          areaServed: ["AE", "SA", "QA", "KW", "OM", "BH", "ZA", "KE", "NG"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <Products />
      <WhyUs />
      <PrivateLabel />
      <Markets />
      <Catalogue />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
