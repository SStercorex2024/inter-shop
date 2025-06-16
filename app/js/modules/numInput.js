const numbersInput = (selectInput) => {
  const inputs = document.querySelectorAll(selectInput);

  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      input.value = input.value.replace(/\D/g, "");
    });
  });
};
