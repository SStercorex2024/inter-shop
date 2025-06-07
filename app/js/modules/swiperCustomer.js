function swiperCustomer() {
  const swiper = new Swiper(".reviews__slider", {
    grabCursor: true,

    slidesPerView: 8.5,
    centeredSlides: true,

    spaceBetween: 16,
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
  });
}
