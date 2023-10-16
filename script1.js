document.addEventListener("DOMContentLoaded", function() {
    const openModalButton = document.getElementById("openModalButton");
    const closeModalButton = document.getElementById("closeModalButton");
    const modal = document.getElementById("modal");
    const signInForm = document.getElementById("signInForm");

    openModalButton.addEventListener("click", function() {
        modal.style.display = "block";
    });

    closeModalButton.addEventListener("click", function() {
        modal.style.display = "none";
    });

    signInForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Replace this with your sign-in logic
        if (username === "your_username" && password === "your_password") {
            alert("Sign In Successful!");
            modal.style.display = "none";
        } 
        // else {
        //     alert("Sign In Failed. Please check your credentials.");
        // }
         });
});

signInForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Send a POST request to the PHP script
    fetch('signin.php', {
        method: 'POST',
        body: new URLSearchParams({ username, password }),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then(response => response.text())
    .then(message => {
        alert(message);
        if (message === "Sign In Successful!") {
            modal.style.display = "none";
        }
    });
});








   

