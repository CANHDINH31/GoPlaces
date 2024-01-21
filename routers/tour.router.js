const express = require("express");
const router = express.Router();

const {
  create,
  list,
  findTour,
  update,
  deleteTour,
} = require("../controllers/tour.controller");

const asyncMiddelware = require("../middlewares/asyncHandle");

router.route("/").post(asyncMiddelware(create));
router.route("/").get(asyncMiddelware(list));
router.route("/:id").get(asyncMiddelware(findTour));
router.route("/:id").put(asyncMiddelware(update));
router.route("/:id").delete(asyncMiddelware(deleteTour));

module.exports = router;
