const inputsCount = document.querySelectorAll(".range-count");

inputsCount.forEach((input) => {
  input.addEventListener("keydown", (e) => {
    if (
      e.key === "Backspace" ||
      e.key === "Delate" ||
      e.key === "ArrowLeft" ||
      e.key === "ArrowLeft" ||
      e.key === "Tab"
    ) {
      return;
    }

    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  });

  input.addEventListener("input", () => {
    input.value = input.value.replace(/\D/g, "");
  });
});
