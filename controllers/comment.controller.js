const commentModel = require("../models/comment.model");

module.exports = {
  create: async (req, res) => {
    try {
      const data = await commentModel.create(req.body);
      return res
        .status(201)
        .json({ message: "Bình luận và đánh giá thành công", data });
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  list: async (req, res) => {
    try {
      const data = await commentModel
        .find({})
        .populate("user")
        .populate("tour");
      return res
        .status(201)
        .json({ message: "Lấy thông tin comment thành công", data });
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  findOrder: async (req, res) => {
    try {
      let data = await commentModel
        .findById(req.params.id)
        .populate("user")
        .populate("tour");

      return res
        .status(200)
        .json({ message: "Lấy thông tin comment thành công", data });
    } catch (error) {
      throw error;
    }
  },

  update: async (req, res) => {
    try {
      const data = await commentModel.findByIdAndUpdate(
        req.params.id,
        {
          ...req.body,
        },
        { new: true }
      );

      return res
        .status(201)
        .json({ message: "Cập nhật thông tin comment thành công", data });
    } catch (error) {
      throw error;
    }
  },

  deleteOrder: async (req, res) => {
    try {
      await commentModel.findOneAndDelete({ _id: req.params.id });
      res.status(201).json("Xóa comment thành công");
    } catch (error) {
      throw error;
    }
  },
};
