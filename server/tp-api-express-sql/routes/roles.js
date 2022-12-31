const express = require("express");
const rolRoutes = express.Router();

const rolModel = require("../models/roles");

//get all
rolRoutes.get("/", async (req, res) => {
    const data = await rolModel.findAll();
    res.json ({ status: 200, data: data });
});

rolRoutes.get("/:id", async(req, res) => {
    const data = await rolModel.findOne({
        where: { id: req.params.id }
    });
    res.json({ status: 200, data });
});

rolRoutes.post("/create", async(req, res) => {
    const data = await rolModel.create(req.body);
    res.json({ status: 200, data});
});

rolRoutes.put("/:id", async(req, res) => {
    const data = await rolModel.update(req.body, {
        where: { id: req.params.id }
    });
    res.json({ status: 200, data });
});

rolRoutes.delete("/:id", (req, res) => {
    rolModel.destroy({
        where: { id: req.params.id }
    }).then((data) => {
        res.json({ status: 200, data: "Elemento eliminado" });
    });
});

module.exports = rolRoutes;