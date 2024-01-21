const express = require("express");
const router = express.Router();

const {
  create,
  list,
  findTour,
  update,
  deleteHotel,
} = require("../controllers/hotel.controller");

const asyncMiddelware = require("../middlewares/asyncHandle");

router.route("/:id").get(asyncMiddelware(findTour));
router.route("/:id").put(asyncMiddelware(update));
router.route("/:id").delete(asyncMiddelware(deleteHotel));
router.route("/").post(asyncMiddelware(create));
router.route("/").get(asyncMiddelware(list));

module.exports = router;
