const express = require('express')
const path = require('path')

const products = require('../data/products.js')

const router = express.Router();

router.get('/add-product',(req, res, next)=>{
    res.sendFile(path.join(__dirname , "../" , "views" , "add-product.html")); 
})           
    
router.post('/',(req, res, next)=>{
    products.push({ title: req.body.title })
    res.redirect('/')
})
    
module.exports = router;