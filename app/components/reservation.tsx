import { content } from "@/src/data/content";
import { Reveal } from "./reveal";
import Magnet from "./ui/magnet";

export function Reservation() {
  const { reservation, restaurant, hero } = content;

  return (
    <section
      className="section-pad reservation-section"
      id="prenotazione"
      aria-labelledby="reservation-title"
    >
      <div className="section-wrap">
        <Reveal>
          <div className="reservation-content">
            <span className="eyebrow">{reservation.eyebrow}</span>
            <h2 className="section-title font-display" id="reservation-title">
              {reservation.title}
            </h2>
            <p className="section-copy">{reservation.description}</p>
            <Magnet padding={56} magnetStrength={5} maxOffset={6} scale={1.015}>
              <a className="button button--primary" href={`tel:${restaurant.phoneLink}`}>
                {hero.callToAction}
                <span aria-hidden="true">↗</span>
              </a>
            </Magnet>
            <p className="reservation-phone">{restaurant.phone}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
