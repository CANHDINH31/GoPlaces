const authRouter = require("./auth.router");
const userRouter = require("./user.router");
const tourRouter = require("./tour.router");
const orderRouter = require("./order.router");
const commentRouter = require("./comment.router");
const hotelRouter = require("./hotel.router");
const busRouter = require("./bus.router");

const errorHandle = require("../middlewares/errorHandle");

module.exports = (app) => {
  app.use("/api/auth", authRouter);
  app.use("/api/user", userRouter);
  app.use("/api/tour", tourRouter);
  app.use("/api/order", orderRouter);
  app.use("/api/comment", commentRouter);
  app.use("/api/hotel", hotelRouter);
  app.use("/api/bus", busRouter);

  app.use(errorHandle);
};
