<!-- // Purpose: This script is used to login a user or sign-up a new user -->
<html lang="en">
    <HEAD>
        <TITLE>login.php</TITLE>
        <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
    </HEAD>
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

    // retrieve input from login form
    $email = $_GET["inputEmail"];
    $pwd = $_GET["inputPassword"];
    $firstName = $_GET["fName"];
    $lastName = $_GET["lName"];
    $address = $_GET["address"];
    $phoneNumber = $_GET["phoneNumber"];
    $radioLogin = $_GET["login"];
    // print "this is the email: ".$email;
    // echo"<p>".$_GET["inputEmail"]."</P>";
    // echo"<p>".$_GET["inputPassword"]."</P>";
    // echo"<p>".$_GET["fName"] ."</P>";
    // echo"<p>".$_GET["lName"] ."</P>";
    // echo"<p>".$_GET["address"] ."</P>";
    // echo"<p>".$_GET["phoneNumber"] ."</P>";
    // echo"<p>".$_GET["login"] ."</P>";
    // check if radiobutton login value is login or sign-up
    if($radioLogin == "login"){
        // check if email and password match
        $sql = "select * from customer where email = '$email' and password = '$pwd'";
        $result = mysqli_query($conn, $sql);
        if(mysqli_num_rows($result) == 1){
            // echo customer logged in
            echo "<p>Customer logged in</p>";
            // get customer info
            $row = mysqli_fetch_assoc($result);
            $firstName = $row["fname"];
            $lastName = $row["lName"];
            $address = $row["addr"];
            $phoneNumber = $row["phone"];
            $userID = $row["customer_id"];
            echo "<p>Customer info: ".$firstName." ".$lastName." ".$address." ".$phoneNumber."</p>";
            // save customer info to cookies for 30 day
            setcookie("email", $email, time() + (86400 * 30), "/"); // 86400 = 1 day
            setcookie("password", $pwd, time() + (86400 * 30), "/"); // 86400 = 1 day
            setcookie("fname", $firstName, time() + (86400 * 30), "/"); // 86400 = 1 day
            setcookie("lname", $lastName, time() + (86400 * 30), "/"); // 86400 = 1 day
            setcookie("addr", $address, time() + (86400 * 30), "/"); // 86400 = 1 day
            setcookie("phone", $phoneNumber, time() + (86400 * 30), "/"); // 86400 = 1 day
            setcookie("userID", $userID, time() + (86400 * 30), "/"); // 86400 = 1 day
            // start session
            session_start();
            // // set session variables
            $_SESSION["email"] = $email;
            $_SESSION["password"] = $pwd;
            $_SESSION["fname"] = $firstName;
            $_SESSION["lname"] = $lastName;
            $_SESSION["addr"] = $address;
            $_SESSION["phone"] = $phoneNumber;
            $_SESSION["userID"] = $userID;
            // // redirect to index.php

            header("Location: ../index.html");
        }else{
            // echo customer not logged in
            echo "<p>Customer not logged in</p>";

            // redirect to login.php
            // header("Location: ../login.html");
        }
    }else{
        // check if email already exists
        $sql = "select * from customer where email = '$email'";
        $result = mysqli_query($conn, $sql);
        if(mysqli_num_rows($result) >= 1){
            // redirect to login.php
            echo "<p>Customer already exists</p>";
            // header("Location: ../login.php");
        }else{
            // insert new customer into database
            $sql = "insert into customer (email, password,fname,lname,addr,phone) values ('$email', '$pwd', '$firstName', '$lastName', '$address', '$phoneNumber')";
            $result = mysqli_query($conn, $sql);
            // echo customer created
            echo "<p>Customer created</p>";
            // get customer info
            $sql = "select * from customer where email = '$email' and password = '$pwd'";
            $result = mysqli_query($conn, $sql);
            $row = mysqli_fetch_assoc($result);
            $firstName = $row["fname"];
            $lastName = $row["lName"];
            $address = $row["addr"];
            $phoneNumber = $row["phone"];
            echo "<p>Customer info: ".$firstName." ".$lastName." ".$address." ".$phoneNumber."</p>";
            // start session
            // session_start();
            // // set session variables
            // $_SESSION["email"] = $email;
            // $_SESSION["password"] = $pwd;
            // // redirect to index.php
            // header("Location: ../index.php");
        }
    }
    // alter table customer customer_id int not null auto_increment primary key;
    $sql="alter table customer add customer_id int not null auto_increment primary key";
    $result = mysqli_query($conn, $sql);
    if($result){
        echo "<p>customer_id altered</p>";
    }else{
        echo "<p>customer_id not altered</p>";
    }

    // close conn
    $conn->close();

    ?>
</body>
</html>