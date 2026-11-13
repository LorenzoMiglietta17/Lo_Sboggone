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
        <figure className="hero-photo hero-image">
          <Image
            src={photos.hero.src}
            alt={photos.hero.alt}
            fill
            priority
            sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 899px) min(100vw - 64px, 400px), (max-width: 1199px) 52vw, 512px"
            fetchPriority="high"
          />
          <figcaption className="hero-photo-note">{photos.hero.caption}</figcaption>
        </figure>
      </HeroMotion>
    </section>
  );
}
