const router = require("express").Router();
const { Product, Category, Backpack, User } = require("../models");
const { doPagination } = require("../utils/queryHelpers");
const { Op } = require("sequelize");
const { compareSync } = require("bcrypt");

// http://localhost:3001+

router.get("/", async (req, res) => {
  res.render("homepage", {
    logged_in: req.session.logged_in,
  });
});

router.get("/login", async (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

/** This route does not return a no product found page, if there is no category, we have issues! */
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
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

/** If the product ID is not valid (manually entered) then it will return noProductFound=true variable */
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
      logged_in: req.session.logged_in,
      noProductFound: noProductFound,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/backpack", async (req, res) => {
  try {
    console.log("\n\n ------------------ Backpack  Start ------------------\n");
    console.log("userUserId: ", req.session.user_id);

    const user = await User.findByPk(req.session.user_id);

    console.log(user.get({ plain: true }));

    const rawProducts = await user.getProducts();

    const products = rawProducts.map((product) => product.get({ plain: true }));

    const itemList = products.map((product) => {
      return {
        product_name: product.product_name,
        product_id: product.product_id,
        quantity: product.backpack.quantity,
      };
    });

    console.log(itemList);
    res.render("backpack", {
      items: itemList,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
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

/** If the search does mpt return values, then it will return noProductFound=true variable */
router.get("/search/:value", async (req, res) => {
  try {
    let noProductFound = false;
    let data;
    const value = req.params.value;

    const rawData = await Product.findAll({
      include: [Category],
      ...doPagination(req.query),
      where: { product_name: { [Op.like]: `%${value}%` } },
    });

    noProductFound = rawData.length < 1;
    if (rawData) {
      data = rawData.map((prod) => prod.get({ plain: true }));
    }

    // console.log("\n ------------------------------------------------", data);
    // console.log(noProductFound);

    res.render("category", {
      products: data,
      logged_in: req.session.logged_in,
      noProductFound: noProductFound,
      value: value,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
