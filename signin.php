<?php
// Database connection
// $db_host = 'your_db_host';           
// $db_user = 'your_db_user';           
// $db_pass = 'your_db_password';           
// $db_name = 'your_db_name';           
// $conn = new mysqli($db_host, $db_user, $db_pass, $db_name);

// if ($conn->connect_error) {
//     die("Connection failed: " . $conn->connect_error);
// }

// if (isset($_POST['username']) && isset($_POST['password'])) {
//     $username = $_POST['username'];
//     $password = $_POST['password'];

//     // Query the database to check user credentials
//     $query = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";
//     $result = $conn->query($query);

//     if ($result->num_rows == 1) {
//         echo "Sign In Successful!";
//     } else {
//         echo "Sign In Failed. Please check your credentials.";
//     }
// } else {
//     echo "Invalid request.";
// }

// $conn->close();

$username = $_POST['username']; 
$password=$_POST['password']; 


//database connection
$conn = new mysqli('localhost','root','','test'); 
if($conn->connect_error){
    die('connect fail : '.$conn1->connect_error);
}else{
    $stmt = $conn->prepare("insert into signin(username,password)values(?, ?)");
    $stmt->bind_param("ss",$username,$password);
    $stmt->execute();
    echo "You are succesfully signed in!";
    $stmt->close(); 
    $conn->close();
}

?>
