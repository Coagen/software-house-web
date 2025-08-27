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
