// src/scripts/theme.js
document.getElementById("theme-toggle")?.addEventListener("click", () => {
  const html = document.documentElement;
  const current = html.classList.contains("dark");
  html.classList.toggle("dark", !current);
  localStorage.setItem("theme", !current ? "dark" : "light");
});

// Set theme on load
window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("theme");
  if (saved === "dark") document.documentElement.classList.add("dark");
});
