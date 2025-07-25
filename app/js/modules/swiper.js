import Swiper from "swiper";

function swiperInit() {
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
