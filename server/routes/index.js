var O = {};
O.includeRoutes = function(router) {
    var task = require("./task");
    var contact = require("./contact");

    router.use("/", task);
    router.use("/contact", contact);
};

module.exports = O;
