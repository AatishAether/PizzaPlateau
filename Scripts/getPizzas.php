<?php

// Connect to the database
include 'connect.php';

// Get all pizzas from the database
$sql = "SELECT * FROM pizza";
$result = $conn->query($sql);
if(!$result){
    die("Query failed: " . $conn->error);
}
if($result->num_rows > 0){
    //output data of each row
    
    while($row = $result->fetch_assoc()){
        echo '<div class="pizza-list-item">
                <!--left side of box-->
                <div class="pizza-list-item-left">
                   <p>' . $row["pizzaName"] . '</p>
                   <p>' . $row["toppings_list"] . '</p>
                </div><!--end of left side of box-->
                <!--right side of box-->
                <div class="pizza-list-item-right">
                   <!-- PRICE -->
                   <div class="price">
                       <p>$' . $row["price"] . '</p>
                   </div>
                   <!--IMAGE-->
                   <div class="pizza-list-item-image-div">
                       <img src="' . $row["imgPath"] . '" alt="Img of Pizza" class="img-pizza">
                   </div>
                </div><!--end of right side of box-->
              </div><!--end of pizza list item-->';
    }
}
$conn->close();
?>