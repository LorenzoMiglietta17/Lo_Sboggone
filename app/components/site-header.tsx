"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { content } from "@/src/data/content";
import { gsap, ScrollTrigger, useGSAP } from "./gsap-setup";

export function SiteHeader({ isHome = false }: { isHome?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const { restaurant, navigation, sections } = content;

  useGSAP(
    () => {
      const header = headerRef.current;
      if (!header) return;

      ScrollTrigger.create({
        trigger: document.documentElement,
        start: "top -24",
        onEnter: () => header.setAttribute("data-compact", "true"),
        onLeaveBack: () => header.removeAttribute("data-compact"),
      });
    },
    { scope: headerRef },
  );

  useGSAP(
    () => {
      if (!menuOpen) return;

      const media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".mobile-nav-inner",
          { autoAlpha: 0, y: -8 },
          { autoAlpha: 1, y: 0, duration: 0.24, ease: "power2.out" },
        );
        gsap.fromTo(
          ".mobile-nav-inner a",
          { autoAlpha: 0, y: -5 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.2,
            stagger: 0.045,
            ease: "power2.out",
          },
        );
      });

      return () => media.revert();
    },
    { scope: headerRef, dependencies: [menuOpen], revertOnUpdate: true },
  );

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <a className="skip-link" href="#contenuto">
        {sections.skipToContent}
      </a>
      <header className="site-header" ref={headerRef}>
        <div className="header-inner">
          <Link
            className="brand"
            href={isHome ? "#inizio" : "/#inizio"}
            aria-label={`${restaurant.name}. ${content.header.brandLabel}`}
            onClick={closeMenu}
          >
            <span className="brand-name">{restaurant.name}</span>
            <span className="brand-caption">{restaurant.cuisine}</span>
          </Link>
          <nav className="header-nav" aria-label={content.header.primaryNavigation}>
            {navigation.map((item) => (
              item.href.startsWith("#") && isHome ? (
                <a href={item.href} key={item.href}>{item.label}</a>
              ) : (
                <Link
                  href={item.href.startsWith("#") ? `/${item.href}` : item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>
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
              item.href.startsWith("#") && isHome ? (
                <a href={item.href} key={item.href} onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>
                  {item.label}
                </a>
              ) : (
                <Link
                  href={item.href.startsWith("#") ? `/${item.href}` : item.href}
                  key={item.href}
                  onClick={closeMenu}
                  tabIndex={menuOpen ? 0 : -1}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>
        </nav>
      </header>
    </>
  );
}
