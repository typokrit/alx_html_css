const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Toggle menu on label (hamburger) click
menuToggle.addEventListener("change", () => {
  navLinks.style.display = menuToggle.checked ? "flex" : "none";
});

// Optional: Close menu when a link is clicked (for better UX)
navLinks.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    menuToggle.checked = false;
    navLinks.style.display = "none";
  })
);
