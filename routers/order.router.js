const express = require("express");
const router = express.Router();

const {
  create,
  list,
  findOrder,
  update,
  deleteOrder,
} = require("../controllers/order.controller");

const asyncMiddelware = require("../middlewares/asyncHandle");

router.route("/:id").get(asyncMiddelware(findOrder));
router.route("/:id").put(asyncMiddelware(update));
router.route("/:id").delete(asyncMiddelware(deleteOrder));
router.route("/").post(asyncMiddelware(create));
router.route("/").get(asyncMiddelware(list));

module.exports = router;
