const express = require("express")
const router = express.Router()
const constroller = require("../controller/productcontroller")

router.post("/product", constroller.create)

router.get("/product", constroller.get)

module.exports = router