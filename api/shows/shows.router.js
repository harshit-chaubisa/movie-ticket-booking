const { addShows, getShows, getShowsById, updateShows, deleteShows } = require("./shows.controller");
const router = require("express").Router();
const { checkAdminToken } = require("../../auth/tokenValidation");

router.post("/", checkAdminToken, addShows);
router.get("/", checkAdminToken, getShows);
router.get("/:id",checkAdminToken, getShowsById);
router.patch("/", checkAdminToken, updateShows);
router.delete("/", checkAdminToken, deleteShows);

module.exports = router;