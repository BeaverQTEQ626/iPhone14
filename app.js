const apps = document.querySelectorAll(".app");
const screen = document.querySelector(".screen");

let currentApp = null;

apps.forEach(app => {
  app.addEventListener("click", () => {
    openApp(app.textContent);
  });
});

function openApp(icon) {
  screen.innerHTML = `
    <div class="app-view">
      <h1>${getAppName(icon)}</h1>
      <p>Đây là app mô phỏng iPhone</p>
      <button onclick="goHome()">🏠 Home</button>
    </div>
  `;
}

function goHome() {
  location.reload(); // quay về màn hình chính
}

function getAppName(icon) {
  switch (icon) {
    case "📞": return "Phone";
    case "💬": return "Messages";
    case "🌐": return "Safari";
    case "⚙️": return "Settings";
    default: return "App";
  }
  }
