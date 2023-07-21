<?php

//Connect to mysql database
$servername = "localhost"; ////CHANGE THIS TO IP ADDRESS
$username = "root";
$password = "g!ggL68ut";
$dbname = "pizzaDB";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

if($conn->connect_error){
    die("Connection failed: " . $conn->connect_error);
}
?>