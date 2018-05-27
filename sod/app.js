const express = require ("express");
const app = express();

app.use (express.static (__dirname + "/public"));

app.get ("/sod", function (request, response) {
	response.send ("This is a test to see if this pathway works");
});

app.listen (4007);
console.log ("[ SOD ] Server listening on port 4007");
