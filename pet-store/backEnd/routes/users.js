const express = require('express');
const router = express.Router();


const { getAllUsers, deleteUser } = require('../controllers/users');


router.route('/users')
    .get(getAllUsers)
router.route('/users/:id')
    .delete(deleteUser)




module.exports = router;