import type { Metadata } from "next";
import { MenuSection } from "../components/menu-section";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { content } from "@/src/data/content";

export const metadata: Metadata = {
  title: `Il menu | ${content.restaurant.name}`,
  description: content.menu.description,
};

export default function MenuPage() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main id="contenuto">
        <MenuSection />
      </main>
      <SiteFooter />
    </div>
  );
}
