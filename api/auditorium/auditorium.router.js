const { addAuditorium, getAuditoriumById, getAuditoriums, updateAuditorium, deleteAuditorium } = require("./auditorium.controller");
const router = require("express").Router();

router.post("/", addAuditorium);
router.get("/", getAuditoriums);
router.get("/:id", getAuditoriumById);
router.patch("/", updateAuditorium);
router.delete("/", deleteAuditorium);

module.exports = router;