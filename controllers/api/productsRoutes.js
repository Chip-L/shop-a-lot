const router = require("express").Router();
const { Product, Category, Backpack, User } = require("../../models");

// http://localhost/apo/products/+

router.get("/", async (req, res) => {
  try {
    const rawData = await Product.findAll({
      include: [Category],
    });

    if (!rawData) {
      res.status(404).json({ message: "No products found." });
    }

    const data = rawData.map((prod) => prod.get({ plain: true }));

    data.forEach(
      (data) => (data.add_info = JSON.parse(data.additional_information))
    );
    console.log(data);

    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
