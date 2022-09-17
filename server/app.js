const express = require("express");
const mongoose = require("mongoose");
const my_routes = require("./routes")
mongoose.connect('mongodb://localhost:27017/ItemsShop');
const app = express();

app.use(express.json());

app.use(my_routes);

app.listen(3001, () => {
  console.log("Server is running at port 3001");
});
