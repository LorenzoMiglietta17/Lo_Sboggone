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
            <h2 className="section-title font-display" id="menu-title">
              {content.menu.title}
            </h2>
            <p className="section-copy">{content.menu.description}</p>
          </div>
        </Reveal>
        <div className="menu-grid">
          {menu.map((section) => (
            <Reveal key={section.category}>
              <section className="menu-category" aria-label={section.category}>
                <h3>{section.category}</h3>
                {section.items.map((item, index) => (
                  <article className="dish" key={`${section.category}-${index}`}>
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                  </article>
                ))}
              </section>
            </Reveal>
          ))}
        </div>
        <p className="menu-placeholder">{content.menu.note}</p>
      </div>
    </section>
  );
}
