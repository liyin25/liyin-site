
document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("[data-menu-toggle]");
  const panel = document.querySelector("[data-mobile-panel]");
  if (button && panel) {
    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      panel.classList.toggle("show");
    });
  }
});
