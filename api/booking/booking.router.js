const { addBooking, getBooking, getBookingById, updateBooking, deleteBooking } = require("./booking.controller");
const router = require("express").Router();

router.post("/", addBooking);
router.get("/", getBooking);
router.get("/:id", getBookingById);
router.patch("/", updateBooking);
router.delete("/", deleteBooking);

module.exports = router;