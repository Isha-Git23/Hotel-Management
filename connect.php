<?php

$checkindate = $_POST['checkindate'];
$checkoutdate =$_POST['checkoutdate'];
$adult = $_POST['adult'];
$children = $_POST['children'];
$rooms = $_POST['rooms'];

//database connection
$conn = new mysqli('localhost','root','','test');
if($conn->connect_error){
    die('connect fail : '.$conn1->connect_error);
}else{
    $stmt = $conn->prepare("insert into registration(checkindate,checkoutdate,adult,children,rooms)values(?, ?, ?, ?,? )");
    $stmt->bind_param("ssiii",$checkindate,$checkoutdate,$adult,$children,$rooms);
    $stmt->execute();
    echo "You are all set to select your desired Room!";
    $stmt->close();
    $conn->close();
}




// // Establish a MySQLi database connection
// $conn2 = mysqli_connect("localhost", "root", "", "feedback");

// // Check if the connection was successful
// if (!$conn2) {
//     die("Connection failed: " . mysqli_connect_error());
// }

// if ($_SERVER["REQUEST_METHOD"] == "POST") {
//     if (isset($_POST["rating"]) && isset($_POST["message"])) {
//         $rating = $_POST["rating"];
//         $message = $_POST["message"];

//         // Insert feedback data into the database
//         $sql = "INSERT INTO feedback (rating, message) VALUES ('$rating', '$message')";
//         if (mysqli_query($conn, $sql)) {
//             echo "Feedback submitted successfully.";
//         } else {
//             echo "Error: " . mysqli_error($conn2);
//         }
//     } else {
//         echo "Both rating and message must be provided.";
//     }
// }

// // Close the database connection when you're done
// mysqli_close($conn2);




?>