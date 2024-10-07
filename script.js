"use strict";

const menu = document.querySelector(".menu-bar");
const nav = document.querySelector(".float-menu");
const closeMenu = document.querySelector(".float-close");

menu.addEventListener("click", () => {
  nav.classList.remove("d-none");
});

closeMenu.addEventListener("click", () => {
  nav.classList.add("d-none");
});
