
{/* <script> */}

const navBtn = document.getElementById('nav-btn');
const cancelBtn = document.getElementById('cancel-btn');
const sideNav = document.getElementById('sidenav');
const modal = document.getElementById('modal');

navBtn.addEventListener("click", function () {
    sideNav.classList.add('show');
    modal.classList.add('showModal');
});

cancelBtn.addEventListener('click', function () {
    sideNav.classList.remove('show');
    modal.classList.remove('showModal');
});

window.addEventListener('click', function (event) {
    if (event.target === modal) {
        sideNav.classList.remove('show');
        modal.classList.remove('showModal');
    }
});

// script.js
// document.addEventListener("DOMContentLoaded", function () {
//     const form = document.getElementById("feedbackForm");
//     const submitBtn = document.getElementById("submitBtn");

//     submitBtn.addEventListener("click", function () {
//         const rating = document.querySelector('input[name="rating"]:checked').value;
//         const message = document.getElementById("message").value;

//         // Send the data to a PHP script for processing
//         const xhr = new XMLHttpRequest();
//         xhr.open("POST", "submit_feedback.php", true);
//         // ...

// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//             // Handle successful response
//             alert(xhr.responseText);
//             window.location.href = "thankyou.html";
//         } else {
//             // Handle errors, e.g., by displaying an error message to the user
//             alert("Error: " + xhr.status + " " + xhr.statusText);
//         }
//     }
// };

// xhr.onerror = function () {
//     // Handle network errors
//     alert("Network error occurred. Please try again later.");
// };

// xhr.send(`rating=${rating}&message=${message}`);

//         xhr.send(`rating=${rating}&message=${message}`);
//     });
// });

// </script>