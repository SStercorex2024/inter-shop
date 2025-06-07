//= include modules/swiper.js
//= include modules/swiperCustomer.js
//= include modules/sanitizeInput.js
//= include modules/likeBtn.js
//= include modules/linkActive.js

if (typeof swiperCustomer === "function") swiperCustomer();
if (typeof swiperInit === "function") swiperInit();
if (typeof initSanitize === "function") initSanitize();
if (typeof likeBtn === "function") likeBtn();
if (typeof linkActive === "function") linkActive();