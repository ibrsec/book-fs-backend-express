
const bookController = require('../controllers/bookControllers.js');

const express = require('express');
const router = express.Router();

router.get('/', bookController.list)
router.post('/', bookController.create)
router.get('/:id', bookController.listOne)
router.delete('/:id', bookController.deleteBook)
router.put('/:id', bookController.updateBook)


module.exports = router;