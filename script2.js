// script2.js
document.getElementById("bookButton").addEventListener("click", function() {
    document.getElementById("bookingModal").style.display = "block";
    // Hide the success message when the modal is opened
    document.getElementById("successMessage").style.display = "none";
});

document.getElementById("closeModal").addEventListener("click", function() {
    document.getElementById("bookingModal").style.display = "none";
});

document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Collect form data
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("date", date);
    formData.append("time", time);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "book.php", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Handle the response from the server
            if (xhr.responseText === "success") {
                // Booking was successful, display the success message
                document.getElementById("bookingModal").style.display = "none";
                document.getElementById("successMessage").style.display = "block";
            }
        }
    };
    xhr.send(formData);
});
