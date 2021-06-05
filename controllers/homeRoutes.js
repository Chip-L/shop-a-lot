const router = require("express").Router();
const { Product, Category } = require("../models");
const { doPagination } = require("../utils/queryHelpers");
const { Op } = require("sequelize");

// http://localhost:3001+

router.get("/", async (req, res) => {
  res.render("homepage", {
    loggedIn: req.session.loggedIn,
  });
});

router.get("/login", async (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
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
    let noProductFound = false;
    let data;
    const rawProduct = await Product.findByPk(req.params.id, {
      include: Category,
    });

    noProductFound = !rawProduct;
    if (rawProduct) {
      data = rawProduct.get({ plain: true });
    }

    // console.log(noProductFound);
    // console.log("data:\n", data);
    res.render("product", {
      ...data,
      loggedIn: req.session.logged_in,
      noProductFound: noProductFound,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/backpack", async (req, res) => {
  try {
    const rawBackPackData = await Backpack.findAll({
      where: { userUserId: req.session.user_id },
      include: [{ model: Product }, { model: User }],
    });

    const backpackData = rawBackPackData.map((bpData) =>
      bpData.get({ plain: true })
    );
    //Serialized BackPack Data with Products Attached to the User
    console.log(backpackData);

    res.render("backpack", {
      backpackData,
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

router.get("/search/:value", async (req, res) => {
  try {
    const value = req.params.value;
    const rawData = await Product.findAll({
      include: [Category],
      ...doPagination(req.query),
      where: { product_name: { [Op.like]: `%${value}%` } },
    });
    console.log({ [Op.like]: value });
    if (!rawData) {
      res.status(404).json({ message: "No products found." });
    }

    const data = rawData.map((prod) => prod.get({ plain: true }));

    console.log(data, "\n ------------------------------------------------");
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
