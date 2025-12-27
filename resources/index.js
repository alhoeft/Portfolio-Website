// Set year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Highlight active nav link
const path = window.location.pathname.split("/").pop(); // e.g. index.html
document.querySelectorAll(".nav a").forEach((a) => {
  if (a.getAttribute("href")?.includes(path)) a.classList.add("active");
});
