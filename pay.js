// Pay JS

const form = document.getElementById("orderForm");

form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    const category = document.getElementById("category").value.trim().replace(/\s+/g, '-');
    const number = document.getElementById("productNumber").value.trim();
    const random = Math.floor(1000 + Math.random() * 9000);
    const trackingID = `YourShop-${category}-${number}-${random}`;

    document.getElementById("trackingID").value = trackingID;
    document.getElementById("popupID").textContent = trackingID;

    document.getElementById("popup").classList.remove("popup_hidden");
});

function submitForm() {
    document.getElementById("popup").classList.add("popup_hidden");
    form.submit(); 
}
