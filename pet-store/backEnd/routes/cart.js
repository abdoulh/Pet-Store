const express = require('express');
const router = express.Router();


const { getCartItems, addToCart, removeFromCart } = require('../controllers/cart');


router.route('/carts')
    .get(getCartItems)

router.route('/carts/:userID/:productID')
    .post(addToCart)
    .delete(removeFromCart)




module.exports = router;