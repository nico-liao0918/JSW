// Login JS

async function sha256(text) {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}

document.getElementById("loginForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const hash = await sha256(password);

  try {
    const res = await fetch("premium.json");
    const users = await res.json();

    const match = users.find(u => u.Username === username && u.Password === hash);

    const saved = localStorage.getItem("activeUser")
    const active = sessionStorage.getItem("activeUser")

    if (match) {
      localStorage.setItem("username", username);
      localStorage.setItem("passwordHash", hash);
      localStorage.setItem("loginTime", Date.now());
      localStorage.setItem("activeUser", saved)
      sessionStorage.setItem("activeUser", active)
      window.location.href = "dashboard.html";
    } else {
      document.getElementById("message").textContent = "❌ Invalid username or password.";
    }
  } catch (err) {
    console.error("Error loading premium.json", err);
    alert("Could not load user list.");
  }
});
