import Image from "next/image";
import { content } from "@/src/data/content";

export function Hero() {
  const { restaurant, hero } = content;

  return (
    <section className="hero" id="inizio" aria-labelledby="hero-title">
      <div className="hero-image" aria-hidden="true">
        <Image
          src="/images/hero-placeholder.svg"
          alt=""
          fill
          priority
          sizes="100vw"
          fetchPriority="high"
        />
      </div>
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-content">
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
        <span className="hero-photo-note">{hero.imageNote}</span>
      </div>
    </section>
  );
}
