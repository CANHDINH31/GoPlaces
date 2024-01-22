const foodModel = require("../models/food.model");

module.exports = {
  create: async (req, res) => {
    try {
      const data = await foodModel.create(req.body);
      return res.status(201).json({ message: "Thêm food thành công", data });
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  list: async (req, res) => {
    try {
      let query = {};

      query = {
        ...(req?.query?.address && {
          address: { $regex: req.query.address, $options: "i" },
        }),
        ...(req?.query?.name && {
          name: { $regex: req.query.name, $options: "i" },
        }),
      };
      const data = await foodModel.find(query);
      return res
        .status(201)
        .json({ message: "Lấy thông tin order thành công", data });
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  findFood: async (req, res) => {
    try {
      let data = await foodModel.findById(req.params.id);
      return res
        .status(200)
        .json({ message: "Lấy thông tin food thành công", data });
    } catch (error) {
      throw error;
    }
  },

  update: async (req, res) => {
    try {
      const data = await foodModel.findByIdAndUpdate(
        req.params.id,
        {
          ...req.body,
        },
        { new: true }
      );

      return res
        .status(201)
        .json({ message: "Cập nhật thông tin food thành công", data });
    } catch (error) {
      throw error;
    }
  },

  deleteFood: async (req, res) => {
    try {
      await foodModel.findOneAndDelete({ _id: req.params.id });
      res.status(201).json("Xóa food thành công");
    } catch (error) {
      throw error;
    }
  },
};
