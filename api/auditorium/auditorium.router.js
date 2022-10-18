const { addAuditorium, getAuditoriumById, getAuditoriums, updateAuditorium, deleteAuditorium } = require("./auditorium.controller");
const router = require("express").Router();
const { checkAdminToken } = require("../../auth/tokenValidation");

router.post("/", checkAdminToken, addAuditorium);
router.get("/", checkAdminToken, getAuditoriums);
router.get("/:id", checkAdminToken, getAuditoriumById);
router.patch("/", checkAdminToken, updateAuditorium);
router.delete("/", checkAdminToken, deleteAuditorium);

module.exports = router;