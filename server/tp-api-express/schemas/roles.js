const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rolSchema = new Schema({
    id: String,
    name: String,
    description: String
});

const rolModel = mongoose.model('roles', rolSchema);

module.exports = rolModel;