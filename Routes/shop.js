const express= require('express')

const products = require('../data/products.js')

const router = express.Router()

router.get('/',(req, res, next)=>{
    res.render('shop', { products: products })
})

module.exports = router;