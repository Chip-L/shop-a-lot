// const Product = require("./product");
// const Category = require("./category");
// const Backpack = require("./backpack");
// // const User = require("./user");

// Backpack.belongsTo(User, {
//   foreignKey: "user_id",
//   onDelete: "CASCADE",
// });
// //Still working on what is through what and when to use the "as" key
// User.hasOne(Backpack, {});

// Backpack.hasMany(Product, {
//   foreignKey: "backpack_id",
//   onDelete: "CASCADE",
// });
// Product.belongsTo(Category, {
//   foreignKey: "category_id",
//   onDelete: "CASCADE",
// });
// Category.hasMany(Product, {
//   foreignKey: "id",
//   onDelete: "CASCADE",
// });
// module.exports = {
//   Product,
//   Category,
//   Backpack,
//   //   User,
// };
