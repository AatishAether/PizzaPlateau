<?php

// Connect to the database
include 'connect.php';

//Get all sides from the database
$sql = "SELECT * FROM sides";
$result = $conn->query($sql);
if(!$result){
    die("Query failed: " . $conn->error);
}
if($result->num_rows > 0){
    //output data of each roww
    
    while($row = $result->fetch_assoc()){
        echo '<div class=side-list-item">
                <!--left side of box-->
                <div class="side-list-item-left">
                   <p>' . $row["sides_name"] . '</p>
                   <p>' . $row["sides_id"] . '</p>
                </div><!--end of left side of box-->
                <!--right side of box-->
                <div class="price">
                    <p>$' . $row["sides_price"] . '</p>
                </div>
                <!--IMAGE-->
                <div class="side-list-item-image">
                    <img src="" alt="Img of Side" class="img-side">
                </div>
                </div><!--end of right side of box-->
                </div><!--end of side list item-->';
    }
}
$conn->close();
?>