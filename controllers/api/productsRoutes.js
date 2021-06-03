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
//**Armor Route**//
router.get("/armor", async (req, res) => {
  try {
    const rawProductData = await Product.findAll({
      include: [Category],
      // where: category_id[2],
      where: { category_id: 2 },
    });
    console.log(rawProductData);
    if (!rawProductData) {
      res.status(404).json({ message: "No products found." });
    }

    const armorData = rawProductData.map((prod) => prod.get({ plain: true }));

    armorData.forEach(
      (data) => (data.add_info = JSON.parse(data.additional_information))
    );
    console.log(armorData);

    res.status(200).json(armorData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
//**Weapons Route**//
router.get("/weapons", async (req, res) => {
  try {
    const rawProductData = await Product.findAll({
      include: [Category],
      where: { category_id: 1 },
    });

    if (!rawProductData) {
      res.status(404).json({ message: "No products found." });
    }

    const weaponData = rawProductData.map((prod) => prod.get({ plain: true }));

    weaponData.forEach(
      (data) => (data.add_info = JSON.parse(data.additional_information))
    );
    console.log(weaponData);

    res.status(200).json(weaponData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
//**Gear Route**//
router.get("/gear", async (req, res) => {
  try {
    const rawProductData = await Product.findAll({
      include: [Category],
      where: { category_id: 3 },
    });

    if (!rawProductData) {
      res.status(404).json({ message: "No products found." });
    }

    const gearData = rawProductData.map((prod) => prod.get({ plain: true }));

    gearData.forEach(
      (data) => (data.add_info = JSON.parse(data.additional_information))
    );
    console.log(gearData);

    res.status(200).json(gearData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
