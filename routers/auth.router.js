const express = require("express");
const router = express.Router();

const {
  register,
  login,
  forgotPassword,
  resetPassword,
} = require("../controllers/user.controller");

const asyncMiddelware = require("../middlewares/asyncHandle");

router.route("/register").post(asyncMiddelware(register));
router.route("/login").post(asyncMiddelware(login));
router.route("/forgot-password").post(asyncMiddelware(forgotPassword));
router.route("/reset-password").post(asyncMiddelware(resetPassword));

module.exports = router;
