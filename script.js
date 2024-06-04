var cartItems = document.getElementById("cart-items");
var totalElement = document.getElementById("total");
var cart = [];
function addToCart(productName, price) {
  cart.push({ productName, price });

  updateToCart();
}
function updateToCart() {
  cartItems.innerText = "";
  let total = 0;
  cart.forEach((s) => {
    var listItem = document.createElement("li");
    listItem.textContent = `${s.productName}-${s.price}`;
    cartItems.appendChild(listItem);

    total = total + s.price;
    listItem.style.listStyle = "none";
  });
  totalElement.textContent = `Total:${total.toFixed(2)}`;
}
function checkout() {
  alert("Thanks for your order!");
  totalElement.textContent = "";
  cartItems.textContent = "";
  totalElement.textContent = "Total:Rs 0.00";
  location.reload();
}
