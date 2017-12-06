var O = {};
O.includeRoutes = function (router) {
    var task = require('./task')

    router.use('/', task);
}

module.exports = O;
