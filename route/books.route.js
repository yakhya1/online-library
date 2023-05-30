const { Router } = require('express');
const { bookController } = require('../controller/books.controller');

const router = Router();

router.get('/book', bookController.getBooks);
router.get('/book/:id')
router.get('/book/genre/:id', bookController.getBookId);
router.post('/admin/book', bookController.createBook);
router.delete('/admin/book/:id', bookController.deleteBook);
router.patch('/admin/book/:id', bookController.patchBook);
router.patch('/book/:id/user/:userId', bookController.rentBook);
//аренда
router.patch('/admin/book/:bookId/user/:userId', bookController.rentRemoveBook) 
//бан

router.patch('/book/:id/user/:userId/aboba', bookController.returnUserBook)
//возвращать книгу



module.exports = router;