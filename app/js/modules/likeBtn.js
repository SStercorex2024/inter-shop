function likeBtn() {
  const likeButtons = document.querySelectorAll(".collections__like");
  if (likeButtons.length > 0) {
    likeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        button.classList.toggle("collections__like-active");
      });
    });
  }
}
