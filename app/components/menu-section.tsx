import Image from "next/image";
import { content } from "@/src/data/content";
import { menu } from "@/src/data/menu";
import { Reveal } from "./reveal";

export function MenuSection() {
  return (
    <section className="section-pad menu-section" id="menu" aria-labelledby="menu-title">
      <div className="section-wrap">
        <Reveal>
          <div className="menu-heading">
            <span className="eyebrow">{content.menu.eyebrow}</span>
            <h1 className="section-title font-display" id="menu-title">
              {content.menu.title}
            </h1>
            <p className="section-copy">{content.menu.description}</p>
            <p className="menu-placeholder">{content.menu.note}</p>
          </div>
        </Reveal>
        <div className="menu-grid">
          {menu.map((section) => (
            <Reveal key={section.category}>
              <section className="menu-category" aria-label={section.category}>
                {section.image && (
                  <div className="menu-category-image">
                    <Image
                      src={section.image.src}
                      alt={section.image.alt}
                      fill
                      sizes="(max-width: 639px) calc(100vw - 5.5rem), (max-width: 899px) 42vw, 24rem"
                    />
                  </div>
                )}
                <h2>{section.category}</h2>
                {section.items.map((item, index) => (
                  <article className="dish" key={`${section.category}-${index}`}>
                    <div className="dish-content">
                      <div className="dish-heading">
                        <h3>{item.name}</h3>
                        <span className="dish-price">{item.price}</span>
                      </div>
                      <p>{item.description}</p>
                    </div>
                  </article>
                ))}
              </section>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
