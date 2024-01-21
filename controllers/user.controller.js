const userModel = require("../models/user.model");
const ErrorResponse = require("../helpers/ErrorResponse");
const nodemailer = require("nodemailer");

module.exports = {
  list: async (req, res) => {
    try {
      let data = await userModel
        .find({})
        .select(["-updatedAt", "-createdAt"])
        .sort({ createdAt: -1 });
      return res
        .status(200)
        .json({ message: "Lấy danh sách user thành công", data });
    } catch (error) {
      throw error;
    }
  },

  findUser: async (req, res) => {
    try {
      let data = await userModel
        .findById(req.params.id)
        .select(["-updatedAt", "-createdAt"]);
      return res
        .status(200)
        .json({ message: "Lấy thông tin user thành công", data });
    } catch (error) {
      throw error;
    }
  },

  update: async (req, res) => {
    try {
      const data = await userModel.findByIdAndUpdate(
        req.params.id,
        {
          ...req.body,
        },
        { new: true }
      );

      res
        .status(201)
        .json({ message: "Cập nhật thông tin user thành công", data });
    } catch (error) {
      throw error;
    }
  },

  deleteUser: async (req, res) => {
    try {
      await userModel.findOneAndDelete({ _id: req.params.id });
      res.status(201).json("Xóa user thành công");
    } catch (error) {
      throw error;
    }
  },

  // AUTH

  login: async (req, res) => {
    try {
      let { ...body } = req.body;
      let data = await userModel.findOne({
        email: body.email,
        password: body.password,
      });

      if (!data) {
        throw new ErrorResponse(404, "Email hoặc mật khẩu không chính xác");
      }
      return res.status(200).json({ message: "Đăng nhập thành công", data });
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  register: async (req, res) => {
    try {
      let { ...body } = req.body;

      let user = await userModel.findOne({
        email: body.email,
      });

      if (user) {
        throw new ErrorResponse(404, "Email đã tồn tại");
      }

      const data = await userModel.create(body);
      res.status(201).json({ message: "Đăng kí tài khoản thành công", data });
    } catch (error) {
      throw error;
    }
  },

  forgotPassword: async (req, res) => {
    try {
      const data = await userModel.findOne({ email: req.body.email });

      if (!data) {
        throw new ErrorResponse(404, "Email chưa được đăng kí");
      }

      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "dinhphamcanh@gmail.com",
          pass: "hqhuovfhkjzeyxnx",
        },
      });

      await transporter.sendMail({
        from: "dinhphamcanh@gmail.com",
        to: req.body.email,
        subject: `GOPLACES - THAY ĐỔI MẬT KHẨU`,
        html: `<h1>THAY ĐỔI MẬT KHẨU</h1>`,
      });

      return res
        .status(200)
        .json({ message: "Chuyển sang đặt lại mật khẩu", data });
    } catch (error) {
      throw error;
    }
  },

  resetPassword: async (req, res) => {
    try {
      const data = await userModel.findOne({ _id: req.body.userId });

      if (!data) {
        throw new ErrorResponse(404, "Email chưa được đăng kí");
      }

      const updatedUser = await userModel.findByIdAndUpdate(
        req.body.userId,
        { password: req.body.password },
        { new: true }
      );

      return res
        .status(200)
        .json({ message: "Cập nhật mật khẩu thành công", data: updatedUser });
    } catch (error) {
      throw error;
    }
  },
};
