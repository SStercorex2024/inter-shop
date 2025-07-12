function swiperCustomer() {
  const swiper = new Swiper(".reviews__slider", {
    // grabCursor: true,
    // centeredSlides: true,

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
