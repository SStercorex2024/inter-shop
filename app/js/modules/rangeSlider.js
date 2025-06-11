function rangeSlider() {
  const rangeSlider = document.querySelector(".range__slider");
  const inputMin = document.querySelector(".range__min");
  const inputMax = document.querySelector(".range__max");

  let isInputChange = false;

  if (rangeSlider && inputMin && inputMax) {
    noUiSlider.create(rangeSlider, {
      start: [300, 3000],
      step: 100,
      range: {
        min: 300,
        max: 3000,
      },
      connect: true,
    });

    rangeSlider.noUiSlider.on("update", (values, handle) => {
      if (isInputChange) return;

      const value = Math.round(values[handle]);
      if (handle === 0) {
        inputMin.value = value;
      } else {
        inputMax.value = value;
      }
    });

    inputMin.addEventListener("change", (e) => {
      e.preventDefault();
      isInputChange = true;
      const min = +inputMin.value;
      rangeSlider.noUiSlider.set([min, null]);
      setTimeout(() => (isInputChange = false), 10);
    });

    inputMax.addEventListener("change", (e) => {
      e.preventDefault();
      isInputChange = true;
      const max = +inputMax.value;
      rangeSlider.noUiSlider.set([null, max]);
      setTimeout(() => (isInputChange = false), 10);
    });

    const handles = rangeSlider.querySelectorAll(".noUi-handle");
    handles.forEach((handle) => handle.setAttribute("tabindex", "0"));

    document.querySelectorAll(".range__min, .range__max").forEach((input) => {
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          input.dispatchEvent(new Event("change", { bubbles: true }));
        }
      });
    });
  }
}
