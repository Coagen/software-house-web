//navbar Start
const hamburger = document.getElementById("hamburger");
const menuList = document.getElementById("menuList");
// Toggle hamburger menu
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menuList.classList.toggle("active");
});
//navbar End

// Active Link UnderLine Start
const menuLinks = document.querySelectorAll(".menuLink");
const currentPath = window.location.pathname;
menuLinks.forEach((link) => {
  if (link.getAttribute("href") === currentPath.split("/").pop()) {
    link.classList.add("active");
  }
});
// Active Link UnderLine End

// Event Slider Start
const eventsWrapper = document.getElementById("eventsWrapper");
const eventSlides = document.querySelectorAll(".event-slide");
let eventIndex = 0;
const totalEvents = eventSlides.length;
function moveEvents() {
  eventIndex = (eventIndex + 1) % totalEvents;
  eventsWrapper.style.transform = `translateX(-${eventIndex * 100}%)`;
}
// Auto-slide every 6s
setInterval(moveEvents, 6000);
// Event Slider End

// Animate cards on scroll (30% visibility) Start
const courseCards = document.querySelectorAll(".course-card");

const courseObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // animate once
      }
    });
  },
  { threshold: 0.3 } // 30% visible
);

courseCards.forEach((card) => {
  courseObserver.observe(card);
});
// Animate cards on scroll (30% visibility) End
