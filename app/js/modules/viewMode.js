function viewMode() {
  const gridBtn = document.querySelector(".view-mode__btn--grid");
  const lineBtn = document.querySelector(".view-mode__btn--line");
  const cardsContainer = document.querySelector(".view-mode__cards");
  const viewBtns = document.querySelectorAll(".view-mode__btn-wrapper");

  if (!gridBtn || !lineBtn || !cardsContainer) return;

  const toggleView = (mode) => {
    cardsContainer.classList.toggle("view-mode__cards--grid", mode === "grid");
    cardsContainer.classList.toggle("view-mode__cards--line", mode === "line");

    viewBtns.forEach((btn) =>
      btn.classList.remove("view-mode__btn-wrapper--active")
    );

    if (mode === "grid") {
      gridBtn
        .closest(".view-mode__btn-wrapper")
        .classList.add("view-mode__btn-wrapper--active");
    } else {
      lineBtn
        .closest(".view-mode__btn-wrapper")
        .classList.add("view-mode__btn-wrapper--active");
    }
  };

  gridBtn.addEventListener("click", () => toggleView("grid"));
  lineBtn.addEventListener("click", () => toggleView("line"));
}

