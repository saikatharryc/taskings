var mongoose = require('mongoose');
var Task = mongoose.model('Task');
module.exports = {
	getAll,
	addTask,
	deleteTask
}
function getAll(req) {
	return Task.find({}).exec();
}
function addTask(req, payload) {
	return new Promise((resolve, reject) => {
		var a = new Task(req.body);
		a.save((err, docs) => {
			if (err) {
				return reject(err);
			} else {
				return resolve(docs);
			}
		});
	});
}
function deleteTask(req) {
	return new Promise((resolve, reject) => {
		Task.findOne({ _id: req.query.id }).exec((err, done) => {
			if (err) {
				return reject(err);
			} else if (!done) {
				return reject('doc Not found!');
			}
			done.remove((errs, deleted) => {
				if (errs) {
					return reject(errs);
				}
				return resolve(deleted);
			});

		});
	});
}	
