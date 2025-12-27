// Set year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Highlight active nav link
const path = window.location.pathname.split("/").pop(); // e.g. index.html
document.querySelectorAll(".nav a").forEach((a) => {
  if (a.getAttribute("href")?.includes(path)) a.classList.add("active");
});

//PROJECTS
const projects = [
  {
    title: "Repquest Fitness Tracker",
    desc: "Path-centered fitness tracker, geared towards beginner. I specially designed the back-end and achievements page. The database is no longer running, but you can view the working demo here: https://youtu.be/5c3FhmaF4d4?si=ijFUmo8AmS7LZIrL. You can also view the live website without the databse, by bypassing the login (view as guest).",
    bullets: [
      "Node/Express + Postgres + Docker",
      "Achievements + workout logging",
      "Session auth + clean UI"
    ],
    img: "./resources/imgs/repquest_screenshot.jpg", 
    live: "https://group-project-buffbuffs-repquest.onrender.com", 
    code: "https://github.com/CU-CSCI3308-Fall2025/group-project-BuffBuffs-RepQuest"
  },
  {
    title: "Portfolio Website",
    desc: "Tbiewqc",
    bullets: ["Vite + Bootstrap", "Responsive layout", "Fast iteration"],
    img: "./resources/imgs/portfolio.png",
    live: "#",
    code: "#"
  }
];

let current = 0;
function renderProject(i, direction = "right") {
  const card = document.getElementById("projectCard");
  if (!card) return;

  card.classList.add(direction === "right" ? "slide-out-left" : "slide-out-right");

  setTimeout(() => {
    const p = projects[i];
    document.getElementById("projTitle").textContent = p.title;
    document.getElementById("projDesc").textContent = p.desc;

    const bulletsEl = document.getElementById("projBullets");
    bulletsEl.innerHTML = "";
    p.bullets.forEach((b) => {
      const li = document.createElement("li");
      li.textContent = b;
      bulletsEl.appendChild(li);
    });

    document.getElementById("projImg").src = p.img;

    card.classList.remove("slide-out-left", "slide-out-right");
    card.style.transform = "translateX(0)";
    card.style.opacity = "1";
  }, 260);
}

function nextProject() {
  current = (current + 1) % projects.length;
  renderProject(current, "right");
}

function prevProject() {
  current = (current - 1 + projects.length) % projects.length;
  renderProject(current, "left");
}

document.addEventListener("DOMContentLoaded", () => {
  // initial render so the first project appears
  renderProject(current, "right");

  // hook up buttons
  document.getElementById("projNext")?.addEventListener("click", nextProject);
  document.getElementById("projPrev")?.addEventListener("click", prevProject);
});
