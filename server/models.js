const mongoose = require("mongoose");

const ItemsSchema = mongoose.Schema({
    name:String,
    manufacture:String,
    price:Number
});

module.exports = mongoose.model("items",ItemsSchema);
    