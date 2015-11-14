var express = require("express");
var  app = express();

app.use(express.static(__dirname + '/static'));


app.listen(3965, function(){
	console.log('listening on port 3965');
})