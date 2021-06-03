const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Backpack extends Model {}

Backpack.init(
  {
    // Model attributes are defined here
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "user_id",
        unique: false,
      },
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "products",
        key: "product_id",
        unique: false,
      },
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "backpack", // We need to choose the model name
  }
);

// the defined model is the class itself
// console.log(User === sequelize.models.Backpack); // true
module.exports = Backpack;
