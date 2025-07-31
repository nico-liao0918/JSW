// Content JS

function logout() {
  localStorage.clear();
  window.location.href = "login.html";
}

function showCountdown(timeLeft) {
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((timeLeft / (1000 * 60)) % 60);
  const secs = Math.floor((timeLeft / 1000) % 60);
  document.getElementById("countdown").textContent =
    `⏳ Time left: ${days}d ${hours}h ${mins}m ${secs}s`;
}

function checkAccess() {
  const username = localStorage.getItem("username");
  const loginTime = parseInt(localStorage.getItem("loginTime"));

  if (!username || !loginTime) {
    logout();
  }

  const timePassed = Date.now() - loginTime;
  const timeLimit = 7 * 24 * 60 * 60 * 1000;

  if (timePassed > timeLimit) {
    alert("⏰ Your 7-day access has expired.");
    logout();
  } else {
    const timeLeft = timeLimit - timePassed;
    document.getElementById("welcome").textContent = `👋 Hello, ${username}!`;
    showCountdown(timeLeft);
    setInterval(() => showCountdown(timeLimit - (Date.now() - loginTime)), 1000);
  }
}

checkAccess();
