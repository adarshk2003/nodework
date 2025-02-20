const express = require('express');
const router = express.Router();
const productControl = require('../controllers/productControl');

router.post('/products',productControl.createProduct);
router.get('/products', productControl.getAllProducts);
router.get('/products/:id', productControl.getSingleproduct);


module.exports=router;
