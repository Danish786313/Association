const { product, user, sequelize, junction } = require("../models")
const { Op, QueryTypes } = require("sequelize");

exports.create = async (req, res) => {
    await createProduct(req.body).then(product => {
        res.json(product)
    }).catch(err => {
        res.json(err)
    })
}

exports.get = async (req, res) => {
    let prod = await product.findAll({
        include :  [user]
    })
    res.json(prod)
}