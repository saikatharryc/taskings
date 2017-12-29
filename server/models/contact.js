var mongoose = require("mongoose");
var ContactSchema = new mongoose.Schema(
    {
        email: String,
        phone: String
    },
    { timestamps: true }
);

// TaskSchema.path('task_name').required(true, 'Task name cannot be blank');

module.exports = { ContactSchema };
