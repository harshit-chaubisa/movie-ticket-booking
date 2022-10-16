const { createMovie, getMovies, getMoviesById, updateMovies, deleteMovie } = require("./movie.controller")
const router = require("express").Router();

router.post("/", createMovie);
router.get("/", getMovies);
router.get("/:id", getMoviesById);
router.patch("/", updateMovies);
router.delete("/", deleteMovie);

module.exports = router;