const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navLinksItems = document.querySelectorAll(".nav-links a");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const icon = menuToggle.querySelector("ion-icon");
    if (navLinks.classList.contains("active")) {
      icon.setAttribute("name", "close-outline");
    } else {
      icon.setAttribute("name", "menu-outline");
    }
  });
}

navLinksItems.forEach((link) => {
  link.addEventListener("click", () => {
    if (navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
      const icon = menuToggle.querySelector("ion-icon");
      icon.setAttribute("name", "menu-outline");
    }
  });
});

const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
