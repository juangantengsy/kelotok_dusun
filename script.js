// Scroll navbar effect
window.addEventListener("scroll", function () {
  const header = document.getElementById("navbar");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
    header.classList.remove("transparent");
  } else {
    header.classList.remove("scrolled");
    header.classList.add("transparent");
  }
});

// Set default navbar to transparent
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("navbar").classList.add("transparent");
});
