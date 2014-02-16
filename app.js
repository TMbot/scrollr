var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var mongo = require('mongodb').MongoClient;

server.listen(3001);
//debug comment
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
	res.sendfile(__dirname + '/index.html');
});

mongo.connect('mongo://0.0.0.0:27017/chat', function (err, db) {
    if (err) throw err;

    client.on('connection', function (socket) {

        var col = db.collection('messages');

        col.find().limit(100).sort({_id: 1}).toarray(function (err, res) {
            if (err) throw err;
            socket.emit('output', res);
        });

        socket.on('input', function (data) {
            var name = data.name;
            var message = data.message;
            var wpp = /^\s*$/;

            if (wpp.test(name) || wpp.test(message)) {
                sendStatus('Name and message is required.');
            } else {
                col.insert({ "name": name, "message": "message" }, function () {
                    client.emit('output', [data]);
                });
            }
        });
    });
});
