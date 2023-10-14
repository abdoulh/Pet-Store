const express = require('express');
const router = express.Router();
const { checkTokenMiddleware } = require('../middlewares/checkToken.middleware')

const { getCartItems, addToCart, removeFromCart, removeAllFromCart } = require('../controllers/cart');


router.route('/carts/:id' , [checkTokenMiddleware])
    .get(getCartItems)
    .delete(removeAllFromCart)

router.route('/carts/:userID/:productID' , [checkTokenMiddleware])
    .post(addToCart)
    .delete(removeFromCart)





module.exports = router;