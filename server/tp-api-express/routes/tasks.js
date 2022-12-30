const express = require("express");
const taskRoutes = express.Router();
const taskModel = require("../schemas/tasks");

taskRoutes.get("/", (req, res) => {
    taskModel.find({}, (error, data) => {
        if (error)
        {
            res.json({ status: 500, data: error });
        }
        res.json({ status: 200, data: data });
    });
});

//get by id
taskRoutes.get("/:id", (req, res) =>{
    taskModel.find({ id: req.params.id }, (error, data) =>{
        if (error)
        {
            res.json({ status: 500, data: error});
        }

        res.json( { status: 200, data: data});
    });
});

//post
taskRoutes.post("/create", (req, res) => {
    const task = new taskModel(req.body);
    console.log(req.body)
    task.save().then((document) => {
        res.json({ status: 200, data: document });
    })
        .catch((error) => {
            res.json({ status: 500, data: error });
        });
});

//put
taskRoutes.put("/:id", (req, res) => {
    taskModel.findOneAndUpdate(
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
taskRoutes.delete("/:id", (req, res) => {
    taskModel.findOneAndDelete( { id: req.params.id }, {}, (error, data) => {
        if (error)
        {
            res.json({ status: 500, data: error });
        }
        res.json({ status: 200, data: data })
    });
});

module.exports = taskRoutes;
