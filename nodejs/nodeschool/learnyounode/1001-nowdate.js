function getNowFormatDate() {
	/** get value **/
    var date = new Date();
    var year = date.getFullYear(); 
    var month = date.getMonth() + 1; // start from 0
    var day = date.getDate(); 

    var hour = date.getHours();
    var minutes = date.getMinutes();

    var first = year + "-" + format(month) + "-" + format(day);
    var second = format(hour) + ":" + format(minutes);

    return first + " " + second;
}

function format(value){
    return (value < 10 ? "0" : "") + value;
}

exports.getNowFormatDate = getNowFormatDate;
