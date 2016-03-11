var handle = require("./handle");

var factory = {};
factory["/start"] = handle.start;
factory["/end"] = handle.end;
factory["/others"] = handle.others;
factory["/body"] = handle.body;
factory["/upload"] = handle.upload;

exports.factory = factory;