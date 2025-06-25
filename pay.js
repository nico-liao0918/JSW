// Pay JS

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("paymentForm");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const category = document.getElementById("category").value.trim().replace(/\s+/g, '-');
    const number = document.getElementById("number").value.trim();
    const random = Math.floor(1000 + Math.random() * 9000);
    const trackingID = `JamesShopsWebsite-${category}-${number}-${random}`;

    document.getElementById("trackingID").value = trackingID;
    document.getElementById("popupID").textContent = trackingID;

    document.getElementById("popupTrack").classList.remove("popup_hidden");

    document.getElementById("popupTrackSubmit").onclick = () => {
      navigator.clipboard.writeText(trackingID)
        .then(() => {
          alert("Tracking ID copied to clipboard:\n" + trackingID);
        })
        .catch(() => {
          alert("Tracking ID (could not copy):\n" + trackingID);
        })
        .finally(() => {
          form.submit();
        });
    };
  });
});
