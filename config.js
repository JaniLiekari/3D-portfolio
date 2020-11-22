var _port = 1234;
var _ip = "127.0.0.1";


module.exports.preload = function(){
	_port = 6969;
}

module.exports.port = function(){
	return _port;
}
module.exports.ip = function(){
	return _ip;
}


