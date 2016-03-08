var handle = require("./handle");

var factory = {};
factory["/start"] = handle.start;
factory["/end"] = handle.upload;
factory["/others"] = handle.others;

exports.factory = factory;