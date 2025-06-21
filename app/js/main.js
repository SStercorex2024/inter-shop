//= include modules/swiper.js
//= include modules/swiperCustomer.js
//= include modules/sanitizeInput.js
//= include modules/likeBtn.js
//= include modules/linkActive.js
//= include modules/rangeSlider.js
//= include modules/inputsCount.js
//= include modules/viewMode.js
//= include modules/numInput.js
//= include modules/mobileMenuBtn.js

if (typeof mobileMenuBtn === "function") mobileMenuBtn();
if (typeof numbersInput === "function") {
  numbersInput(".input-numbers-only");
}
if (typeof viewMode === "function") viewMode();
if (typeof inputsCount === "function") inputsCount();
if (typeof rangeSlider === "function") rangeSlider();
if (typeof swiperCustomer === "function") swiperCustomer();
if (typeof swiperInit === "function") swiperInit();
if (typeof initSanitize === "function") initSanitize();
if (typeof likeBtn === "function") likeBtn();
if (typeof linkActive === "function") linkActive();

// тимчасово функція в мейі.

function viewMode() {
  const gridBtn = document.querySelector(".view-mode__btn--grid");
  const lineBtn = document.querySelector(".view-mode__btn--line");
  const cardsContainer = document.querySelector(".view-mode__cards");
  const viewBtns = document.querySelectorAll(".view-mode__btn-wrapper");

  if (!gridBtn || !lineBtn || !cardsContainer) return;

  const toggleView = (mode) => {
    cardsContainer.classList.toggle("view-mode__cards--grid", mode === "grid");
    cardsContainer.classList.toggle("view-mode__cards--line", mode === "line");

    viewBtns.forEach((btn) =>
      btn.classList.remove("view-mode__btn-wrapper--active")
    );

    if (mode === "grid") {
      gridBtn
        .closest(".view-mode__btn-wrapper")
        .classList.add("view-mode__btn-wrapper--active");
    } else {
      lineBtn
        .closest(".view-mode__btn-wrapper")
        .classList.add("view-mode__btn-wrapper--active");
    }
  };

  gridBtn.addEventListener("click", () => toggleView("grid"));
  lineBtn.addEventListener("click", () => toggleView("line"));
}
