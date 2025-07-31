// Dashboard JS

function logout() {
  localStorage.clear();
  window.location.href = "login.html";
}

async function loadDashboard() {
  const username = localStorage.getItem("username");
  if (!username) return logout();

  document.getElementById("welcome").textContent = `👋 Hello, ${username}`;

}

loadDashboard();
