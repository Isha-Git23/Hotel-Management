document.addEventListener("DOMContentLoaded", function () {
    // const name = document.getElementById("name");
    const stars = document.querySelectorAll(".star");
    const comment = document.getElementById("comment");
    const submitButton = document.getElementById("submit-feedback");
    const confirmation = document.getElementById("confirmation");

    let rating = 0;

    stars.forEach((star) => {
        star.addEventListener("click", function () {
            rating = parseInt(star.getAttribute("data-rating"));
            stars.forEach((s) => {
                s.style.color = rating >= parseInt(s.getAttribute("data-rating")) ? "#f2b01e" : "#ccc";
            });
        });
    });
    submitButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default form submission behavior.
    
        const feedback = {
        //    name: name,
            rating: rating,
            comment: comment.value,
        };
    
        // Send feedback to the server using an AJAX request.
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "thanksp.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // Handle the response from the server
                alert(xhr.responseText);
            }
        };
    
        // Send the data as a URL-encoded string
        xhr.send("rating=" + feedback.rating + "&comment=" + encodeURIComponent(feedback.comment));
    
        // Confirmation message
        confirmation.style.display = "block";
    });
});