//**Dependencies***//
const path = require("path");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

//Giving access to req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => console.log("Now listening"));
