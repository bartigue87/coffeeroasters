const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    console.log("hello");
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    console.log("bye");
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});
