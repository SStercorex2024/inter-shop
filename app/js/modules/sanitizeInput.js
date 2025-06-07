function sanitizeInput(str) {
  return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function initSanitize() {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      const inputs = form.querySelectorAll("input");
      inputs.forEach((input) => {
        input.value = sanitizeInput(input.value);
      });
    });
  }
}
