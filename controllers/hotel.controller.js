const hotelModel = require("../models/hotel.model");

module.exports = {
  create: async (req, res) => {
    try {
      const data = await hotelModel.create(req.body);
      return res
        .status(201)
        .json({ message: "Thêm khách sạn thành công", data });
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
        ...(req?.query?.name && {
          name: { $regex: req.query.name, $options: "i" },
        }),
      };

      const data = await hotelModel.find(query);

      return res
        .status(201)
        .json({ message: "Lấy danh sách khách sạn thành công", data });
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  findTour: async (req, res) => {
    try {
      let data = await hotelModel
        .findById(req.params.id)
        .select(["-updatedAt", "-createdAt"]);

      return res.status(200).json({
        message: "Lấy thông tin khách sạn thành công",
        data,
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  update: async (req, res) => {
    try {
      const data = await hotelModel.findByIdAndUpdate(
        req.params.id,
        {
          ...req.body,
        },
        { new: true }
      );

      return res
        .status(201)
        .json({ message: "Cập nhật thông tin khách sạn thành công", data });
    } catch (error) {
      throw error;
    }
  },

  deleteHotel: async (req, res) => {
    try {
      await hotelModel.findOneAndDelete({ _id: req.params.id });
      res.status(201).json("Xóa hotel thành công");
    } catch (error) {
      throw error;
    }
  },
};
