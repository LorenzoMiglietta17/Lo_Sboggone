import { About } from "./components/about";
import { Contact } from "./components/contact";
import { GallerySection } from "./components/gallery-section";
import { Hero } from "./components/hero";
import { Reservation } from "./components/reservation";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { content } from "@/src/data/content";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: content.restaurant.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: content.restaurant.streetAddress,
      postalCode: content.restaurant.postalCode,
      addressLocality: content.restaurant.locality,
      addressCountry: content.restaurant.addressCountry,
    },
    telephone: content.restaurant.phone,
    servesCuisine: content.restaurant.cuisine,
  };

  return (
    <div className="page-shell">
      <SiteHeader isHome />
      <main id="contenuto">
        <Hero />
        <About />
        <Reservation />
        <GallerySection />
        <Contact />
      </main>
      <SiteFooter isHome />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
    </div>
  );
}
