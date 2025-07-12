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
//= include modules/clickForWidthOnImgReviews.js
//= include modules/blogChangeGridToLine.js
//
// if (typeof blogChangeGridToLine === "function") blogChangeGridToLine()
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

const blogChangeGridToLine = () => {
  const btns = document.querySelector('.blog__btns')
  const cards = document.querySelector('.blog__cards')
  const btnLine = document.querySelector('.view-mode__btn--line')
  const btnGrid = document.querySelector('.view-mode__btn--grid')

  btns.addEventListener('click', (click) => {
    const target = click.target.closest('.blog__btn')

    if (target.classList.contains('blog__btn')) {
      if (target === btnGrid) {
        btnGrid.classList.add('active')
        btnLine.classList.remove('active')
        cards.classList.remove('view-mode__cards--line')
        cards.classList.add('view-mode__cards--grid')
      }
      if (target === btnLine) {
        btnLine.classList.add('active')
        btnGrid.classList.remove('active')
        cards.classList.remove('view-mode__cards--grid')
        cards.classList.add('view-mode__cards--line')
      }
    }
  })
}

if (typeof clickForWidthOnImgReviews === "function") blogChangeGridToLine()