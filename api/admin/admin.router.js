const { createAdmin, getAdmin, getAdminById, updateAdmin, deleteAdmin, adminLogin } = require("./admin.controller");
const router = require("express").Router();
const { checkAdminToken } = require("../../auth/tokenValidation")

router.post("/", createAdmin);
router.get("/", checkAdminToken, getAdmin);
router.get("/:id", checkAdminToken, getAdminById);
router.patch("/",checkAdminToken, updateAdmin);
router.delete("/",checkAdminToken, deleteAdmin);
router.post("/login", adminLogin);
module.exports = router;