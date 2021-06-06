const router = require("express").Router();
const { Category, Product, Backpack, User } = require("../../models");

/** expecting body to contain an object {user_id: integer, cart: [{product_id: int, quantity: integer}] }
 * Note: this relies on the front end to validate the item is in stock - otherwise the stock will go negative.
 */
router.post("/", async (req, res) => {
  try {
    const user_id = req.session.user_id;
    const cart = req.body;
    let newItemValue = [];
    let itemStock = [];

    // add to backpack from cart
    for (const item of cart) {
      let thisItemValue;
      const { item_id, item_quantity } = item;

      const itemList = await Backpack.findOne({
        where: {
          productProductId: item_id,
          userUserId: user_id,
        },
      });
      if (!itemList) {
        thisItemValue = await Backpack.create({
          userUserId: user_id,
          productProductId: item_id,
          quantity: item_quantity,
        });
      } else {
        const current = itemList.get({ plain: true });
        thisItemValue = await itemList.update({
          quantity: item_quantity + current.quantity,
        });
      }
      newItemValue.push(thisItemValue);

      // decrement stock
      const thisItemStock = await Product.decrement("stock", {
        by: item_quantity,
        where: { product_id: item_id },
      });

      const [a, b] = thisItemStock;
      itemStock.push({ affectedCount: a[1] });
    }

    res.status(200).json({ newItemValue, itemStock });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// router.delete("/:id", async (req, res) => {
//   // delete a category by its `id` value
//   try {
//     const categoryData = await Category.destroy({
//       where: {
//         category_id: req.params.id,
//       },
//     });
//     if (!categoryData) {
//       res.status(404).json({ message: "No category with this id!" });
//       return;
//     }
//     res.status(200).json(categoryData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
