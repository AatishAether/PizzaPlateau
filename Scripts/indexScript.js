var cart = [];
function loadCheckout() {
  // when checkout button is clicked, load checkout page
  // send cart to checkout page
  // load checkout page
  if (localStorage.getItem("cart") != null) {
    var params = new URLSearchParams(window.location.search);
    params.append("cart", cart);
    location.href = "checkout.html?" + params.toString();
  }
  else {
    location.href = "checkout.html";
    //     alert("Cart is empty");
  }
}
function customAddToCart() {
  event.preventDefault(); // prevent default form submission behavior
  // alert("Custom Pizza Added to Cart");
  //get url request
  // var params = new URLSearchParams(window.location.search);
  //get pizza name
  var price = 7.99;
  // console.log(params);
  var size = document.getElementById("custSize").value;
  var crust = document.getElementById("custCrust").value;
  var sauce = document.getElementById("custSauce").value;
  var toppings = "";
  var instructions = document.getElementById("special-instructions").value;
  // var price = params.get("price");
  var name = "CYO";
  var imageURL = "Images/Pizzas/BYO_Pizza.webp";
  var custCheese = document.getElementById("custCheese");
  var custPepperoni = document.getElementById("custPepperoni");
  var custSausage = document.getElementById("custSausage");
  var custBacon = document.getElementById("custBacon");
  var custHam = document.getElementById("custHam");
  var custSteak = document.getElementById("custSteak");
  var custGreenPepper = document.getElementById("custGreenPepper");
  var YellowOnion = document.getElementById("YellowOnion");
  var custMushroom = document.getElementById("custMushroom");
  var custSpinach = document.getElementById("custSpinach");
  var custBlackOlives = document.getElementById("custBlackOlives");
  var GreenOlives = document.getElementById("GreenOlives");


  // switch statement for size
  switch (size) {
    case "Small":
      price = price * 1;
      break;
    case "Medium":
      price = price * 1.2;
      break;
    case "Large":
      price = price * 1.4;
      break;
  }
  // switch statement for crust
  switch (crust) {
    case "regular":
      price = price * 1;
      break;
    case "Stuffed":
      price = price * 1;
      break;
    case "Garlic Parmesan":
      price = price * 1.2;
      break;
    case "Cauliflower":
      price = price * 1.4;
      break;
  }
  if (custCheese.checked) {
    toppings += "Cheese  ";

  }
  if (custPepperoni.checked) {
    toppings += "Pepperoni  ";
    price = price + 1;
  }
  if (custSausage.checked) {
    toppings += "Sausage  ";
    price = price + 1;
  }
  if (custBacon.checked) {
    toppings += "Bacon  ";
    price = price + 1;
  }
  if (custHam.checked) {
    toppings += "Ham  ";
    price = price + 1;
  }
  if (custSteak.checked) {
    toppings += "Steak  ";
    price = price + 1;
  }
  if (custGreenPepper.checked) {
    toppings += "Green Pepper  ";
    price = price + 1;
  }
  if (YellowOnion.checked) {
    toppings += "Yellow Onion  ";
    price = price + 1;
  }
  if (custMushroom.checked) {
    toppings += "Mushroom  ";
    price = price + 1;
  }
  if (custSpinach.checked) {
    toppings += "Spinach  ";
    price = price + 1;
  }
  if (custBlackOlives.checked) {
    toppings += "Black Olives  ";
    price = price + 1;
  }
  if (GreenOlives.checked) {
    toppings += "Green Olives  ";
    price = price + 1;
  }
  // replace "  " with ", "
  toppings = toppings.replace(/  /g, ", ");
  // remove last ", "
  toppings = toppings.substring(0, toppings.length - 2);
  // format price to 2 decimal places
  // price = price.toFixed(2);
  let cartRow = document.createElement("div");
  cartRow.classList.add("cart-row");
  let cartItems= document.getElementsByClassName("cart-items")[0];
  let cartItemNames = cartItems.getElementsByClassName("cart-item-title");
  if(instructions != ""){
    // append "Instructions: " to instructions beginning
    instructions = "Instructions: " + instructions;
  }
  let cartRowContents = `
  <div class="cart-item cart-column">
<<<<<<< HEAD
<<<<<<< HEAD
    <img class="cart-item-image" src="${imageURL}" width="100" height="100">
=======
    <img class="cart-item-image" src="${imageURL}" width="60px" height="50px">
>>>>>>> parent of 6f54a38 (Revert "add to cart on all items, can scroll cart")
=======
    <img class="cart-item-image" src="${imageURL}" width="60px" height="50px">
>>>>>>> parent of 11cd953 (imagem)
    <span class="cart-item-title">${crust} ${size} - ${name}</span>
    <span class="cart-item-title">${sauce}</span>
  </div>
  <div style='display:flex;flex-direction:column;'>
    <div>
      <span class="cart-price cart-column">$${price}</span>
      <span class="cart-column">${toppings}</span>
    </div>
    <div>
      <span class="">${instructions}</span>
    </div>
  </div>
  <div class="cart-quantity cart-column">

    <input class="cart-quantity-input" type="number" value="1">
    <button class="btn btn-danger" type="button">REMOVE</button>
  </div>`;
  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
  cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem);
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged);
    updateCartTotal();
  // let html = "";
  // html += "<div class='cart-item'><p class='cart-item-title'>"
  //   + crust + " " + size + " - " + name + "</p>";
  // html += "<p class='cart-price'>$" + price + "</p>";
  // html += "<ul class='cart-item-list'>";
  // html += "<li>" + sauce + "</li>";
  // html += "<li>" + toppings + "</li></ul>";
  // if (instructions != "") {
  //   html += "<p>Special Instructions:</p>"
  //   html += "<p class='cart-item-instructions'>" + instructions + "</p>";
  // }
  // add button to remove parent div from cart
  // html += "<div class='cart-quantity cart-column'>";
  // html += "<input class='cart-quantity-input' type='number' value='1'>";
  // html += "<button class='btn btn-danger' type='button'>REMOVE</button>";
  // html += "</div>";
  // html += "<button class='btn btn-danger' onclick='removeCYO(this.parentElement)'>Remove</button>";
  // html += "</div>";
  // document.getElementById("cart-CYO").innerHTML += html;
  // var cartTotal = document.getElementsByClassName("cart-total-price");

  // var cartTotal = parseFloat(cartTotal[0].innerText.replace("$", ""));
  // // convert price to float
  // price = parseFloat(price);
  // // add price to cart total
  // cartTotal += price;
  // // convert cart total back to string
  // cartTotal = cartTotal.toString();
  // // add $ to cart total
  // cartTotal = "$" + cartTotal;
  // // update cart total
  // document.getElementsByClassName("cart-total-price")[0].innerText = cartTotal;
  // // cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem);
  // // cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged);
  // // // add event listener to all remove buttons in cart to remove parent div from cart when clicked with classNmae "btn-danger"
  // // var removeCartItemButtons = document.getElementsByClassName('btn-danger');
  // // for (var i = 0; i < removeCartItemButtons.length; i++) {
  // //   var button = removeCartItemButtons[i];
  // //   button.addEventListener('click', function (event) {
  // //     var buttonClicked = event.target;
  // //     buttonClicked.parentElement.parentElement.remove();
  // //     updateCartTotal();
  // //   });
  // // }
  // // add event listener to all quantity inputs in cart to update cart total when changed with classNmae "cart-quantity-input"
  // var quantityInputs = document.getElementsByClassName('cart-quantity-input');
  // for (var i = 0; i < quantityInputs.length; i++) {
  //   var input = quantityInputs[i];
  //   input.addEventListener('change', quantityChanged);
  // }
}
function removeCYO(parent) {
  var cartTotal = document.getElementsByClassName("cart-total-price");
  var price = parent.getElementsByClassName("cart-item-price")[0].innerText;
  // convert price to float
  price = parseFloat(price.replace("$", ""));
  // convert cart total to float
  cartTotal = parseFloat(cartTotal[0].innerText.replace("$", ""));
  // subtract price from cart total
  cartTotal -= price;
  // convert cart total back to string
  cartTotal = cartTotal.toString();
  // add $ to cart total
  cartTotal = "$" + cartTotal;
  // update cart total
  document.getElementsByClassName("cart-total-price")[0].innerText = cartTotal;
  // remove parent div from cart
  parent.remove();
  return false;
}
// function addToCart() {
//   //get url request
//   var params = new URLSearchParams(window.location.search);
//   //get pizza name
//   console.log(params);
//   var size = params.get("size");
//   var crust = params.get("crust");
//   var sauce = params.get("sauce");
//   var toppings = params.get("topping");
//   var instructions = params.get("special-instructions");

