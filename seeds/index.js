const sequelize = require("../config/connection");
const seedWeapons = require("./seedWeapon");
const seedArmor = require("./seedArmor");
const seedGear = require("./seedGear");
const seedUsers = require("./seedUsers");
const seedCategory = require("./seedCategory");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedCategory();

  await seedWeapons();
  await seedArmor();
  await seedGear();

  await seedUsers();
};

seedAll();

module.exports = seedAll;
