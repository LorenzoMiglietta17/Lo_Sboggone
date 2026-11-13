import Link from "next/link";
import { content } from "@/src/data/content";

export function SiteFooter({ isHome = false }: { isHome?: boolean }) {
  const { restaurant } = content;

  return (
    <footer className="site-footer">
      <div className="section-wrap footer-inner">
        <div>
          <Link className="brand" href={isHome ? "#inizio" : "/#inizio"}>
            <span className="brand-name">{restaurant.name}</span>
            <span className="brand-caption">{restaurant.cuisine}</span>
          </Link>
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
