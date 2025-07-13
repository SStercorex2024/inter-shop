const swiper = new Swiper('.swiper', {
  loop: true,
});

const clickForWidthOnImgReviews = () => {
  const imgs = document.querySelectorAll('.reviews-card__img');

  imgs.forEach(img => {
    img.addEventListener('click', () => {
      img.classList.toggle('active');
    })
  })
}

const inputsCount = () => {
  const inputsC = document.querySelectorAll(".range-count");
  inputsC.forEach((input) => {
    input.addEventListener("keydown", (e) => {
      if (
        e.key === "Backspace" ||
        e.key === "Delete" ||
        e.key === "ArrowLeft" ||
        e.key === "ArrowLeft" ||
        e.key === "Tab"
      ) {
        return;
      }

      if (!/[0-9]/.test(e.key)) {
        e.preventDefault();
      }
    });

    input.addEventListener("input", () => {
      input.value = input.value.replace(/\D/g, "");
    });
  })
}

const likeBtn = () => {
  const likeButtons = document.querySelectorAll(".collections__like");
  if (likeButtons.length > 0) {
    likeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        button.classList.toggle("collections__like-active");
      });
    });
  }
}

const linkActive = () => {
  const blogLinks = document.querySelectorAll(".blog-one__link");
  if (blogLinks.length > 0) {
    blogLinks.forEach((link) => {
      link.addEventListener("click", () => {
        link.classList.add("blog-one__link--active");
      });
    });
  }
}

const mobileMenuBtn = () => {
  const menuBtn = document.querySelector(".menu__btn");
  const menu = document.querySelector(".menu");

  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("menu--active");
  });
};

const numbersInput = (selectInput) => {
  const inputs = document.querySelectorAll(selectInput);

  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      input.value = input.value.replace(/\D/g, "");
    });
  });
};

const rangeSlider = () => {
  const rangeSlider = document.querySelector(".range__slider");
  const inputMin = document.querySelector(".range__min");
  const inputMax = document.querySelector(".range__max");

  let isInputChange = false;

  if (rangeSlider && inputMin && inputMax) {
    noUiSlider.create(rangeSlider, {
      start: [300, 3000],
      step: 100,
      range: {
        min: 300,
        max: 3000,
      },
      connect: true,
    });

    rangeSlider.noUiSlider.on("update", (values, handle) => {
      if (isInputChange) return;

      const value = Math.round(values[handle]);
      if (handle === 0) {
        inputMin.value = value;
      } else {
        inputMax.value = value;
      }
    });

    inputMin.addEventListener("change", (e) => {
      e.preventDefault();
      isInputChange = true;
      const min = +inputMin.value;
      rangeSlider.noUiSlider.set([min, null]);
      setTimeout(() => (isInputChange = false), 10);
    });

    inputMax.addEventListener("change", (e) => {
      e.preventDefault();
      isInputChange = true;
      const max = +inputMax.value;
      rangeSlider.noUiSlider.set([null, max]);
      setTimeout(() => (isInputChange = false), 10);
    });

    const handles = rangeSlider.querySelectorAll(".noUi-handle");
    handles.forEach((handle) => handle.setAttribute("tabindex", "0"));

    document.querySelectorAll(".range__min, .range__max").forEach((input) => {
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          input.dispatchEvent(new Event("change", {bubbles: true}));
        }
      });
    });
  }
}

const sanitizeInput = (str) => {
  return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

const initSanitize = () => {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      const inputs = form.querySelectorAll("input");
      inputs.forEach((input) => {
        input.value = sanitizeInput(input.value);
      });
    });
  }
}

const swiperInit = () => {
  const el = document.querySelector(".accessories__slider");
  if (!el) return;

  const swiper = new Swiper(el, {
    loop: true,
    navigation: {
      nextEl: ".arrow-next",
      prevEl: ".arrow-prev",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      360: {
        spaceBetween: 10,
        slidesPerView: 1,
      },
      768: {
        spaceBetween: 40,
        slidesPerView: 2,
      },
      1000: {
        spaceBetween: 30,
        slidesPerView: 4,
      },
    }
  });
}

const swiperCustomer = () => {
  const el = document.querySelector(".reviews__slider");
  if (!el) return;

  const swiper = new Swiper(el, {
    loop: true,
    pagination: {
      el: ".reviews__slider-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".reviews__slider-next",
      prevEl: ".reviews__slider-prev",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      360: {
        spaceBetween: 10,
        slidesPerView: 2,
      },
      768: {
        spaceBetween: 16,
        slidesPerView: 4,
      },
      1000: {
        spaceBetween: 16,
        slidesPerView: 8,
      },
    }
  });
}

const viewMode = () => {
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

const blogChangeGridToLine = () => {
  const btns = document.querySelector('.blog__btns');
  if (!btns) return;  // Если элемент не найден — выходим из функции

  const cards = document.querySelector('.blog__cards');
  const btnLine = document.querySelector('.view-mode__btn--line');
  const btnGrid = document.querySelector('.view-mode__btn--grid');

  btns.addEventListener('click', (click) => {
    const target = click.target.closest('.blog__btn');

    if (target && target.classList.contains('blog__btn')) {
      if (target === btnGrid) {
        btnGrid.classList.add('active');
        btnLine.classList.remove('active');
        cards.classList.remove('view-mode__cards--line');
        cards.classList.add('view-mode__cards--grid');
      }
      if (target === btnLine) {
        btnLine.classList.add('active');
        btnGrid.classList.remove('active');
        cards.classList.remove('view-mode__cards--grid');
        cards.classList.add('view-mode__cards--line');
      }
    }
  });
}

if (typeof blogChangeGridToLine === "function") blogChangeGridToLine()
if (typeof clickForWidthOnImgReviews === "function") clickForWidthOnImgReviews()
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