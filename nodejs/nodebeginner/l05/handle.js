function start(){
    console.log("Request handler 'start' was called.");
    return "The respond for start";
}

function end(){
    console.log("Request handler 'end' was called.");
    return "The respond for end";
}

function others(){
    console.log("Request handler 'others' was called.");
    return "The respond for others";
}

exports.start = start;
exports.end = end;
exports.others = others;
