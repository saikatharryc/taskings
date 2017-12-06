const mongoose = require('mongoose');

const { TaskSchema } = require('./task');


mongoose.model('Task', TaskSchema);

module.exports = mongoose;
