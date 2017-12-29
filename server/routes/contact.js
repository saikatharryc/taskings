var contact = require("../controllers/contact");
var express = require("express");
var http_status = require("http-status");
var router = express.Router();

router.get("/", (req, res, next) => {
    contact
        .getAll(req)
        .then(data => {
            return res.json(data);
        })
        .catch(err => {
            return next({
                message: "Cannot Get!",
                err: err,
                status: http_status.BAD_REQUEST
            });
        });
});
router.get("/:id", (req, res, next) => {
    let payload = {
        id: req.params.id
    };
    contact
        .getById(req, payload)
        .then(data => {
            return res.json(data);
        })
        .catch(err => {
            return next({
                message: "Cannot Get!",
                err: err,
                status: http_status.BAD_REQUEST
            });
        });
});
router.post("/", (req, res, next) => {
    contact
        .addContact(req, req.body)
        .then(data => {
            return res.json(data);
        })
        .catch(err => {
            return next({
                message: "Cannot Create!",
                err: err,
                status: http_status.BAD_REQUEST
            });
        });
});
router.post("/update", (req, res, next) => {
    console.log("cammmee");
    contact
        .update(req, req.body)
        .then(data => {
            return res.json(data);
        })
        .catch(err => {
            return next({
                message: "Cannot Update!",
                err: err,
                status: http_status.BAD_REQUEST
            });
        });
});

router.post("/delete", (req, res, next) => {
    contact
        .deleteContact(req)
        .then(data => {
            return res.json(data);
        })
        .catch(err => {
            return next({
                message: "Cannot delete!",
                err: err,
                status: http_status.BAD_REQUEST
            });
        });
});

module.exports = router;
