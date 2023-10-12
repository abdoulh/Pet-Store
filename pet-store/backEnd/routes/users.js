const express = require('express');
const router = express.Router();

const { checkTokenMiddleware } = require('../middlewares/checkToken.middleware')

const { getAllUsers, deleteUser, createProfile, signin, getUserId } = require('../controllers/users');

router.route('/users')
    .get(getAllUsers)
router.route('/users/:id')
    .delete(deleteUser)


router.route('/users/signup')
    .post(createProfile)
router.route('/users/signin', [checkTokenMiddleware])
    .post(signin)

router.route('/users/payload/:token')
    .get(getUserId)


module.exports = router;