//   let html = "";
//   html += "<div class='cart-item'><p class='cart-item-name'>"
//     + size + " - " + "Build Your Own" + "</p>";
//   html += "<p class='cart-item-price'>$" + params.get("price") + "</p>";
//   html += "<ul class='cart-item-list'><li>" + crust + "</li>";
//   html += "<li>" + sauce + "</li>";
//   html += "<li>" + toppings + "</li></ul>";
//   html += "<p class='cart-item-instructions'>" + instructions + "</p></div>";
//   document.getElementById("cart").innerHTML += html;
//   /*This part is for using XML and PHP
//   //get order.xml
//   let xhtml = new XMLHttpRequest();
//   xhtml.onreadystatechange = function(){
//     if(this.readyState == 4 && this.status == 200){
//       let order = parseOrderXML(this);
//       //add order to cart
//       let html="";
//       html += "<p>"+order['size'] + " - " + order['name']+"</p>";
//       html += "<p>"+order['price']+"</p>";
//       html += "<ul><li>"+order['crust']+"</li>";
//       html += "<li>"+order['sauce']+"</li>";
//       html += "<li>"+order['toppings']+"</li></ul>";
//       html += "<p>"+order['special-instructions']+"</p>";
      
//       document.getElementById("cart").innerHTML += html;
//   }
//   };
//   */
// }
function parseOrderXML(xml) {
  //parse order.xml
  let xmlDoc = xml.responseXML;
  //get order
  let order = xmlDoc.getElementById("order").childNodes;
  return order;
  /*
  //get size
  let size = xmlDoc.getElementById("size").value;
  //get price
  let price = xmlDoc.getElementById("price").value;
  //get crust 
  let crust = xmlDoc.getElementById("crust").value;
  //get sauce
  let sauce = xmlDoc.getElementById("sauce").value;
  //get toppings
  let toppings = xmlDoc.getElementById("toppings").value;
  //get special instructions
  let instructions = xmlDoc.getElementById("special-instructions").value;
  */
}

