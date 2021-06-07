const router = require("express").Router();
const { Product, Category, Backpack, User } = require("../../models");
const { doPagination } = require("../../utils/queryHelpers");
const { Op } = require("sequelize");
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

router.get("/:value", async (req, res) => {
  console.log(req.params.value);
  try {
    const value = req.params.value;
    const rawData = await Product.findAll({
      include: [Category],
      ...doPagination(req.params.value),
      where: { product_name: { [Op.like]: value } },
    });
    console.log({ [Op.like]: value });
    if (!rawData) {
      res.status(404).json({ message: "No products found." });
    }

    const data = rawData.map((prod) => prod.get({ plain: true }));

    console.log(data, "\n ------------------------------------------------");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;
