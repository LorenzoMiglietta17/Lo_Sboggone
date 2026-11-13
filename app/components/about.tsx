import Image from "next/image";
import { content } from "@/src/data/content";
import { photos } from "@/src/data/gallery";
import { AboutMotion } from "./about-motion";
import { Reveal } from "./reveal";

export function About() {
  const { about } = content;

  return (
    <section className="section-pad" id="trattoria" aria-labelledby="about-title">
      <AboutMotion>
        <Reveal>
          <div className="about-copy">
            <span className="eyebrow">{about.eyebrow}</span>
            <h2 className="section-title font-display" id="about-title">
              {about.title}
            </h2>
            <div className="section-copy">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="ornament" aria-hidden="true">
              ✳
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="about-photo">
            <Image
              src={photos.about.src}
              alt={photos.about.alt}
              fill
              sizes="(max-width: 899px) 100vw, 42vw"
            />
            <span className="image-note">{photos.about.caption}</span>
          </div>
        </Reveal>
      </AboutMotion>
    </section>
  );
}
