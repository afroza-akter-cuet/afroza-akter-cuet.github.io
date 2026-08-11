const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const publicationGrid = document.getElementById("publicationGrid");
const togglePublications = document.getElementById("togglePublications");

if (publicationGrid && togglePublications) {
  togglePublications.addEventListener("click", () => {
    const expanded = publicationGrid.classList.toggle("expanded");
    togglePublications.textContent = expanded
      ? "Show fewer publications"
      : "Show all 14 publications";
  });
}
