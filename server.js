var server = null;

module.exports.start = function(app, port){
	server = app.listen(port);

	server.on('close', function(){

	});
}

module.exports.close = function(restart){
	if(server == null)
		return;

	server.close();
	
	if(restart)
		start();
}