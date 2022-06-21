const express = require("express")
const {signup, signin} = require("../controllers/user-controllers.js")

const router = express();

router.post("/signup", signup )
router.post("/signin", signin )
// router.get("/getUser/:id", getUser )
 
exports.router = router