"use client";

import { useState } from "react";
import { content } from "@/src/data/content";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { restaurant, navigation, sections } = content;

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <a className="skip-link" href="#contenuto">
        {sections.skipToContent}
      </a>
      <header className="site-header">
        <div className="header-inner">
          <a
            className="brand"
            href="#inizio"
            aria-label={`${restaurant.name}. ${content.header.brandLabel}`}
            onClick={closeMenu}
          >
            <span className="brand-name">{restaurant.name}</span>
            <span className="brand-caption">{restaurant.cuisine}</span>
          </a>
          <nav className="header-nav" aria-label={content.header.primaryNavigation}>
            {navigation.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <a className="button button--primary header-call" href={`tel:${restaurant.phoneLink}`}>
            {content.header.call}
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? content.header.closeMenu : content.header.openMenu}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="menu-toggle-lines" aria-hidden="true" />
          </button>
        </div>
        <nav
          className="mobile-nav"
          id="mobile-navigation"
          data-open={menuOpen}
          aria-label={content.header.mobileNavigation}
          aria-hidden={!menuOpen}
        >
          <div className="mobile-nav-inner">
            {navigation.map((item) => (
              <a href={item.href} key={item.href} onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>
                {item.label}
              </a>
            ))}
            <a href={`tel:${restaurant.phoneLink}`} onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>
              {content.header.callWithNumber} {restaurant.phone}
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}
