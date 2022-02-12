const express = require('express');
const router = express.Router();
const { register, login, getAllUsers, getSingleUser, updateUser, updateUserPassword, deleteUser } = require('../controllers/auth');

router.post('/register', register);
router.post('/login', login);
router.get('/', getAllUsers);
router.get('/:id', getSingleUser);
router.patch('/updateuser/:id', updateUser);
router.patch('/updatepassword/:id', updateUserPassword);
router.delete('/:id', deleteUser);

module.exports = router;