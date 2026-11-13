"use client";

import { useMemo, useState, useSyncExternalStore, type FormEvent } from "react";
import { content } from "@/src/data/content";

type Review = {
  id: string;
  name: string;
  rating: number;
  text: string;
  createdAt: string;
};

const storageKey = "lo-sgobbone-reviews";
const storageReadError = "review-storage-read-error";
const reviewsUpdatedEvent = "lo-sgobbone-reviews-updated";

function subscribeToReviews(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(reviewsUpdatedEvent, onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(reviewsUpdatedEvent, onStoreChange);
  };
}

function getReviewsSnapshot() {
  try {
    return window.localStorage.getItem(storageKey) ?? "[]";
  } catch (error) {
    if (error instanceof DOMException) return storageReadError;
    throw error;
  }
}

function getServerReviewsSnapshot() {
  return "[]";
}

function isReview(value: unknown): value is Review {
  if (typeof value !== "object" || value === null) return false;

  return (
    "id" in value &&
    typeof value.id === "string" &&
    "name" in value &&
    typeof value.name === "string" &&
    value.name.length > 0 &&
    "rating" in value &&
    typeof value.rating === "number" &&
    Number.isInteger(value.rating) &&
    value.rating >= 1 &&
    value.rating <= 5 &&
    "text" in value &&
    typeof value.text === "string" &&
    value.text.length > 0 &&
    "createdAt" in value &&
    typeof value.createdAt === "string" &&
    Number.isFinite(Date.parse(value.createdAt))
  );
}

function parseReviewsSnapshot(snapshot: string) {
  if (snapshot === storageReadError) return { reviews: [], hasError: true };

  let parsedReviews: unknown;
  try {
    parsedReviews = JSON.parse(snapshot);
  } catch (error) {
    if (error instanceof SyntaxError) return { reviews: [], hasError: true };
    throw error;
  }

  if (!Array.isArray(parsedReviews) || !parsedReviews.every(isReview)) {
    return { reviews: [], hasError: true };
  }

  return { reviews: parsedReviews, hasError: false };
}

export function Reviews() {
  const snapshot = useSyncExternalStore(
    subscribeToReviews,
    getReviewsSnapshot,
    getServerReviewsSnapshot,
  );
  const { reviews, hasError } = useMemo(
    () => parseReviewsSnapshot(snapshot),
    [snapshot],
  );
  const [feedback, setFeedback] = useState<{
    type: "error" | "success";
    message: string;
  } | null>(null);

  function submitReview(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const text = String(formData.get("text") ?? "").trim();
    const rating = Number(formData.get("rating"));

    if (!name || !text || !Number.isInteger(rating) || rating < 1 || rating > 5) {
      setFeedback({ type: "error", message: content.contact.reviewInvalid });
      return;
    }

    const review: Review = {
      id: crypto.randomUUID(),
      name,
      rating,
      text,
      createdAt: new Date().toISOString(),
    };
    const nextReviews = [review, ...reviews];

    try {
      window.localStorage.setItem(storageKey, JSON.stringify(nextReviews));
    } catch (error) {
      if (error instanceof DOMException) {
        setFeedback({ type: "error", message: content.contact.reviewSaveError });
        return;
      }
      throw error;
    }

    window.dispatchEvent(new Event(reviewsUpdatedEvent));
    setFeedback({ type: "success", message: content.contact.reviewSuccess });
    form.reset();
  }

  return (
    <section className="contact-reviews" aria-labelledby="reviews-title">
      <h3 id="reviews-title">{content.contact.reviewsTitle}</h3>
      <p className="reviews-intro">{content.contact.reviewsIntro}</p>
      <form className="review-form" onSubmit={submitReview}>
        <div className="review-field">
          <label htmlFor="review-name">{content.contact.reviewNameLabel}</label>
          <input
            autoComplete="name"
            id="review-name"
            maxLength={80}
            name="name"
            required
            type="text"
          />
        </div>
        <div className="review-field">
          <label htmlFor="review-rating">{content.contact.reviewRatingLabel}</label>
          <select defaultValue="" id="review-rating" name="rating" required>
            <option disabled value="">
              {content.contact.reviewRatingPrompt}
            </option>
            {[5, 4, 3, 2, 1].map((rating) => (
              <option key={rating} value={rating}>
                {rating} / 5
              </option>
            ))}
          </select>
        </div>
        <div className="review-field">
          <label htmlFor="review-text">{content.contact.reviewTextLabel}</label>
          <textarea id="review-text" maxLength={500} name="text" required rows={4} />
        </div>
        <button className="button button--primary review-submit" type="submit">
          {content.contact.reviewSubmit}
        </button>
        {feedback && (
          <p className="review-feedback" data-state={feedback.type} role="status">
            {feedback.message}
          </p>
        )}
        {hasError && (
          <p className="review-feedback" data-state="error" role="alert">
            {content.contact.reviewLoadError}
          </p>
        )}
      </form>
      <div className="review-list" aria-live="polite">
        {reviews.length === 0 ? (
          <p className="reviews-empty">{content.contact.reviewsEmpty}</p>
        ) : (
          reviews.map((review) => (
            <article className="review-card" key={review.id}>
              <div className="review-card-heading">
                <h4>{review.name}</h4>
                <time dateTime={review.createdAt}>
                  {new Intl.DateTimeFormat("it-IT", { dateStyle: "medium" }).format(
                    new Date(review.createdAt),
                  )}
                </time>
              </div>
              <p className="review-rating">
                <span aria-hidden="true">{"★".repeat(review.rating)}</span>
                <span>{review.rating}/5</span>
              </p>
              <p className="review-text">{review.text}</p>
            </article>
          ))
        )}
      </div>
    </section>
  );
}
