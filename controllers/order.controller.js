const orderModel = require("../models/order.model");

module.exports = {
  create: async (req, res) => {
    try {
      const data = await orderModel.create(req.body);
      return res.status(201).json({ message: "Book vé thành công", data });
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  list: async (req, res) => {
    try {
      let query = {};

      query = {
        ...(req?.query?.tour && { tour: req.query.tour }),
      };

      const data = await orderModel
        .find(query)
        .populate("user")
        .populate("tour");

      console.log(query);

      return res
        .status(201)
        .json({ message: "Lấy thông tin order thành công", data });
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  findOrder: async (req, res) => {
    try {
      let data = await orderModel
        .findById(req.params.id)
        .populate("user")
        .populate("tour");

      return res
        .status(200)
        .json({ message: "Lấy thông tin order thành công", data });
    } catch (error) {
      throw error;
    }
  },

  update: async (req, res) => {
    try {
      const data = await orderModel.findByIdAndUpdate(
        req.params.id,
        {
          ...req.body,
        },
        { new: true }
      );

      return res
        .status(201)
        .json({ message: "Cập nhật thông tin order thành công", data });
    } catch (error) {
      throw error;
    }
  },

  deleteOrder: async (req, res) => {
    try {
      await orderModel.findOneAndDelete({ _id: req.params.id });
      res.status(201).json("Xóa order thành công");
    } catch (error) {
      throw error;
    }
  },
};
