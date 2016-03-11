var server = require("./server");
var router = require("./router");
var factory = require("./factory");

server.start(router.route, factory.factory);