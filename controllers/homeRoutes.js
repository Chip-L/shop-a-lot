const router = require("express").Router();
// const { seedAll } = require("../seeds");
const { Product, Category } = require("../models");
const { doPagination } = require("../utils/queryHelpers");
const { Op } = require("sequelize");

router.get("/", async (req, res) => {
  res.render("homepage", {
    loggedIn: req.session.loggedIn,
  });
});

router.get("/category/:categoryId", async (req, res) => {
  try {
    const rawData = await Product.findAll({
      include: [Category],
      ...doPagination(req.query),
      where: { category_id: req.params.categoryId },
    });

    if (!rawData) {
      res.status(404).json({ message: "No products found." });
    }

    const data = rawData.map((prod) => prod.get({ plain: true }));

    res.render("category", {
      products: data,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/product/:id", async (req, res) => {
  try {
    const rawProduct = await Product.findByPk(req.params.id, {
      include: Category,
    });

    if (!rawProduct) {
      res.status(404).json({ message: "No products found." });
    }

    const data = rawProduct.get({ plain: true });

    // data.add_info = JSON.parse(data.additional_information);
    console.log("data:\n", data);
    res.render("product", {
      ...data,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/backpack", async (req, res) => {
  try {
    const backPackData = await Backpack.findAll({
      include: [{ model: Product }, { model: User }],
    });

    const backPackSerData = backPackData.map((blog) =>
      blog.get({ plain: true })
    );
    //Serialized BackPack Data with Products Attached to the User
    console.log(backPackSerData);

    res.render("backpack", {
      blogs,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/cart", async (req, res) => {
  try {
    res.render("cart", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//**To Auto Seed The DB on Server Start+*//
router.get("/search", async (req, res) => {
  try {
    console.log(
      req.params.value,
      "------------------------------------------------"
    );
    const rawData = await Product.findAll({
      include: [Category],
      ...doPagination(req.query),
      where: { product_name: { [Op.like]: `%${req.params.value}%` } },
    });
    console.log(rawData, "------------------------------------------------");
    if (!rawData) {
      res.status(404).json({ message: "No products found." });
    }

    const data = rawData.map((prod) => prod.get({ plain: true }));
    console.log(data, "------------------------------------------------");
    res.render("category", {
      products: data,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
