const { sequelize } = require("./models")
const express = require("express")
const app = express()
app.use(express.json())

const userroute = require("./routes/userroute")
const productroute = require("./routes/productroute")
app.use("/api", userroute)
app.use("/api", productroute)
app.use("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "we are in home page"
    })
}) 

port = process.env.port || 5000
app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
    sequelize.sync({force : true }).then(result => {
        console.log("database connected")
    }).catch(err => {
        console.log("Databse not connected")
    })
})
