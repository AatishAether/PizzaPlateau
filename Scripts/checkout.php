<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>checkout</title>
</head>
<body>
    <?php
    echo "<p>testing</p>";
    // connect to database
    $user= "pizza";
    $password = "PizzaPizza1!";
    $host = "localhost";
    $dbase = "Pizza_DB";
    // $conn = new mysqli($host, $user, $password, $dbase);
    $conn = mysqli_connect($host, $user, $password, $dbase);
    if(!$conn){
        die("Connection failed: ".mysqli_connect_error());
    }
    echo "<p>Connected successfully</p>";
    $userID = $_COOKIE["userID"];
    $sql = "select * from customer where customer_id = '$userID'";
    $result = mysqli_query($conn, $sql);
    // generate order number
    $orderNum = rand(100000, 999999);
    // generate order date
    $orderDate = date("YYYY-mm-dd");
    //generate wait time
    $waitTime = rand(15, 45);
    //concat orderNum and orderDate
    $orderID = $orderNum.$orderDate;
    // find user in customer table and append orderID to end of prevOrders
    $sql = "select * from customer where customer_id = '$userID'";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_assoc($result);
    $prevOrders = $row["prevOrders"];
    $prevOrders = $prevOrders.$orderID;
    // update customer table with new prevOrders
    $sql = "update customer set prevOrders = '$prevOrders' where customer_id = '$userID'";  
    $result = mysqli_query($conn, $sql);
    // where we would insert order into order table, not implemented
    echo "<p>Order ID: ".$orderID."</p>";
    echo "<p>Order Date: ".$orderDate."</p>";
    echo "<p>Wait Time: ".$waitTime." minutes</p>";


    $conn->close();
    ?>
</body>
</html>