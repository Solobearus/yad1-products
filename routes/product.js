const express = require('express');
const router = express.Router();

// CRUD controllers
const { createProduct, } = require('../controllers/product/create');
const { getProductsByQuery, getProductById, getProductByAuthorId } = require('../controllers/product/read');
const { updateProduct, addImage, removeImage, updateProductWithImageUploadToS3 } = require('../controllers/product/update');
const { deleteProductById, deleteProductByAuthorId } = require('../controllers/product/delete');


// CRUD routes

// *Create*
router.post('/products', createProduct);

// *Read*
router.get('/products', getProductsByQuery);
router.get('/products/:productId', getProductById);
router.get('/products/getProductByAuthorId/:authorId', getProductByAuthorId);

// *Update*
router.put('/products/:productId', updateProduct);
router.put('/products/:productId/image', addImage);
router.put('/products/:productId/deleteImage', removeImage);
router.put('/updateProductWithImageUploadToS3', updateProductWithImageUploadToS3);

// *Delete*
router.delete('/products/', deleteProductByAuthorId);
router.delete('/products/:productId', deleteProductById);

module.exports = router;