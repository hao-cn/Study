var server = require("./router_http_server");
var router = require("./easy_router");
var factory = require("./factory");

server.start(router.route, factory.factory);