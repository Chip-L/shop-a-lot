const itemDisplay = document.querySelector(".itemDisplay");
const cart = JSON.parse(localStorage.getItem("cart"));

if (cart) {
  let totalCost = 0;
  let deliveryFee;
  let taxes;
  for (item of cart) {
    console.log(item.item_name);
    let singleItem = document.createElement("div");
    singleItem.setAttribute("class", "singleItem");
    let itemName = document.createElement("h3");
    itemName.setAttribute("class", "itemName");
    itemName.innerHTML = item.item_name;
    let itemCost = document.createElement("p");
    itemCost.setAttribute("class", "itemCost");
    itemCost.innerHTML =
      "Cost: " +
      item.item_price * item.item_quantity +
      " ( ~" +
      item.item_price +
      "per item)";
    let itemQuantity = document.createElement("p");
    itemQuantity.setAttribute("class", "itemQuantity");
    itemQuantity.innerHTML = "Quantity: " + item.item_quantity;
    singleItem.appendChild(itemName);
    singleItem.appendChild(itemCost);
    singleItem.appendChild(itemQuantity);
    itemDisplay.appendChild(singleItem);
    totalCost += parseFloat(item.item_price * item.item_quantity);
  }
  deliveryFee = (totalCost * 0.03).toFixed(2);
  taxes = (totalCost * 0.1).toFixed(2);
  grandTotal =
    parseFloat(deliveryFee) + parseFloat(taxes) + parseFloat(totalCost);
  grandTotal = grandTotal.toFixed(2);
  document.querySelector("#subTotal").innerHTML = totalCost;
  document.querySelector("#deliveryFee").innerHTML = deliveryFee;
  document.querySelector("#taxes").innerHTML = taxes;
  document.querySelector("#grandTotal").innerHTML = grandTotal;
}

try {
  const sendButton = document.querySelector("#sendToBackpack");
  sendButton.addEventListener("click", (event) => {
    event.preventDefault();
    // Need to post backpack info to the right route
  });
} catch (err) {
  console.log("Not logged in");
}
