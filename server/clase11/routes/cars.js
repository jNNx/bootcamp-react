const express = require('express');
const carsModel = require("../models/cars");

const carsRoutes = express.Router();

carsRoutes.get("/", async(req, res) => {
    const data = await carsModel.findAll();

    res.json({ status: 200, data: data });
});

module.exports = carsRoutes;