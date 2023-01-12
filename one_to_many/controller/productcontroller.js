const { product, user, sequelize } = require("../models")
const { Op, QueryTypes } = require("sequelize");

exports.create = async (req, res) => {
    await product.create(req.body).then(product => {
        res.json(product)
    }).catch(err => {
        res.json(err)
    })
}

exports.get = async (req, res) => {

    // let userdata = sequelize.query(`select * from products inner join users on users.id = products.user_id where users.id = 2`, {
    //     type : QueryTypes.SELECT,
    // }).then(result => {
    //     return res.send(result)
    // }).catch(err => {
    //     return res.send(err)
    // })
    
   await product.findAll({
    include: [
        {
            model : user
        }
    ]
   }).then(product => {
    res.status(200).json({
        success: true,
        message: "product fetched successfully",
        result: product
    })
   }).catch(err => {
    res.status(400).json({
        success: false,
        message: "error while fetching product",
        result: err
    })
   })
}