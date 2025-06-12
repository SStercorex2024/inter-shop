//= include modules/swiper.js
//= include modules/swiperCustomer.js
//= include modules/sanitizeInput.js
//= include modules/likeBtn.js
//= include modules/linkActive.js
//= include modules/rangeSlider.js
//= include modules/inputsCount.js

if (typeof inputsCount === "function") inputsCount();
if (typeof rangeSlider === "function") rangeSlider();
if (typeof swiperCustomer === "function") swiperCustomer();
if (typeof swiperInit === "function") swiperInit();
if (typeof initSanitize === "function") initSanitize();
if (typeof likeBtn === "function") likeBtn();
if (typeof linkActive === "function") linkActive();
