const menuBtn = document.querySelector(".menu-btn");
const navItems = document.getElementById("nav-items");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  navItems.setAttribute("data-visible", true);
  if (!menuOpen) {
    menuBtn.classList.add("open");
    navItems.setAttribute("data-visible", true);
    menuBtn.setAttribute("aria-expanded", true);
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    navItems.setAttribute("data-visible", false);
    menuBtn.setAttribute("aria-expanded", false);
    menuOpen = false;
  }
});
