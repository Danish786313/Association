const express = require("express")
const router = express.Router()
const usercontroller = require("../controller/usercontroller")

router.post("/user", usercontroller.create)

router.get("/user", usercontroller.get)

module.exports = router

