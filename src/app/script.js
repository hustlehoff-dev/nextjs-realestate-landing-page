let adjustScroll;

function toggleDeviceType() {
  const menu = document.querySelector(".header-navigation");
  const btn = document.querySelector(".dropdown-btn");

  if (window.innerWidth < 768) {
    menu.classList.add("dropdown");
    btn.style.display = "block";
    adjustScroll = 150;
  } else if (window.innerWidth < 1366) {
    menu.classList.remove("dropdown");
    btn.style.display = "none";
    adjustScroll = 1085;
  } else {
    menu.classList.remove("dropdown");
    btn.style.display = "none";
    adjustScroll = 865;
  }
}

window.addEventListener("load", toggleDeviceType);
window.addEventListener("resize", toggleDeviceType);

function toggleDropdownList() {
  const menu = document.querySelector(".header-navigation");
  menu.classList.toggle("active");
}

const btn = document.querySelector(".dropdown-btn");
btn.addEventListener("click", toggleDropdownList);

function toggleHeaderStickiness() {
  const header = document.querySelector("header");

  if (window.scrollY > 250) {
    // Calculate opacity based on scroll position
    const opacity = (scrollY - 250) / 250;
    header.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;
    header.style.paddingTop = `${24 - opacity * 10}px`;
  } else {
    header.style.backgroundColor = "transparent";
  }
}

window.addEventListener("scroll", toggleHeaderStickiness);

const scrollBackgroundHome = document.querySelector(".home-background");
const scrollBackgroundContact = document.querySelector(".contact-title-bg");

function handleScroll() {
  const scrollPosition = window.pageYOffset;
  scrollBackgroundHome.style.backgroundPositionY = scrollPosition * 0.85 + "px";

  // Adjust scroll position for a contact title element
  const scrollPositionContact =
    window.pageYOffset - window.innerHeight - adjustScroll;

  scrollBackgroundContact.style.backgroundPositionY =
    scrollPositionContact * 1 + "px";
}

window.addEventListener("scroll", handleScroll);

function updateActiveAnchor() {
  if (window.innerWidth >= 1024) {
    function isElementInViewport(element) {
      const rect = element.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const buffer = 100;

      return rect.bottom <= windowHeight + buffer;
    }

    const sections = document.querySelectorAll("section");
    const navAnchors = document.querySelectorAll("nav ul li a");

    sections.forEach((section, index) => {
      if (isElementInViewport(section)) {
        navAnchors.forEach((anchor) => {
          anchor.classList.remove("nav-active");
        });
        navAnchors[index].classList.add("nav-active");
      }
    });
  }
}

window.addEventListener("scroll", updateActiveAnchor);
window.addEventListener("load", updateActiveAnchor);
