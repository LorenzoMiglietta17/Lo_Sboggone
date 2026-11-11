import { content } from "@/src/data/content";

export function SiteFooter() {
  const { restaurant } = content;

  return (
    <footer className="site-footer">
      <div className="section-wrap footer-inner">
        <div>
          <a className="brand" href="#inizio">
            <span className="brand-name">{restaurant.name}</span>
            <span className="brand-caption">{restaurant.cuisine}</span>
          </a>
          <p className="footer-contact">
            {restaurant.address}
            <br />
            <a href={`tel:${restaurant.phoneLink}`}>{restaurant.phone}</a>
          </p>
        </div>
        <p className="footer-credit">
          {content.footer.creditPrefix}{" "}
          {content.footer.creditHref ? (
            <a href={content.footer.creditHref}>{content.footer.creditName}</a>
          ) : (
            <span>{content.footer.creditName}</span>
          )}
        </p>
      </div>
    </footer>
  );
}
