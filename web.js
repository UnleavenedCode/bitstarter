var express = require('express');
var fs = require('fs');
var maFile ="index.html";

app.get('/', function(request, response){
    var html =fs.readFileSync(maFile).toString();
    response.send(html);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on" + port);
});
