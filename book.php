<?php
// if ($_SERVER["REQUEST_METHOD"] == "POST") {
//     $name = $_POST['name'];
//     $date = $_POST['date'];
//     $time = $_POST['time'];

//     // Connect to your MySQL database here and insert the data
//     $servername = "localhost";
//     $username = "root";
//     $password = "";
//     $dbname = "test";

//     $conn = new mysqli($servername, $username, $password, $dbname);

//     if ($conn->connect_error) {
//         die("Connection failed: " . $conn->connect_error);
//     }

//     $sql = "INSERT INTO bookings (name, date, time) VALUES ('$name', '$date', '$time')";

//     if ($conn->query($sql) === TRUE) {
//         echo "Booking successful!";
//     } else {
//         echo "Error: " . $sql . "<br>" . $conn->error;
//     }

//     $conn->close();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $date = $_POST["date"];
    $time = $_POST["time"];

    // Connect to MySQL database (you need to fill in your credentials)
    $db = new mysqli("localhost", "root", "", "test");

    if ($db->connect_error) {
        die("Connection failed: " . $db->connect_error);
    }

    // Insert data into a table (you need to create the appropriate table)
    $sql = "INSERT INTO bookings (name, date, time) VALUES ('$name', '$date', '$time')";

    if ($db->query($sql) === true) {
        echo "Booking successful!";
    } else {
        echo "Error: " . $sql . "<br>" . $db->error;
    }

    $db->close();
}


?>



