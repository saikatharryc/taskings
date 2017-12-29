const mongoose = require("mongoose");

const { TaskSchema } = require("./task");
const { ContactSchema } = require("./contact");

mongoose.model("Task", TaskSchema);
mongoose.model("Contact", ContactSchema);

module.exports = mongoose;
