const navToggle = document.getElementById("nav-toggle");
const navMenu = document.querySelector(".nav ul");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

function updateOpenStatus() {
  const now = new Date();
  const day = now.getDay(); // 0-6
  const hours = now.getHours() + now.getMinutes() / 60;
  let open = false;

  if (day >= 1 && day <= 5) {
    open = hours >= 8 && hours < 20; // Mon-Fri 8am-8pm
  } else if (day === 6) {
    open = hours >= 8 && hours < 14; // Sat 8am-2pm
  }

  const statusEl = document.getElementById("open-status");
  statusEl.textContent = open ? "Open" : "Closed";
  statusEl.className = open ? "open" : "closed";
}

updateOpenStatus();
setInterval(updateOpenStatus, 60000);
