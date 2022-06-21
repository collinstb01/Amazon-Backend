const express = require("express")
const mongoose = require("mongoose")
const {router} = require("./routes/user-route.js")
const cors = require("cors");
const { cartrouter } = require("./routes/cart.js");

const app = express();
app.use(express.json());
app.use(cors())
app.use("/api", router)
app.use("/api", cartrouter)

mongoose.connect("mongodb+srv://jayden38400:jayden38400@cluster0.irutn.mongodb.net/?retryWrites=true&w=majority")
.then(() => {
     app.listen(5000),
     console.log("Server running on port 5000")}
).catch((err) => {
    console.log(err)
})
