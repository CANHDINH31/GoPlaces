const authRouter = require("./auth.router");
const userRouter = require("./user.router");
const tourRouter = require("./tour.router");

const errorHandle = require("../middlewares/errorHandle");

module.exports = (app) => {
  app.use("/api/auth", authRouter);
  app.use("/api/user", userRouter);
  app.use("/api/tour", tourRouter);

  app.use(errorHandle);
};
