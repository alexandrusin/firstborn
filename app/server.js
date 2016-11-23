// index.js
console.log('hello from node.js')

// require/import HTTP module
var http = require('http');

// define a port to listen to
const PORT = 3000;

// create a function to handle requests and send response
function handleRequest(request, response){
	response.end('It works!! Path Hit: ' + request.url);
}

// create a server
var server = http.createServer(handleRequest);

// start the server
server.listen(PORT, function(err){

	// show me the error!
	if(err){
		return console.log('something went wrong', err);
	}

	// callback -> when server is successfully listening
	console.log('Server listening on: http://localhost:%s', PORT);

});