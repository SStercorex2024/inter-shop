const clickForWidthOnImgReviews = () => {
  const imgs = document.querySelectorAll('.reviews-card__img');

  imgs.forEach(img => {
    img.addEventListener('click', () => {
      img.classList.toggle('active');
    })
  })
}

