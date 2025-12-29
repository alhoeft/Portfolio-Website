// Set year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Highlight active nav link
const path = window.location.pathname.split("/").pop(); // e.g. index.html
document.querySelectorAll(".navbar-nav .nav-link").forEach((a) => {
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
    title: "Collection",
    desc: "Simple, collision based game with the intent to avoid enemies and collect blocks.",
    bullets: ["Unity", "C#"],
    img: "./resources/imgs/collection.jpg",
    live: "https://github.com/alhoeft/Collection-Game/blob/main/Collection%20Game.exe",
    code: "https://github.com/alhoeft/Collection-Game"
  },
  {
    title: "Portfolio Website",
    desc: "Website showcasing my personal projects, experience, and interests.",
    bullets: ["Vite + Bootstrap", "Responsive layout", "Fast iteration"],
    img: "./resources/imgs/portfolio.jpg",
    live: "https://alhoeft.github.io/Portfolio-Website/index.html",
    code: "https://github.com/alhoeft/Portfolio-Website"
  },
  {
    title: "FTC Robotics",
    desc: "Founding team member. Competed in First Tech Challenge, going over 0.500. I lead the team in programming and managerial aspects. Our robot, \"Fluffy\", could move, turn, pickup objects, and launch a paper airplane.",
    bullets: ["Java", "Department of Defense Grant"],
    img: "./resources/imgs/fluffy.jpg",
    live: "",
    code: ""
  }
];

let current = 0;
function renderProject(i, direction = "right") {
  const card = document.getElementById("projectCard");
  if (!card) return;

  card.classList.add(direction === "right" ? "slide-out-left" : "slide-out-right");

  setTimeout(() => {
    const p = projects[i];

    const titleEl = document.getElementById("projTitle");
    const descEl = document.getElementById("projDesc");
    const bulletsEl = document.getElementById("projBullets");
    const imgEl = document.getElementById("projImg");
    const liveEl = document.getElementById("projLive");
    const codeEl = document.getElementById("projCode");

    // If your HTML IDs don't match, don't crash the whole page
    if (!titleEl || !descEl || !bulletsEl || !imgEl || !liveEl || !codeEl) {
      console.error("Missing project elements. Check IDs:", {
        titleEl, descEl, bulletsEl, imgEl, liveEl, codeEl
      });
      card.classList.remove("slide-out-left", "slide-out-right");
      return;
    }

    titleEl.textContent = p.title;
    descEl.textContent = p.desc;

    bulletsEl.innerHTML = "";
    p.bullets.forEach((b) => {
      const li = document.createElement("li");
      li.textContent = b;
      bulletsEl.appendChild(li);
    });

    imgEl.src = p.img;

    // Live
    if (p.live && p.live !== "#") {
      liveEl.href = p.live;
      liveEl.classList.remove("d-none");
    } else {
      liveEl.removeAttribute("href");
      liveEl.classList.add("d-none");
    }

    // Code
    if (p.code && p.code !== "#") {
      codeEl.href = p.code;
      codeEl.classList.remove("d-none");
    } else {
      codeEl.removeAttribute("href");
      codeEl.classList.add("d-none");
    }

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
