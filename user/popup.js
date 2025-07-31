// popup.js

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