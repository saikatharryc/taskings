var tasks = require("../controllers/tasks");
var express = require("express");
var http_status = require("http-status");
var router = express.Router();

router.get("/", (req, res, next) => {
    tasks
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
router.get("/by_id/:id", (req, res, next) => {
    let payload = {
        id: req.params.id
    };
    tasks
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
router.post("/create", (req, res, next) => {
    tasks
        .addTask(req, req.body)
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
    tasks
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
    tasks
        .deleteTask(req)
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
