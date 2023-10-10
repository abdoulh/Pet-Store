const express = require('express');
const router = express.Router();

const {checkTokenMiddleware} = require('../middlewares/checkToken.middleware')

const { getAllUsers, deleteUser,createProfil,signin } = require('../controllers/users');

router.route('/users')
    .get(getAllUsers)
router.route('/users/:id')
    .delete(deleteUser)


router.route('/users/signup')
        .post(createProfil)
router.route('/users/signin' , [checkTokenMiddleware])
        .post(signin)


module.exports = router;