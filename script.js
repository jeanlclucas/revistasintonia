document.addEventListener("DOMContentLoaded", () => {
  const dataElement = document.querySelector(".data");
  if (dataElement) {
    const hoje = new Date();
    const options = { day: "2-digit", month: "long", year: "numeric" };
    dataElement.textContent = hoje.toLocaleDateString("pt-BR", options);
  }
});
