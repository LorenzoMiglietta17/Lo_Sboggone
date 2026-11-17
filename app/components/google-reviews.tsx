import { content } from "@/src/data/content";

export function GoogleReviews() {
  const { googleBusinessProfileUrl } = content.restaurant;

  return (
    <section className="contact-reviews" aria-labelledby="google-reviews-title">
      <h3 id="google-reviews-title">{content.contact.googleReviewsTitle}</h3>
      <p className="reviews-intro">{content.contact.googleReviewsIntro}</p>
      {googleBusinessProfileUrl && (
        <a
          className="button button--primary google-reviews-link"
          href={googleBusinessProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content.contact.googleReviewsLink}
          <span aria-hidden="true">↗</span>
        </a>
      )}
    </section>
  );
}
