const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tasksSchemas = new Schema({
    id: String,
    name: String,
    description: String
});

const taskModel = mongoose.model('tasks', tasksSchemas);

module.exports = taskModel;