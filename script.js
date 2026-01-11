document.addEventListener("DOMContentLoaded", () => {
  // Menu mobile
  const menuToggle = document.getElementById("menu-toggle");
  const navbar = document.querySelector(".navbar");

  if (menuToggle && navbar) {
    menuToggle.addEventListener("click", () => {
      navbar.classList.toggle("active");
    });
  }

  // Busca simples (filtra itens com data-filter)
  const searchForm = document.getElementById("search-form");
  const searchInput = document.getElementById("search-input");

  if (searchForm && searchInput) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const q = (searchInput.value || "").trim().toLowerCase();
      const items = document.querySelectorAll("[data-filter]");

      if (!items.length) return;

      items.forEach((el) => {
        const text = (el.getAttribute("data-filter") || "").toLowerCase();
        el.style.display = !q || text.includes(q) ? "" : "none";
      });
    });
  }
});
