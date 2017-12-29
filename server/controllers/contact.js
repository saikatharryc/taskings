var mongoose = require("mongoose");
var Contact = mongoose.model("Contact");
module.exports = {
    getAll,
    getById,
    addContact,
    update,
    deleteContact
};
function getAll(req) {
    return Contact.find({}).exec();
}

function getById(req, payload) {
    return Contact.find({ _id: payload.id }).exec();
}

function addContact(req, payload) {
    return new Promise((resolve, reject) => {
        var a = new Contact(payload);
        a.save((err, docs) => {
            if (err) {
                return reject(err);
            } else {
                return resolve(docs);
            }
        });
    });
}
function deleteContact(req) {
    return new Promise((resolve, reject) => {
        Contact.findOne({ _id: req.query.id }).exec((err, done) => {
            if (err) {
                return reject(err);
            } else if (!done) {
                return reject("doc Not found!");
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
    let updateableFields = ["email", "phone"];
    let updateQuery = { $set: {} };
    for (var field in payload) {
        if (
            payload.hasOwnProperty(field) &&
            updateableFields.indexOf(field) >= 0
        ) {
            if (payload[field]) {
                updateQuery["$set"][field] = payload[field];
            }
        }
    }
    return new Promise((resolve, reject) => {
        Contact.update({ _id: payload._id }, updateQuery, {
            $upsert: false
        }).exec((err, updated) => {
            if (err) {
                return reject(err);
            }
            if (updated.nModified > 0) {
                return resolve(updated);
            } else {
                return reject("Some Unknown Error Occured, can't Update!");
            }
        });
    });
}
