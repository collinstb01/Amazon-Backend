const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cartSchemaa = new Schema({
  id: {
    type: String,
  },
 title: {
    type: String,
  },
  Image: {
    type: String,
  },
  price: {
    type: String,
  },
  userid: {
    type: String,
  }
});

const shppingcart = mongoose.model("shppingcart", cartSchemaa);

module.exports = shppingcart;
