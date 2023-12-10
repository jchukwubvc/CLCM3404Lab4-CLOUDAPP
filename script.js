// script.js
document.addEventListener("DOMContentLoaded", function () {
    const reservationForm = document.getElementById("reservationForm");

    reservationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Fetch form data
        const customerName = document.getElementById("customerName").value;
        const email = document.getElementById("email").value;
        const date = document.getElementById("date").value;

        // You can perform further actions with the form data (e.g., submit to a server).
        alert("Reservation Submitted:" + customerName +","+email + ","+date );

        // Clear form fields
        document.getElementById("customerName").value = "";
        document.getElementById("email").value = "";
        document.getElementById("date").value = "";
    });
});
