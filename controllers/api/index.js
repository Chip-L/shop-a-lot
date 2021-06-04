const router = require("express").Router();

const userRoutes = require("./user-routes");
const productsRoutes = require("./productsRoutes");
const backpackRoutes = require("./backPackRoutes");

router.use("/products", productsRoutes);
router.use("/users", userRoutes);
router.use("/backpack", backpackRoutes);

// export router
module.exports = router;
