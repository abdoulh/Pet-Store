const express = require('express');
const router = express.Router();
const multer = require('multer')

const upload = multer()


const { getAllProducts, createProduct, updateProduct, deleteProduct, getOneProduct } = require('../controllers/products')

router.route('/product')
       .get(getAllProducts)
       .post(upload.single('image'), createProduct)
router.route('/product/:id')
       .put(upload.single('imageUrl'), updateProduct)
       .delete(deleteProduct)

module.exports = router    