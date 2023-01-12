const { user, product } = require("../models")

exports.create = async (req, res) => {
    await user.create(req.body).then(result => {
        res.json(result)
    }).catch(err => {
        res.json(err)
    })
}

exports.get = async (req, res) => {
   await user.findAll({
    include: [
        {
            model : product
        }
    ]
   }).then(result => {
    res.status(200).json({
        success: true,
        message: "user fetched successfully",
        result: result
    })
   }).catch(err => {
    res.status(400).json({
        success: false,
        message: "error while fetching user",
        result: err
    })
   })
}