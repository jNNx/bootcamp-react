const express = require('express');
const userModel = require('../models/users');

const userRoutes = express.Router();

userRoutes.get("/", async(req, res) =>{
    const data = await userModel.findAll();
    res.json( { status: 200, data: data });
});

userRoutes.post("/create", async (req, res)=> {
    const data = await userModel.create(req.body);

    res.json({ status: 200, data});
})

module.exports = userRoutes;