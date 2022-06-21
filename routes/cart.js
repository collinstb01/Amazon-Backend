const express = require("express");
const { addToCart2, fectchUserProducts, deleteAll, deleteone } = require("../controllers/cartController");

const cartrouter = express.Router();

cartrouter.post("/addtocart", addToCart2)
cartrouter.get("/fectchUserProducts/:id", fectchUserProducts)
cartrouter.delete("/deleteAll/:userId", deleteAll)
cartrouter.delete("/deleteOne/:id/:userId", deleteone)

exports.cartrouter =cartrouter