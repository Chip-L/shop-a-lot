const Product = require("./product");
const Category = require("./category");
const Backpack = require("./backpack");
const User = require("./users");

User.belongsToMany(Product, { through: { model: Backpack, unique: false } }); // added "unique" in to the models themselves and fixed some spelling errors
Product.belongsToMany(User, { through: { model: Backpack, unique: false } }); // fixed the "through" formatting so it is an object as expected

Product.belongsTo(Category);
Category.hasMany(Product);

module.exports = {
  Product,
  Category,
  Backpack,
  User,
};
