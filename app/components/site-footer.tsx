import Link from "next/link";
import { content } from "@/src/data/content";
import { OpeningStatus } from "./opening-status";

export function SiteFooter({ isHome = false }: { isHome?: boolean }) {
  const { restaurant } = content;

  return (
    <footer className="site-footer">
      <div className="section-wrap">
        <div className="footer-main">
          <div className="footer-brand-column">
            <div className="brand-lockup">
              <Link className="brand" href={isHome ? "#inizio" : "/#inizio"}>
                <span className="brand-name">{restaurant.name}</span>
                <span className="brand-caption">{restaurant.cuisine}</span>
              </Link>
              <OpeningStatus />
            </div>
            <p className="footer-intro">{content.footer.description}</p>
          </div>

          <section className="footer-column" aria-labelledby="footer-contact-title">
            <h2 className="footer-column-title" id="footer-contact-title">
              {content.footer.contactTitle}
            </h2>
            <address className="footer-contact">
              <span>{restaurant.address}</span>
              <a href={`tel:${restaurant.phoneLink}`}>{restaurant.phone}</a>
            </address>
            <a
              className="footer-directions"
              href={restaurant.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {content.contact.directions}
              <span aria-hidden="true">↗</span>
            </a>
          </section>

          <nav className="footer-column" aria-label={content.footer.navigationTitle}>
            <h2 className="footer-column-title">{content.footer.navigationTitle}</h2>
            <ul className="footer-link-list">
              {content.navigation.map((item) => (
                <li key={item.href}>
                  {item.href.startsWith("#") && isHome ? (
                    <a href={item.href}>{item.label}</a>
                  ) : (
                    <Link href={item.href.startsWith("#") ? `/${item.href}` : item.href}>
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <section className="footer-column" aria-labelledby="footer-hours-title">
            <h2 className="footer-column-title" id="footer-hours-title">
              {content.contact.hoursLabel}
            </h2>
            <ul className="footer-hours">
              {content.contact.hours.map((schedule) => (
                <li key={schedule.days}>
                  <span className="footer-hours-day">{schedule.days}</span>
                  <span className="footer-hours-periods">
                    {schedule.periods.map((period) => (
                      <span key={`${schedule.days}-${period.label}`}>
                        {period.label && `${period.label} `}
                        {period.time}
                      </span>
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="footer-bottom">
          <p className="footer-credit">
            {content.footer.creditPrefix}{" "}
            {content.footer.creditHref ? (
              <a href={content.footer.creditHref}>{content.footer.creditName}</a>
            ) : (
              <span>{content.footer.creditName}</span>
            )}
          </p>
          <a className="footer-back-to-top" href={isHome ? "#inizio" : "/#inizio"}>
            {content.footer.backToTop}
            <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