/*
con.connect(function(err) {
  // open menu.xml file
  var menuFile = new File("./Resources/menu.xml");
  menuFile.open("r");
  // read menu.xml file
  var menuXML = menuFile.read();
  // close menu.xml file
  menuFile.close();
  // parse menu.xml file
  // open menu.xml file
  var menuFile = new File("./Resources/menu.xml");
  // create menu
  // each pizza item  has name, price, description, and imageURL
  var pizzaPlace = getElementById("pizzaPlace");
  var x = "";
  for (var i = 0; i < menu.pizza.length(); i++) {
    x+="<div class=\"pizza-list-item\">"+
    "<div class=\"pizza-list-item-left\">"+
      "<p>"+menu.pizza[i].name+"</p>"+
      "<p>"+menu.pizza[i].description+"</p>"+
    "</div>"+
    "<div class=\"pizza-list-item-right\">"+
      "<div style=\"display:flex;align-items: center;\">"+
        "<p>$"+menu.pizza[i].price+"</p>"+
      "</div>"+
      "<div style=\"border: 1px red solid; height: 100%;\" class=\"pizza-list-item-image-div\">"+
        "<img src="+menu.pizza[i].imageURL+" alt=\"Logo\" class=\"img-pizza\">"+
      "</div>"+
    "</div>"+
    "</div>";
  }
  pizzaPlace.innerHTML = x
});
*/

function updateCartTotal() {
  let cartItemContainer = document.getElementsByClassName('cart-items')[0];
  let cartRows = cartItemContainer.getElementsByClassName('cart-row');
  let total = 0;
  for (let i = 0; i < cartRows.length; i++) {
    let cartRow = cartRows[i];
    let priceElement = cartRow.getElementsByClassName('cart-price')[0];
    let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
    let price = parseFloat(priceElement.innerText.replace('$', ''));
    let quantity = quantityElement.value;
    total = total + (price * quantity);
  }
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;
}

function removeCartItem(event) {
  let buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  updateCartTotal();

}

function quantityChanged(event) {
  let input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}