const { add, total, list, quantity } = require("ing-simple-cart");

const addItem = document.querySelector("form");
addItem.addEventListener("submit", addItemToCart);

function addItemToCart(event) {
  event.preventDefault();

  const product = {
    id: addItem.id,
    prodName: document.querySelector("product_name").textContent,
    cost: document.querySelector("cost").textContent,
  };
  const quantity = document.querySelector("quantity").value;

  add({ product }, quantity);
}
