const express = require("express");
const { addToCart2, fectchUserProducts } = require("../controllers/cartController");

const cartrouter = express.Router();

cartrouter.post("/addtocart", addToCart2)
cartrouter.get("/fectchUserProducts/:id", fectchUserProducts)

exports.cartrouter =cartrouter