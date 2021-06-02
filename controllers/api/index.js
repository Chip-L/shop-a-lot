const router = require("express").Router();

const userRoutes = require("./user-routes");
const productsRoutes = require("./productsRoutes");

router.use("/products", productsRoutes);
router.use("/users", userRoutes);

// export router
module.exports = router;
