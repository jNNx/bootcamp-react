const express = require("express");
const userRoutes = express.Router();

const userModel = require("../models/user");

//get all
userRoutes.get("/", async (req, res) => {
    const data = await userModel.findAll();
    res.json ({ status: 200, data: data });
});

userRoutes.get("/:id", async(req, res) => {
    const data = await userModel.findOne({
        where: { id: req.params.id }
    });
    res.json({ status: 200, data });
});

userRoutes.post("/create", async(req, res) => {
    const data = await userModel.create(req.body);
    res.json({ status: 200, data});
});

userRoutes.put("/:id", async(req, res) => {
    const data = await userModel.update(req.body, {
        where: { id: req.params.id }
    });
    res.json({ status: 200, data });
});

userRoutes.delete("/:id", (req, res) => {
    userModel.destroy({
        where: { id: req.params.id }
    }).then((data) => {
        res.json({ status: 200, data: "Elemento eliminado" });
    });
});

module.exports = userRoutes;