document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("mobile-menu-toggle");
  const menu = document.getElementById("mobile-menu");

  button?.addEventListener("click", () => {
    menu?.classList.toggle("is-open");
  });

  const links = menu?.querySelectorAll("a");

  links?.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
    });
  });
});