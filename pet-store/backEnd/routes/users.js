const express = require('express');
const router = express.Router();

const { checkTokenMiddleware } = require('../middlewares/checkToken.middleware')

const { getAllUsers, deleteUser, createProfile, signin, getUserId } = require('../controllers/users');

router.route('/users' , [checkTokenMiddleware])
    .get(getAllUsers)
router.route('/users/:id' , [checkTokenMiddleware])
    .delete(deleteUser)


router.route('/users/signup')
    .post(createProfile)
router.route('/users/signin')
    .post(signin)

router.route('/users/payload/:token' , [checkTokenMiddleware])
    .get(getUserId)


module.exports = router;