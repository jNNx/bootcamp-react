const express = require("express");
const userRoutes = express.Router();
const userModel = require("../schemas/user");

//get all
userRoutes.get("/", (req, res) => {
    userModel.find({}, (error, data) => {
        if (error)
        {
            res.json({ status: 500, data: error });
        }
        res.json({ status: 200, data: data });
    });
});

//get by id
userRoutes.get("/:id", (req, res) =>{
    userModel.find({ id: req.params.id }, (error, data) =>{
        if (error)
        {
            res.json({ status: 500, data: error});
        }

        res.json( { status: 200, data: data});
    });
});

//post
userRoutes.post("/create", (req, res) => {
    const user = new userModel(req.body);
    console.log(req.body)
    user.save().then((document) => {
        res.json({ status: 200, data: document });
    })
        .catch((error) => {
            res.json({ status: 500, data: error });
        });
});

//put
userRoutes.put("/:id", (req, res) => {
    userModel.findOneAndUpdate(
        { id: req.params.id },
        req.body,
        {
          new: true
        },
        (error, data) => {
          if (error) {
            res.json({ status: 500, data: error });
          }
    
          res.json({ status: 200, data });
        }
      );
});

//delete
userRoutes.delete("/:id", (req, res) => {
    userModel.findOneAndDelete( { id: req.params.id }, {}, (error, data) => {
        if (error)
        {
            res.json({ status: 500, data: error });
        }
        res.json({ status: 200, data: data })
    });
});

module.exports = userRoutes;