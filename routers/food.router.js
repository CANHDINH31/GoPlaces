const express = require("express");
const router = express.Router();

const {
  create,
  list,
  findFood,
  update,
  deleteFood,
} = require("../controllers/food.controller");

const asyncMiddelware = require("../middlewares/asyncHandle");

router.route("/:id").get(asyncMiddelware(findFood));
router.route("/:id").put(asyncMiddelware(update));
router.route("/:id").delete(asyncMiddelware(deleteFood));
router.route("/").post(asyncMiddelware(create));
router.route("/").get(asyncMiddelware(list));

module.exports = router;
