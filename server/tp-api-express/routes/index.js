const express = require("express");
const rolRoutes = require("./roles");
const taskRoutes = require("./tasks");
const userRoutes = require("./user");

const apiRoutes = express.Router();

apiRoutes.use("/users", userRoutes);
apiRoutes.use("/roles", rolRoutes);
apiRoutes.use("/tasks", taskRoutes);

module.exports = apiRoutes;