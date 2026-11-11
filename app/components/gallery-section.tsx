"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { content } from "@/src/data/content";
import { gallery } from "@/src/data/gallery";
import { Reveal } from "./reveal";

export function GallerySection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const isOpen = activeIndex !== null;

  const close = useCallback(() => {
    setActiveIndex(null);
    previousFocusRef.current?.focus();
  }, []);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current - 1 + gallery.length) % gallery.length,
    );
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((current) => (current === null ? null : (current + 1) % gallery.length));
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        close();
      } else if (event.key === "ArrowLeft") {
        showPrevious();
      } else if (event.key === "ArrowRight") {
        showNext();
      } else if (event.key === "Tab") {
        const focusable = document.querySelectorAll<HTMLElement>(
          ".lightbox button:not(:disabled)",
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, close, showNext, showPrevious]);

  return (
    <section className="section-pad" id="galleria" aria-labelledby="gallery-title">
      <div className="section-wrap">
        <Reveal>
          <div className="gallery-heading">
            <span className="eyebrow">{content.gallery.eyebrow}</span>
            <h2 className="section-title font-display" id="gallery-title">
              {content.gallery.title}
            </h2>
            <p className="section-copy">{content.gallery.description}</p>
          </div>
        </Reveal>
        <div className="gallery-grid">
          {gallery.map((image, index) => (
            <Reveal
              className={
                image.shape === "gallery-card--portrait"
                  ? "gallery-reveal--portrait"
                  : "gallery-reveal--landscape"
              }
              key={image.src}
            >
              <button
                className={`gallery-card ${image.shape}`}
                type="button"
                data-note={content.gallery.imagePlaceholder}
                aria-label={`${content.gallery.openImage}: ${image.alt}`}
                onClick={(event) => {
                  previousFocusRef.current = event.currentTarget;
                  setActiveIndex(index);
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 639px) 50vw, (max-width: 899px) 33vw, 25vw"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>
      {activeIndex !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={content.gallery.title}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) close();
          }}
        >
          <div className="lightbox-top">
            <span className="lightbox-count">
              {content.gallery.imageCount} {activeIndex + 1} / {gallery.length}
            </span>
            <button
              className="lightbox-button"
              type="button"
              aria-label={content.gallery.close}
              onClick={close}
              ref={closeButtonRef}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="lightbox-image">
            <Image
              src={gallery[activeIndex].src}
              alt={gallery[activeIndex].alt}
              fill
              sizes="100vw"
              priority
            />
          </div>
          <div className="lightbox-controls">
            <button
              className="lightbox-button"
              type="button"
              aria-label={content.gallery.previous}
              onClick={showPrevious}
            >
              <span aria-hidden="true">←</span>
            </button>
            <p className="lightbox-caption">{gallery[activeIndex].alt}</p>
            <button
              className="lightbox-button"
              type="button"
              aria-label={content.gallery.next}
              onClick={showNext}
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
