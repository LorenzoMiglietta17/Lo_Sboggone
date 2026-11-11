import { content } from "@/src/data/content";
import { Reveal } from "./reveal";

export function Contact() {
  const { restaurant } = content;

  return (
    <section className="section-pad contact-section" id="contatti" aria-labelledby="contact-title">
      <div className="section-wrap contact-grid">
        <Reveal>
          <div>
            <span className="eyebrow">{content.contact.eyebrow}</span>
            <h2 className="section-title font-display" id="contact-title">
              {content.contact.title}
            </h2>
            <dl className="contact-details">
              <div className="contact-detail">
                <dt>{content.contact.addressLabel}</dt>
                <dd>{restaurant.address}</dd>
              </div>
              <div className="contact-detail">
                <dt>{content.contact.phoneLabel}</dt>
                <dd>
                  <a href={`tel:${restaurant.phoneLink}`}>{restaurant.phone}</a>
                </dd>
              </div>
              <div className="contact-detail">
                <dt>{content.contact.hoursLabel}</dt>
                <dd>{content.contact.hoursPlaceholder}</dd>
              </div>
            </dl>
            <div className="contact-actions">
              <a
                className="button button--primary"
                href={restaurant.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content.contact.directions}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div>
            <div className="map-frame">
              <iframe
                src={restaurant.mapEmbedUrl}
                title={content.contact.mapTitle}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="map-note">{content.contact.mapNote}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
