//import http package
var http = require("http");
var PORT1 = 7000;

function handleRequest1(request1, response1) {

	// send response
	response1.end("You're good!" + request1.url);
}

var server1 = http.createServer(handleRequest1);

server1.listen(PORT1, function() {
	console.log("Server listening on: https://localhost:%s", PORT1);
});


var PORT2 = 7500;

function handleRequest2(request2, response2) {

	// send response
	response2.end("You suck!" + request2.url);
}

var server2 = http.createServer(handleRequest2);

server2.listen(PORT2, function() {
	console.log("Server listening on: https://localhost:%s", PORT2);
});