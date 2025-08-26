// Navbar show after scroll
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight / 3) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-150px";
  }
});
// ................................................
// Intersection Observer for text + image animations
// const image = document.querySelector(".fade-img");

const text = document.querySelector(".text-side");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        text.classList.add("show");
      }
    });
  },
  { threshold: 0.4 }
);

observer.observe(text);

// const imageObserver = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.intersectionRatio > 0.2) {
//         image.classList.add("dim");
//       } else {
//         image.classList.remove("dim");
//       }
//     });
//   },
//   { threshold: [0, 0.2, 1] }
// );

// imageObserver.observe(image);
// .........................................................
// Animate Quality Section
const qualityCards = document.querySelectorAll(".quality-card");
const qualityImage = document.querySelector(".quality-img");

const qualityObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Animate cards with delay
        qualityCards.forEach((card, index) => {
          setTimeout(() => card.classList.add("show"), index * 200);
        });
        qualityImage.classList.add("show");
      }
    });
  },
  { threshold: 0.3 }
);

// Observe first card (trigger whole section)
if (qualityCards.length > 0) {
  qualityObserver.observe(qualityCards[0]);
}
// ////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    ".top, .right, .bottom, .hidden-right"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          // optional: stop observing once shown
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 } // triggers when 20% visible
  );

  animatedElements.forEach((el) => observer.observe(el));
});

// ////////////////////////////////////////////////////////////
const slidesWrapper = document.getElementById("slidesWrapper");
const slides = document.querySelectorAll(".slide");
let index = 0;
const slidesPerView = 2;
const totalSlides = Math.ceil(slides.length / slidesPerView);

function moveSlider() {
  index = (index + 1) % totalSlides;
  slidesWrapper.style.transform = `translateX(-${index * 100}%)`;
}

// auto-slide every 6s
setInterval(moveSlider, 6000);
