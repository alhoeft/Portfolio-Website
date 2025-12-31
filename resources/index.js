
const path = window.location.pathname.split("/").pop();
document.querySelectorAll(".navbar-nav .nav-link").forEach((a) => {
  if (a.getAttribute("href")?.includes(path)) a.classList.add("active");
});