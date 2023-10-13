const express = require('express');
const router = express.Router();


const { getCartItems, addToCart, removeFromCart, removeAllFromCart } = require('../controllers/cart');


router.route('/carts/:id')
    .get(getCartItems)
    .delete(removeAllFromCart)

router.route('/carts/:userID/:productID')
    .post(addToCart)
    .delete(removeFromCart)





module.exports = router;