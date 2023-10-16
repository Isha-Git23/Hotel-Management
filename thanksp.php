<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the feedback data from the POST request
    // $name = $_POST['name'];
    $rating = $_POST['rating'];
    $comment = $_POST['comment'];

    // Perform database insert here (using MySQLi, PDO, or your preferred database library).
    // Example using MySQLi:
    
    $db = new mysqli('localhost', 'root', '', 'feedback');
    if ($db->connect_error) {
        die("Connection failed: " . $db->connect_error);
    }

    $sql = "INSERT INTO feedbackform(rating, comment) VALUES (?, ?, ?)";
    $stmt = $db->prepare($sql);
    $stmt->bind_param('is', $rating, $comment);
    
    if ($stmt->execute()) {
        echo "Feedback saved successfully!";
     }
    //  else {
    //     echo "Error: " . $stmt->error;
    // }
    
    $stmt->close();
    $db->close();
} else {
    header("HTTP/1.0 405 Method Not Allowed");
    echo "Method not allowed";
}
?>

