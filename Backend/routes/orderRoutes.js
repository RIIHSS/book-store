const express = require('express');
const router = express.Router();
const Order = require('../models/Order')

router.post("/" , async(req,res) => {
    const {user , books , totalPrice} = req.body

    const order = await Order.create({
        user,
        books,
        totalPrice
    })

    res.json(order)
})

module.exports = router;