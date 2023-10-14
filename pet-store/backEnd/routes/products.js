const express = require('express');
const router = express.Router();
const multer = require('multer')

const upload = multer()


const { getAllProducts, createProduct, updateProduct, deleteProduct} = require('../controllers/products')

router.route('/product')
       .get(getAllProducts)
       .post(upload.single('image'), createProduct)
router.route('/product/:id')
       .put(updateProduct)
       .delete(deleteProduct)

module.exports = router    