const busModel = require("../models/bus.model");

module.exports = {
  create: async (req, res) => {
    try {
      const data = await busModel.create(req.body);
      return res.status(201).json({ message: "Thêm bus thành công", data });
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  list: async (req, res) => {
    try {
      let query = {};

      query = {
        ...(req?.query?.type && { type: req.query.type }),
        ...(req?.query?.address && {
          address: { $regex: req.query.address, $options: "i" },
        }),
        ...(req?.query?.name && {
          name: { $regex: req.query.name, $options: "i" },
        }),
      };

      const data = await busModel.find(query);

      return res
        .status(201)
        .json({ message: "Lấy danh sách bus thành công", data });
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  findBus: async (req, res) => {
    try {
      let data = await busModel
        .findById(req.params.id)
        .select(["-updatedAt", "-createdAt"]);

      return res.status(200).json({
        message: "Lấy thông tin bus thành công",
        data,
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  update: async (req, res) => {
    try {
      const data = await busModel.findByIdAndUpdate(
        req.params.id,
        {
          ...req.body,
        },
        { new: true }
      );

      return res
        .status(201)
        .json({ message: "Cập nhật thông tin bus thành công", data });
    } catch (error) {
      throw error;
    }
  },

  deleteBus: async (req, res) => {
    try {
      await busModel.findOneAndDelete({ _id: req.params.id });
      res.status(201).json("Xóa bus thành công");
    } catch (error) {
      throw error;
    }
  },
};
