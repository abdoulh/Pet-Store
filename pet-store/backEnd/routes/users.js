const express = require('express');
const router = express.Router();

const {checkTokenMiddleware} = require('../middlewares/checkToken.middleware')
const {createProfil,signin} = require('../controllers/users');


router.route('/users/signup')
        .post(createProfil)
router.route('/users/signin' , [checkTokenMiddleware])
        .post(signin)


module.exports = router;