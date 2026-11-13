import Image from "next/image";
import Link from "next/link";
import { content } from "@/src/data/content";
import { photos } from "@/src/data/gallery";
import { HeroMotion } from "./hero-motion";
import Magnet from "./ui/magnet";

export function Hero() {
  const { restaurant, hero } = content;

  return (
    <section className="hero" id="inizio" aria-labelledby="hero-title">
      <Image
        className="hero-background"
        src={photos.hero.src}
        alt=""
        fill
        priority
        sizes="100vw"
        fetchPriority="high"
      />
      <HeroMotion className="hero-content">
        <div className="hero-copy">
          <span className="eyebrow hero-eyebrow">{hero.eyebrow}</span>
          <h1 className="font-display hero-title" id="hero-title">
            {restaurant.name}
          </h1>
          <p className="hero-subtitle hero-description">{hero.subtitle}</p>
          <div className="hero-actions">
            <Magnet padding={56} magnetStrength={5} maxOffset={6} scale={1.015}>
              <Link className="button button--light hero-menu-link" href="/menu">
                {hero.menuCallToAction}
                <span aria-hidden="true">↗</span>
              </Link>
            </Magnet>
          </div>
        </div>
      </HeroMotion>
    </section>
  );
}
