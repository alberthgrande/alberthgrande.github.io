const ToggleMenu = document.querySelector(".toggle-menu");
const OpenToggle = document.querySelector(".fa-bars");
const CloseToggle = document.querySelector(".fa-xmark");
const NavBar = document.querySelector(".nav-bar");

// event
ToggleMenu.addEventListener("click", () => {
  OpenToggle.classList.toggle("open");
  CloseToggle.classList.toggle("open");
  NavBar.classList.toggle("active");
});
