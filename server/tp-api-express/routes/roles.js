const express = require("express");
const rolRoutes = express.Router();
const rolModel = require("../schemas/roles");

//get all
rolRoutes.get("/", (req, res) => {
    rolModel.find({}, (error, data) => {
        if (error) 
        {
            res.json({ status: 500, data: error });
        }
        res.json({ status: 200, data: data });
    });
});

//get by id
rolRoutes.get("/:id", (req, res) => {
    rolModel.find({ id: req.params.id }, (error, data) => {
        if (error)
        {
            res.json({ status: 500, data: error });
        }
        res.json({ status: 200, data: data });
    });
});

//post
rolRoutes.post("/create", (req, res) => {
    const rol = new rolModel(req.body);
    rol
    .save()
    .then((document) => { res.json({ status: 200, data: document });
    }).catch((error) => {
        res.json({ status: 500, data: error});
    });
});

//put
rolRoutes.put("/:id", (req, res) => {
    rolModel.findOneAndUpdate({ id: req.params.id }, req.body, {
        new: true
    }, 
    (error, data) => {
        if (error)
        {
            res.json({ status: 500, data: error });
        }
        res.json({ status: 200, data: data});
    });
});

//delete
rolRoutes.delete("/:id", (req, res) => {
    rolModel.findOneAndDelete({ id: req.params.id }, {}, (error, data) => {
        if (error)
        {
            res.json({ status: 500, data: error });
        }
        res.json({ status: 200, data: data});
    });
});

module.exports = rolRoutes;