const Product = require("./product");
const Category = require("./category");
const Backpack = require("./backpack");
const User = require("./users");
const Weapon = require("./weapon");
const Armor = require("./armor");
const miscItem = require("./miscItem");


//**Product Relationships**//

Product.hasMany(Weapon, {
  foreignKey: "product_id",
  onDelete: "CASCADE",
});

Product.hasMany(Armor, {
  foreignKey: "product_id",
  onDelete: "CASCADE",
});

Product.hasMany(miscItem, {
  foreignKey: "product_id",
  onDelete: "CASCADE",
});

Product.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

//**Armor Relationships**//
Armor.hasOne(Category,{

})




//**Weapon Relationships**//








//**MiscItem Relationships**//








//**Backpack Relationships**//

Backpack.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
Backpack.hasMany(Product, {
  foreignKey: "backpack_id",
  onDelete: "CASCADE",
});



//**User Relationships**//
User.hasOne(Backpack, {});








//**Category Relationships**//
Category.hasMany(Product, {
  foreignKey: "id",
  onDelete: "CASCADE",
});

module.exports = {
  Product,
  Category,
  Backpack,
  //   User,
};
