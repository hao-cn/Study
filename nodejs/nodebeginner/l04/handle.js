function start(){
    console.log("Request handler 'start' was called.");
}

function end(){
    console.log("Request handler 'end' was called.");
}

function others(){
    console.log("Request handler 'others' was called.");
}

exports.start = start;
exports.end = end;
exports.others = others;
