const express = require("express")
const {signup, signin, verifyToken, getUser} = require("../controllers/user-controllers.js")

const router = express();

router.post("/signup", signup )
router.post("/signin", signin )
router.get("/user", verifyToken, getUser )
 
exports.router = router