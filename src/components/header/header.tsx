"use client";
import { useEffect } from "react";
import "./header.scss";

export default function Header() {
  useEffect(() => {
    let adjustScroll: number;

    const toggleDeviceType = () => {
      const menu = document.querySelector(".header-navigation");
      const btn = document.querySelector(".dropdown-btn");

      if (window.innerWidth < 768) {
        menu?.classList.add("dropdown");
        if (btn) (btn as HTMLElement).style.display = "block"; // Cast to HTMLElement
        adjustScroll = 150; // Adjusted value for small screen
      } else if (window.innerWidth < 1366) {
        menu?.classList.remove("dropdown");
        if (btn) (btn as HTMLElement).style.display = "none"; // Cast to HTMLElement
        adjustScroll = 1085; // Adjusted value for medium screen
      } else {
        menu?.classList.remove("dropdown");
        if (btn) (btn as HTMLElement).style.display = "none"; // Cast to HTMLElement
        adjustScroll = 865; // Adjusted value for large screens
      }
    };

    const toggleDropdownList = () => {
      const menu = document.querySelector(".header-navigation");
      menu?.classList.toggle("active");
    };

    const toggleHeaderStickiness = () => {
      const header = document.querySelector("header") as HTMLElement | null;
      if (!header) return;

      const scrollPosition = window.scrollY;
      const opacity = Math.min((scrollPosition - 250) / 250, 1);
      if (scrollPosition > 100) {
        header.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;
        header.style.paddingTop = `${24 - opacity * 10}px`;
      } else {
        header.style.backgroundColor = "transparent";
        header.style.paddingTop = "1.5em"; // Reset to initial padding
      }
    };

    const handleScroll = () => {
      const scrollBackgroundHome = document.querySelector(
        ".home-background"
      ) as HTMLElement | null;
      const scrollBackgroundContact = document.querySelector(
        ".contact-title-bg"
      ) as HTMLElement | null;

      if (scrollBackgroundHome) {
        const scrollPosition = window.pageYOffset;
        scrollBackgroundHome.style.backgroundPositionY =
          scrollPosition * 0.85 + "px";
      }

      if (scrollBackgroundContact) {
        const scrollPositionContact =
          window.pageYOffset - window.innerHeight - adjustScroll;
        scrollBackgroundContact.style.backgroundPositionY =
          scrollPositionContact * 1 + "px";
      }
    };

    const updateActiveAnchor = () => {
      if (window.innerWidth >= 1024) {
        const isElementInViewport = (element: Element): boolean => {
          const rect = element.getBoundingClientRect();
          const windowHeight =
            window.innerHeight || document.documentElement.clientHeight;
          const buffer = 100;
          return rect.bottom <= windowHeight + buffer;
        };

        const sections = document.querySelectorAll("section");
        const navAnchors = document.querySelectorAll("nav ul li a");

        sections.forEach((section, index) => {
          if (isElementInViewport(section)) {
            navAnchors.forEach((anchor) => {
              anchor.classList.remove("nav-active");
            });
            navAnchors[index]?.classList.add("nav-active");
          }
        });
      }
    };

    // Event listeners for initial and resize actions
    window.addEventListener("load", toggleDeviceType);
    window.addEventListener("resize", toggleDeviceType);
    window.addEventListener("scroll", toggleHeaderStickiness);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", updateActiveAnchor);
    window.addEventListener("load", updateActiveAnchor);

    // Event listener for dropdown button
    const btn = document.querySelector(".dropdown-btn") as HTMLElement | null;
    btn?.addEventListener("click", toggleDropdownList);

    // Cleanup function for removing event listeners when component unmounts
    return () => {
      window.removeEventListener("load", toggleDeviceType);
      window.removeEventListener("resize", toggleDeviceType);
      window.removeEventListener("scroll", toggleHeaderStickiness);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", updateActiveAnchor);
      window.removeEventListener("load", updateActiveAnchor);
      btn?.removeEventListener("click", toggleDropdownList);
    };
  }, []);

  return (
    <header style={{ backgroundColor: "transparent", paddingTop: "1.5em" }}>
      <div className="header-container">
        <div className="header-logo">
          <img
            src="/dom-darlowo-logo.png"
            height="40"
            alt="Logo Dom Darłowo Domasławice"
          />
          <span className="header-phone-number">
            <img src="/phone-icon.svg" height="20" />
            <span>
              <p>
                <a href="tel:+48889794479">889-794-479</a>
              </p>
            </span>
          </span>
        </div>
        <nav>
          <button className="dropdown-btn" style={{ display: "none" }}>
            <img
              src="/menu-icon.svg"
              alt="menu control"
              height="35"
              width="auto"
            />
          </button>
          <ul className="header-navigation">
            <li>
              <a href="#informacje">Główne informacje</a>
            </li>
            <li>
              <a href="#atuty">Atuty</a>
            </li>
            <li>
              <a href="#kontakt">Kontakt</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
