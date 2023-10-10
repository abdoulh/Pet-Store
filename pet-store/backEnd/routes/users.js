const express = require('express');
const router = express.Router();

<<<<<<< HEAD
const {checkTokenMiddleware} = require('../middlewares/checkToken.middleware')
const {createProfil,signin} = require('../controllers/users');
=======

const { getAllUsers, deleteUser } = require('../controllers/users');

router.route('/users')
    .get(getAllUsers)
router.route('/users/:id')
    .delete(deleteUser)
>>>>>>> 56ce697ba60fafabe36bb73c467ec7c1eeeaca4a


router.route('/users/signup')
        .post(createProfil)
router.route('/users/signin' , [checkTokenMiddleware])
        .post(signin)


module.exports = router;