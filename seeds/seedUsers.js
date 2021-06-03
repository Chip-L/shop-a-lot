const { User } = require("../models");

const usersData = [
  {
    user_name: "J.R.R Tolkien",
    password: "password",
    email: "tolkien@test.com",
    character_name: "Bilbo",
  },
  {
    user_name: "Robert Howard",
    password: "password",
    email: "howard06@test.com",
    character_name: "Conan",
  },
  {
    user_name: "test1",
    password: "password",
    email: "test1@test.com",
    character_name: "Brad the bard",
  },
];

/** user order is not guaranteed due to the individual hooks command  */
const seedUsers = () =>
  User.bulkCreate(usersData, {
    individualHooks: true,
  });

module.exports = seedUsers;
