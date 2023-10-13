const { Router } = require("express");

const  userRouter  = require("./users.routes");

const routes = Router();

routes.use("/user", userRouter);

module.exports = routes;
