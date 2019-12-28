const express = require('express');
const router = express.Router();

const movies = require('../controllers/moviesController.js')

router.get('/', movies.getMovies);
router.post('/', movies.createMovie);
router.get('/:id', movies.getMovie);
router.put('/update/:id', movies.editMovie);
router.delete('/delete/:id', movies.deleteMovie);

module.exports = router;