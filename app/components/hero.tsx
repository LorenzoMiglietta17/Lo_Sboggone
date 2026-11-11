import Image from "next/image";
import { content } from "@/src/data/content";
import { photos } from "@/src/data/gallery";

export function Hero() {
  const { restaurant, hero } = content;

  return (
    <section className="hero" id="inizio" aria-labelledby="hero-title">
      <div className="hero-content">
        <div className="hero-copy">
          <span className="eyebrow">{hero.eyebrow}</span>
          <h1 className="font-display" id="hero-title">
            {restaurant.name}
          </h1>
          <p className="hero-subtitle">{hero.subtitle}</p>
          <div className="hero-actions">
            <a className="button button--primary" href={`tel:${restaurant.phoneLink}`}>
              {hero.callToAction}
              <span aria-hidden="true">↗</span>
            </a>
            <a className="button button--light" href="#menu">
              {hero.menuCallToAction}
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <figure className="hero-photo">
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
      </div>
    </section>
  );
}
