function linkActive() {
  const blogLinks = document.querySelectorAll(".blog-one__link");
  if (blogLinks.length > 0) {
    blogLinks.forEach((link) => {
      link.addEventListener("click", () => {
        link.classList.add("blog-one__link--active");
      });
    });
  }
}
