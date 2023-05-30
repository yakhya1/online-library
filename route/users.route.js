const { Router } = require('express');
const { userController } = require("../controller/users.controller");

const router = Router();

router.get('/user', userController.getUser);
router.post('/user', userController.createUser);
router.delete('/user/:id', userController.deleteUser);
router.patch('/user/:id', userController.patchUser);

// router.patch('/user/:id/book/:bookId', userController.)

module.exports = router;