const express = require('express');
const router=express.Router();
const Insert = require('../Controller/ProductController')
router.post('/insert',Insert)
module.exports=router;