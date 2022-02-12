const express = require('express');
const router = express.Router();
const authenticateUser = require('../middleware/authentication');
const { createOrder, getSingleOrder, getAllOrders, updateOrder, deleteOrder } = require('../controllers/order');

router.post('/addorder', authenticateUser, createOrder);
router.get('/', authenticateUser, getAllOrders);
router.get('/:id', authenticateUser, getSingleOrder);
router.patch('/:id', authenticateUser, updateOrder);
router.delete('/:id', authenticateUser, deleteOrder);

module.exports = router;