//navbar
const hamburger = document.getElementById("hamburger");
const menuList = document.getElementById("menuList");
// Toggle hamburger menu
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menuList.classList.toggle("active");
});
//navbar

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
