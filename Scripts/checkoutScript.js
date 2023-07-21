var para = new URLSearchParams(window.location.search);
var cart = para.get("cart");

function backButton(){
    // when back button is clicked, go back to shopping page
        // when checkout button is clicked, load checkout page
    // send cart to checkout page
    // load checkout page
    var params = new URLSearchParams(window.location.search);
    params.append("cart", cart);
    location.href = "index.html?" + params.toString();

}


