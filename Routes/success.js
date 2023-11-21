const express = require("express")
const path = require("path")

const router = express.Router()



router.post('/success',(req, res, next)=>{
    res.sendFile(path.join(__dirname, '../', 'views' , 'success.html'));
    // res.redirect('/success')
})

module.exports = router;