var tasks = require('../controllers/tasks');
var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
	tasks.getAll(req).then(data => {
		return res.json(data);
	}).catch(err => {
		return next({ message: "some error Occured", err: err });
	});
});
router.post('/create', (req, res, next) => {
	tasks.addTask(req, req.body).then(data => {
		return res.json(data);
	}).catch(err => {
		return next({ message: "some error Occured", err: err });
	});
});
router.get('/delete', (req, res, next) => {
	tasks.deleteTask(req).then(data => {
		return res.json(data);
	}).catch(err => {
		return next({ message: "some error Occured", err: err });
	});
});

module.exports = router;