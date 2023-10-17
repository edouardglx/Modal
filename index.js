const burgerMenu = document.querySelector(".fa-bars");
const xMark = document.querySelector(".fa-xmark");
const modal = document.querySelector(".modal");

burgerMenu.addEventListener("click", () => {
  modal.classList.add("change-modal");
});

xMark.addEventListener("click", () => {
  modal.classList.remove("change-modal");
});
