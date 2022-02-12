const express = require('express');
const router = express.Router();
const authenticateUser = require('../middleware/authentication');
const { createProduct, getAllProducts, getSingleProduct, updateProduct, deleteProduct } = require('../controllers/product');

router.post('/addproduct', authenticateUser, createProduct);
router.get('/', authenticateUser, getAllProducts);
router.get('/:id', authenticateUser, getSingleProduct);
router.patch('/:id', authenticateUser, updateProduct);
router.delete('/:id', authenticateUser, deleteProduct);

module.exports = router;