const express = require("express");
const taskRoutes = express.Router();

const taskModel = require("../models/tasks");

//get all
taskRoutes.get("/", async (req, res) => {
    const data = await taskModel.findAll();
    res.json ({ status: 200, data: data });
});

//get by id
taskRoutes.get("/:id", async(req, res) => {
    const data = await taskModel.findOne({
        where: { id: req.params.id }
    });
    res.json({ status: 200, data });
});

//create
taskRoutes.post("/create", async(req, res) => {
    const data = await taskModel.create(req.body);
    res.json({ status: 200, data});
});

//edit
taskRoutes.put("/:id", async(req, res) => {
    const data = await taskModel.update(req.body, {
        where: { id: req.params.id }
    });
    res.json({ status: 200, data });
});

//destroy
taskRoutes.delete("/:id", (req, res) => {
    taskModel.destroy({
        where: { id: req.params.id }
    }).then((data) => {
        res.json({ status: 200, data: "Elemento eliminado" });
    });
});

module.exports = taskRoutes;