function updateThemeIcon(theme: string): void {
  const icon = document.querySelector("[data-theme-icon]");

  if (icon) {
    icon.textContent = theme === "dark" ? "🌙" : "☀️";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".theme-toggle");

  const currentTheme = document.documentElement.dataset.theme || "light";

  updateThemeIcon(currentTheme);

  button?.addEventListener("click", () => {
    const currentTheme = document.documentElement.dataset.theme || "light";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);

    updateThemeIcon(nextTheme);
  });
});