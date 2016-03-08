var server = require("./router_http_server");
var router = require("./easy_router");

server.start(router.route);