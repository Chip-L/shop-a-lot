const sequelize = require("../config/connection");
const { bulkCreate } = require("../models/product");
const { Product, Category, User, Backpack } = require("../models");

const categoryData = [
  {
    //1
    category_name: "Armor",
  },
  {
    //2
    category_name: "Weapon",
  },
  {
    //3
    category_name: "Other",
  },
];

const productData = [
  {
    product_name: "Ashigaru",
    cost: 25,
    stock: 35,
    weight: 20,
    additional_information: JSON.stringify({
      armor_type: "Light",
      base_size: "Medium",
    }),
    category_id: 1,
  },
  {
    product_name: "Axe, Dwarven War",
    cost: 30,
    stock: 35,
    weight: 15,
    additional_information: JSON.stringify({
      damage_type: "Slashing",
      damage: "d8",
    }),
    category_id: 1,
  },
];

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await Category.bulkCreate(categoryData);
  await Product.bulkCreate(productData);
};

seedAll();
