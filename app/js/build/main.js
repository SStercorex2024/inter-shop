console.log("=== MAIN START ===");
if (document.querySelector('.accessories__slider')) {
  const swiper = new Swiper(".accessories__slider", {
    slidesPerView: 3,
    spaceBetween: 40,
    loop: true,
    navigation: {
      nextEl: ".arrow-next",
      prevEl: ".arrow-prev",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
}
function sanitizeInput(str) {
  return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", function (e) {
    const inputs = form.querySelectorAll("input");
    inputs.forEach((input) => {
      input.value = sanitizeInput(input.value);
    });
  });
}
const likeButtons = document.querySelectorAll(".collections__like");
if (likeButtons.length > 0) {
  likeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("collections__like-active");
    });
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const blogLinks = document.querySelectorAll(".blog-one__link");
  if (blogLinks.length > 0) {
    console.log("click");
    blogLinks.forEach((link) => {
      link.addEventListener("click", () => {
        link.classList.add("blog-one__link--active");
      });
    });
  }
});


console.log("=== TEST MODULE ===");

console.log("=== MAIN УТВ ===");