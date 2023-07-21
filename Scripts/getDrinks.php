<?php

include 'connect.php';

$sql = "SELECT * FROM drinkis";
$result = $conn->query($sql);
if(!$result){
    die("Query failed: " . $conn->error);
}
if($result->num_rows > 0){
    //output data
    while($row = $result->fetch_assoc()){
        echo '<div class="drink-list-item">
                <!--left side of box-->
                <div class="drink-list-item-left">
                   <p>' . $row["drink_name"] . '</p>
                   <p>' . $row["drinks_id"] . '</p>
                </div><!--end of left side of box-->
                <!--right side of box-->
                <div class="price">
                    <p>$' . $row["drink_price"] . '</p>
                </div>
                <!--IMAGE-->
                <div class="drink-list-item-image">
                    <img src="' . $row["drink_img"] . '" alt="Img of Drink" class="img-drink">
                </div>
                </div><!--end of right side of box-->
              </div><!--end of drink list item-->';
    }
}
$conn->close();
?>