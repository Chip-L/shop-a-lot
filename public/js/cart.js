let cart = JSON.parse(localStorage.getItem("cart"));
if (!cart) {
  cart = [];
}

class item {
  constructor(item_name, item_price, item_quantity, category) {
    this.item_name = item_name;
    this.item_price = item_price;
    this.item_quantity = item_quantity;
    this.category = category;
  }
}

const quantitySelect = document.querySelector("#quantityForm");
const numSelect = document.querySelector("#quantity");

function updateText(val) {
  document.querySelector("#textInput").value = val;
}

quantitySelect.addEventListener("submit", (event) => {
  event.preventDefault();
  const itemName = document.querySelector("#productTitle").innerHTML;
  const cost = document.querySelector("#cost").innerHTML;
  const category = document.querySelector("#category_name").innerHTML;
  const item_quantity = document.querySelector("#quantity").value;
  const newItem = new item(itemName, cost, item_quantity, category);
  cart.push(newItem);
  localStorage.setItem("cart", JSON.stringify(cart));
});

if (document.querySelector("#quantity").max == 0) {
  const form = document.querySelector("#quantityForm");
  document.querySelector(".productInfoArea").removeChild(form);
  let stockWarn = document.createElement("p");
  stockWarn.innerHTML = "Out of Stock, Sorry!";
  stockWarn.setAttribute("class", "stockWarn");
  document.querySelector(".productInfoArea").appendChild(stockWarn);
}
