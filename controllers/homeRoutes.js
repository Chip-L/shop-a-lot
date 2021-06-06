const router = require("express").Router();
const { Product, Category, Backpack, User } = require("../models");
const { doPagination, withAuth } = require("../utils/queryHelpers");
const { Op } = require("sequelize");

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

router.get("/backpack", withAuth, async (req, res) => {
  try {
    let noProductFound = false;
    let itemList;

    const user = await User.findByPk(req.session.user_id);

    const rawProducts = await user.getProducts();

    noProductFound = rawProducts.length < 1;

    if (rawProducts) {
      const products = rawProducts.map((product) =>
        product.get({ plain: true })
      );

      // include fields for the page display
      itemList = products.map((product) => {
        return {
          product_name: product.product_name,
          product_id: product.product_id,
          quantity: product.backpack.quantity,
        };
      });
    }

    res.render("backpack", {
      items: itemList,
      logged_in: req.session.logged_in,
      noProductFound: noProductFound,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/cart", withAuth, async (req, res) => {
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
router.get("/newUsers", (req, res) => {
  res.render("newUsers");
});

router.get("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.render("homepage");
    });
  } else {
    res.status(404).end();
  }
});
module.exports = router;
