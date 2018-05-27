var express = require ("express");
var app = express();
var bodyParser = require ("body-parser");
var fs = require ("fs");

app.use (express.static (__dirname + '/public'));
app.use (bodyParser.urlencoded ({extended: true}));

app.get ('/helpdesk', function (request, response) {
	response.sendFile ('public/index.html');
});

app.post ('/post-suggestion', function (request, response) {

	var name = request.body.name;
	var suggestion = request.body.suggestion;

	fs.writeFile ('suggestions/' + name, suggestion + '\n', function (error) {
		if (error) response.send (error);
		else response.send ("Suggestion sent");
	});

});

app.listen (4006);
console.log ("[ HELPDESK ] Server listening on port 4006");
