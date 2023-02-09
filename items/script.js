const buttons = document.querySelectorAll(".product-button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    alert("Product added to cart!");
  });
}