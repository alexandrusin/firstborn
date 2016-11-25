// index.js
console.log('hello from node.js')

// require import express module
var express = require('express')
var app = express()
var path = require('path')


// define a port to listen to
var PORT = 3000


// create a function to handle requests and send response
app.get('/', function(request, response){
	response.sendFile(path.join(__dirname + '/app/index.html'))
	//response.send('this is the express speaking!')
})

// use app files
app.use(express.static(__dirname + '/app'))

// start the server
app.listen(PORT, function(err){

	// show me the error!
	if(err){
		return console.log('something went wrong', err);
	}

	// callback -> when server is successfully listening
	console.log('Server listening on: http://localhost:%s', PORT);

});
