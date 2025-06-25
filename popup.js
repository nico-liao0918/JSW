// Popup JS

window.onload = () => {
  setTimeout(() => {
    const dismissed = localStorage.getItem("popupDismissed");
    if (!dismissed) {
      document.getElementById("popup").classList.remove("popup_hidden");
    }
  }, 60000);
};

function closePopup() {
  document.getElementById("popup").classList.add("popup_hidden");
  localStorage.setItem("popupDismissed", "true");
}

document.getElementById("paymentForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const category = document.getElementById("category").value.trim().replace(/\s+/g, '-');
  const number = document.getElementById("number").value.trim();
  const random = Math.floor(1000 + Math.random() * 9000);
  const trackingID = `JamesShopsWebsite-${category}-${number}-${random}`;

  document.getElementById("trackingID").value = trackingID;

  document.getElementById("popupID").textContent = trackingID;
  document.getElementById("popup").classList.remove("popup_hidden");

  document.querySelector("#popup button").onclick = () => {
    this.submit(); 
  };
});
