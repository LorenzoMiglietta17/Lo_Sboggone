import { content } from "@/src/data/content";
import { Reveal } from "./reveal";
import { GalleryLightbox } from "./gallery-lightbox";

export function GallerySection() {
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
        <GalleryLightbox />
      </div>
    </section>
  );
}
