const express = require("express");
const router = express.Router();

const {
  create,
  list,
  findBus,
  update,
  deleteBus,
} = require("../controllers/bus.controller");

const asyncMiddelware = require("../middlewares/asyncHandle");

router.route("/:id").get(asyncMiddelware(findBus));
router.route("/:id").put(asyncMiddelware(update));
router.route("/:id").delete(asyncMiddelware(deleteBus));
router.route("/").post(asyncMiddelware(create));
router.route("/").get(asyncMiddelware(list));

module.exports = router;
