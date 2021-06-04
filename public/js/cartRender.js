const itemDisplay = document.querySelector(".itemDisplay");
const cart = JSON.parse(localStorage.getItem("cart"));

if (cart) {
  for (item of cart) {
    let singleItem = document.createElement("div");
    singleItem.setAttribute("class", "singleItem");
    let itemName = document.createElement("h3");
    itemName.setAttribute("class", "itemName");
    itemName.innerHTML = item.product_name;
    let itemCost = document.createElement("p");
    itemCost.setAttribute("class", "itemCost");
    itemCost.innerHTML =
      "Cost: " +
      item.item_cost +
      "(" +
      item.item_cost / item.item_quantity +
      "per item)";
    let itemQuantity = document.createElement("p");
    itemQuantity.setAttribute("class", "itemQuantity");
    itemQuantity.innerHTML = "Quantity: " + item.item_quantity;
    singleItem.appendChild(itemName);
    singleItem.appendChild(itemCost);
    singleItem.appendChild(itemQuantity);
    itemDisplay.appendChild(singleItem);
  }
}
