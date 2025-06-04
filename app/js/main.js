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

// санітайзер
function initFormAndButtons() {
  function sanitizeInput(str) {
    return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  // обробка форми
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      const inputs = form.querySelectorAll("input");
      inputs.forEach((input) => {
        input.value = sanitizeInput(input.value);
      });
    });
  }

  // обробка кнопки лайку
  function btnChangeColor() {
    document.querySelectorAll(".collections__like").forEach((button) => {
      button.addEventListener("click", () => {
        button.classList.toggle("collections__like-active");
      });
    });
  }
  btnChangeColor();
}

initFormAndButtons();
