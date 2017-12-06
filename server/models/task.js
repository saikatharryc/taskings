
var mongoose = require('mongoose');
var TaskSchema = new mongoose.Schema({
	task_name: String,
	description: String,
	amount: String
}, { timestamps: true });

// TaskSchema.path('task_name').required(true, 'Task name cannot be blank');

module.exports = { TaskSchema };