const sequelize = require("../config/connection");
const seedWeapons = require("./seedWeapon");
const seedArmor = require("./seedArmor");
const seedGear = require("./seedGear");
const seedUsers = require("./seedUsers");

const { Product, Category, User, Backpack } = require("../models");

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

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await Category.bulkCreate(categoryData);
  await seedWeapons();
  await seedArmor();
  await seedGear();

  await seedUsers();
};

seedAll();
