const { Category } = require("../models");

const categoryData = [
  {
    //1
    category_name: "Weapon",
  },
  {
    //2
    category_name: "Armor",
  },
  {
    //3
    category_name: "Gear",
  },
];

const seedCategory = () => Category.bulkCreate(categoryData);

module.exports = seedCategory;
