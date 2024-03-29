const express = require("express");
const router = express.Router();

const {
  list,
  deleteUser,
  findUser,
  update,
} = require("../controllers/user.controller");

const asyncMiddelware = require("../middlewares/asyncHandle");

router.route("/:id").put(asyncMiddelware(update));
router.route("/:id").delete(asyncMiddelware(deleteUser));
router.route("/:id").get(asyncMiddelware(findUser));
router.route("/").get(asyncMiddelware(list));

module.exports = router;
