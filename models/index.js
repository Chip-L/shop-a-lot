const Product = require("./product");
const Category = require("./category");
const Backpack = require("./backpack");
const User = require("./users");

// User.hasOne(Backpack,
//   onDelete: );
// Backpack.belongsTo(User);

User.belongsToMany(Product, { through: "backpack", unique: false });
Product.belongsToMany(User, { through: "backpack", unique: false });

// Backpack.belongsToMany(Product);
// Product.belongsToMany(Backpack);

Product.belongsTo(Category);
Category.hasMany(Product, {
  foreignKey: "id",
  onDelete: "CASCADE",
});

module.exports = {
  Product,
  Category,
  Backpack,
  User,
};
