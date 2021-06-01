const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection.js");

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    // Model attributes are defined here
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.STRING,
      allowNull: false,
      // allowNull defaults to true
    },
    paid: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      // allowNull defaults to true
    },
    paid: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      // allowNull defaults to true
    },
    paid: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      // allowNull defaults to true
    },
    paid: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      // allowNull defaults to true
    },
    paid: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      // allowNull defaults to true
    },
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
    },

    sequelize,
    timestamps: false,
    underscored: true,
    modelName: "User",
  }
);

// the defined model is the class itself
console.log(User === sequelize.models.User); // true
module.exports = User;
