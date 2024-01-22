const tourModel = require("../models/tour.model");
const commentModel = require("../models/comment.model");

module.exports = {
  create: async (req, res) => {
    try {
      const data = await tourModel.create(req.body);
      return res
        .status(201)
        .json({ message: "Thêm tour du lịch thành công", data });
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

      const tours = await tourModel.find(query);
      const data = [];
      for (const tour of tours) {
        const tourId = tour._id;
        const feedback = await commentModel.find({ tour: tourId });

        const totalRating = feedback.reduce((total, comment) => {
          return total + comment.rating;
        }, 0);

        const rating = totalRating / feedback?.length;

        if (rating) data.push({ ...tour.toObject(), rating });
        data.push({ ...tour.toObject() });
      }

      return res
        .status(201)
        .json({ message: "Lấy danh sách tour du lịch thành công", data });
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  findTour: async (req, res) => {
    try {
      let data = await tourModel
        .findById(req.params.id)
        .select(["-updatedAt", "-createdAt"]);

      const feedback = await commentModel
        .find({ tour: req.params.id })
        .populate("user");

      const rating = feedback.reduce((total, comment) => {
        return total + comment.rating;
      }, 0);

      return res.status(200).json({
        message: "Lấy thông tin tour thành công",
        data: {
          ...data.toObject(),
          feedback,
          rating: rating / feedback.length,
        },
      });
    } catch (error) {
      throw error;
    }
  },

  update: async (req, res) => {
    try {
      const data = await tourModel.findByIdAndUpdate(
        req.params.id,
        {
          ...req.body,
        },
        { new: true }
      );

      return res
        .status(201)
        .json({ message: "Cập nhật thông tin tour thành công", data });
    } catch (error) {
      throw error;
    }
  },

  deleteTour: async (req, res) => {
    try {
      await tourModel.findOneAndDelete({ _id: req.params.id });
      res.status(201).json("Xóa tour thành công");
    } catch (error) {
      throw error;
    }
  },
};
