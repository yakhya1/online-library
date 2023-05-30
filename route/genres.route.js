const { Router } = require('express');
const { genreController } = require('../controller/genres.controller');

const router = Router();

router.post('/admin/genre', genreController.createGenre);
router.delete('/admin/genre/:id', genreController.deleteGenre);
router.patch('/admin/genre/:id', genreController.patchGenre);
router.get('/genre', genreController.getGenre);

module.exports = router;