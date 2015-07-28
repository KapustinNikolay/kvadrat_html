var server = require('http').createServer(function (request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.end("Hello World\n");
});;

server.listen(9000, function () {
	console.log('Server started');
});