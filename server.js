var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require ('fs');

var urlencodedParser = bodyParser.urlencoded({ extended: true })
// variables for holding names/ips
//var IPadresses = JSON.parse(fs.readFileSync('nodes.json'));
var usernames = JSON.parse(fs.readFileSync('users.json'));

app.enable('trust proxy');

app.use(express.static('public'));
app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})

app.post('/register', function (req, res) {
   // get the name from the form and IP from req
   var response = {"name": req.body.User};
   //var IPadress = {"ip": req.ip,"port": req.port?};
   usernames.users.push(response);
   fs.writeFile('users.json', JSON.stringify(usernames));
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("App listening at http://%s:%s", host, port)

})
