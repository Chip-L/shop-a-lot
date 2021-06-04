const router = require("express").Router();
const { Category, Product, Backpack, User } = require("../../models");

/** expecting body to contain an object {user_id: integer, cart: [{product_id: int, quantity: integer}] } */
router.post("/", async (req, res) => {
  try {
    const { user_id, cart } = req.body;
    // add to cart

    console.log(cart);

    // todo: decrement stock
  } catch (err) {
    console.log(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData) {
      res.status(404).json({ message: "No category with this id!" });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
