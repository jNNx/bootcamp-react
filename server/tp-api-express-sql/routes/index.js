const express = require("express");
const apiRoutes = express.Router()

const userRoutes = require("./user");
const rolRoutes = require("./roles");
const taskRoutes = require("./tasks");

apiRoutes.use("/user", userRoutes);
apiRoutes.use("/roles", rolRoutes);
apiRoutes.use("/task", taskRoutes);

module.exports = apiRoutes;