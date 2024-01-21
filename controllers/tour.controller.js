const tourModel = require("../models/tour.model");

module.exports = {
  create: async (req, res) => {
    try {
      const data = await tourModel.create(req.body);
      return res
        .status(201)
        .json({ message: "Thêm tuor du lịch thành công", data });
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};
