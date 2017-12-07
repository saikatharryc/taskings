var mongoose = require('mongoose');
var Task = mongoose.model('Task');
module.exports = {
	getAll,
	addTask,
	update,
	deleteTask
}
function getAll(req) {
	return Task.find({}).exec();
}
function addTask(req, payload) {
	return new Promise((resolve, reject) => {
		var a = new Task(payload);
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

function update(req, payload) {
	let updateableFields = [
		"task_name",
		"description",
		"amount"
	]
	let updateQuery = { $set: {} }
	for (var field in payload) {
		if (payload.hasOwnProperty(field) && updateableFields.indexOf(field) >= 0) {
			if (payload[field]) {
				updateQuery['$set'][field] = payload[field]
			}
		}
	}
	return new Promise((resolve, reject) => {
		Task.update({ _id: payload._id }, updateQuery, { $upsert: false }).exec((err, updated) => {
			if (err) {
				return reject(err);
			}
			if (updated.nModified > 0) {
				return resolve(updated)
			} else {
				return reject("Some Unknown Error Occured, can't Update!")
			}
		});
	});
}
