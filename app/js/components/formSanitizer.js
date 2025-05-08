function sanitizeForm(formSelector) {
    function sanitizeInput(str) {
      return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
  
    const form = document.querySelector(formSelector);
    if (!form) return;
  
    form.addEventListener("submit", function (e) {
      const inputs = form.querySelectorAll("input");
      inputs.forEach((input) => {
        input.value = sanitizeInput(input.value);
      });
    });
  }
  
  export default sanitizeForm;
  