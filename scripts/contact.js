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
