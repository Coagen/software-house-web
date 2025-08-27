//Body on Click
document.querySelectorAll("button[data-target]").forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.getAttribute("data-target");

    // add fade-out class
    document.body.classList.add("fade-out");

    // wait for animation then redirect
    setTimeout(() => {
      window.location.href = target;
    }, 600); // match transition time
  });
});

// ensure body fades in when page loads
window.addEventListener("pageshow", () => {
  document.body.classList.remove("fade-out");
});
//navbar on scroll
const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const menuList = document.getElementById("menuList");

// Show navbar on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight / 3) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-150px";
  }
});

// Toggle hamburger menu
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menuList.classList.toggle("active");
});

// // Active Link UnderLine Start
// const menuLinks = document.querySelectorAll(".menuLink");
// menuLinks.forEach((link) => {
//   link.addEventListener("click", () => {
//     menuLinks.forEach((l) => l.classList.remove("active")); // remove old active
//     link.classList.add("active"); // set new active
//   });
// });
// // Active Link UnderLine End

// ................................................
// Intersection Observer for text + image animations
// const image = document.querySelector(".fade-img");
const text = document.querySelector(".text-side");
const image = document.querySelector(".image-side");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.3 }
);

observer.observe(text);
observer.observe(image);

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
document.addEventListener("DOMContentLoaded", () => {
  const qualityCards = document.querySelectorAll(".quality-card");
  const qualityImage = document.querySelector(".quality-img");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animate cards with delay
          qualityCards.forEach((card, index) => {
            setTimeout(() => card.classList.add("show"), index * 200);
          });

          // Animate big image
          if (qualityImage) {
            qualityImage.classList.add("show");
          }

          observer.unobserve(entry.target); // stop re-triggering
        }
      });
    },
    { threshold: 0.3 }
  );

  if (qualityCards.length > 0) {
    observer.observe(qualityCards[0]); // trigger when first card enters
  }
});
// ////////////////////////////////////////////////////////////
// will comment
// document.addEventListener("DOMContentLoaded", () => {
//   const statCards = document.querySelectorAll(".stats-card");
//   const statNumbers = document.querySelectorAll(".stats-number");

//   const animateValue = (el, start, end, duration) => {
//     let startTime = null;

//     const step = (timestamp) => {
//       if (!startTime) startTime = timestamp;
//       const progress = Math.min((timestamp - startTime) / duration, 1);
//       const value = Math.floor(progress * (end - start) + start);
//       el.textContent = value + (el.dataset.suffix || ""); // keep suffix like "+"
//       if (progress < 1) requestAnimationFrame(step);
//     };

//     requestAnimationFrame(step);
//   };

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("show");

//           // Animate number count-up
//           const numberEl = entry.target.querySelector(".stats-number");
//           if (numberEl && !numberEl.dataset.animated) {
//             const raw = numberEl.textContent.trim();
//             const endValue = parseInt(raw.replace(/\D/g, "")); // extract digits
//             const suffix = raw.replace(/[0-9]/g, ""); // keep suffix like "+"
//             numberEl.dataset.suffix = suffix;
//             numberEl.dataset.animated = "true";
//             animateValue(numberEl, 0, endValue, 1500);
//           }

//           observer.unobserve(entry.target); // prevent re-trigger
//         }
//       });
//     },
//     { threshold: 0.3 }
//   );

//   statCards.forEach((card) => observer.observe(card));
// });
//PARTNER ///////////////////////////////////////////////////////////
// document.addEventListener("DOMContentLoaded", () => {
//   const partnerCards = document.querySelectorAll(".partner-card");

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("show");
//           observer.unobserve(entry.target);
//         }
//       });
//     },
//     { threshold: 0.3 }
//   );

//   partnerCards.forEach((card) => observer.observe(card));
// });

// ////////////////////////////////////////////////////////////
const slidesWrapper = document.getElementById("slidesWrapper");
const slides = document.querySelectorAll(".slide");
let index = 0;

function getSlidesPerView() {
  if (window.innerWidth < 768) return 1; // mobile
  if (window.innerWidth < 1024) return 1.5; // tablet
  return 2; // desktop
}

function moveSlider() {
  const slidesPerView = getSlidesPerView();
  const totalSlides = Math.ceil(slides.length / slidesPerView);
  index = (index + 1) % totalSlides;
  slidesWrapper.style.transform = `translateX(-${index * 100}%)`;
}

// auto-slide every 6s
setInterval(moveSlider, 6000);

// reset index on resize (to avoid glitches)
window.addEventListener("resize", () => {
  index = 0;
  slidesWrapper.style.transform = "translateX(0)";
});

// ///////////////////////////////////////////////////////
document.getElementById("year").textContent = new Date().getFullYear();

// Subscribe button animation
document
  .querySelector(".newsletter-btn")
  .addEventListener("click", function () {
    this.textContent = "Subscribed ✔";
    setTimeout(() => (this.textContent = "Subscribe →"), 2000);
  });
