const { addShows, getShows, getShowsById, updateShows, deleteShows } = require("./shows.controller")
const router = require("express").Router();

router.post("/", addShows);
router.get("/", getShows);
router.get("/:id", getShowsById);
router.patch("/", updateShows);
router.delete("/", deleteShows);

module.exports = router;