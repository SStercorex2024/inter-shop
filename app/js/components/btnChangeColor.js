export default function btnChangeColor() {
  document.querySelectorAll(".collections__like").forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("collections__like-active");
    });
  });
}
